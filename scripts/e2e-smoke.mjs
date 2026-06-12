import { chromium } from "playwright";

const BASE = process.env.PREVIEW_URL ?? "http://localhost:4173";
const VIEWPORT = { width: 1440, height: 900 };

const results = [];
let failed = 0;

function pass(name, detail = "") {
  results.push({ status: "PASS", name, detail });
}

function fail(name, detail = "") {
  results.push({ status: "FAIL", name, detail });
  failed += 1;
}

async function assertVisible(page, selector, name) {
  const el = page.locator(selector).first();
  if (await el.isVisible()) {
    pass(name);
    return true;
  }
  fail(name, `Not visible: ${selector}`);
  return false;
}

async function run() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: VIEWPORT });

  const consoleErrors = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") consoleErrors.push(msg.text());
  });
  page.on("pageerror", (err) => consoleErrors.push(err.message));

  try {
    const response = await page.goto(BASE, {
      waitUntil: "networkidle",
      timeout: 30000,
    });
    if (response?.ok()) pass("Homepage loads (HTTP 200)");
    else fail("Homepage loads (HTTP 200)", `Status: ${response?.status()}`);

    await assertVisible(page, "text=Uday", "Hero name visible");
    await assertVisible(
      page,
      "text=MS Computer Science · Florida Tech",
      "Hero education credential"
    );
    await assertVisible(page, "text=Request Flow Simulator", "Hero simulator card");

    const navSections = [
      ["#what-i-do", "What I Do"],
      ["#experience", "Experience"],
      ["#projects", "Projects"],
      ["#skills", "Skills"],
      ["#contact", "Contact"],
    ];

    for (const [href, label] of navSections) {
      await page.locator(`a[href="${href}"]`).first().click();
      await page.waitForTimeout(400);
      const section = page.locator(href);
      if (await section.isVisible()) pass(`Nav scroll → ${label}`);
      else fail(`Nav scroll → ${label}`, `${href} not in view`);
    }

    await page.goto(`${BASE}/#what-i-do`, { waitUntil: "networkidle" });
    await page.waitForTimeout(500);

    const backendTitles = page.locator(
      ".whatido-panel__title-row h3:has-text('Backend Engineering')"
    );
    const backendCount = await backendTitles.count();
    if (backendCount === 1) {
      pass("What I Do — single Backend title at rest");
    } else {
      fail(
        "What I Do — single Backend title at rest",
        `Found ${backendCount} instances`
      );
    }

    await assertVisible(page, "text=FastAPI & Spring Boot", "What I Do — Backend content");

    const track = page.locator(".whatido-stack");
    if (await track.count()) {
      const box = await track.boundingBox();
      if (box) {
        await page.evaluate(
          ({ top, height }) => window.scrollTo(0, top + height * 0.45),
          box
        );
        await page.waitForTimeout(600);
        await assertVisible(page, "text=Database Systems", "What I Do — Database after scroll");
      }
    } else {
      fail("What I Do stack exists");
    }

    await page.goto(`${BASE}/#experience`, { waitUntil: "networkidle" });
    await assertVisible(page, "text=Master's, Computer Science", "Experience — Master's degree");
    await assertVisible(page, "text=2024", "Experience — 2024 year label");
    await assertVisible(page, "text=Ramco Systems", "Experience — Ramco Systems");
    await assertVisible(page, "text=Saayam", "Experience — Saayam");

    await page.goto(`${BASE}/#projects`, { waitUntil: "networkidle" });
    await assertVisible(
      page,
      "text=Enterprise Knowledge Assistant",
      "Projects — Knowledge Assistant"
    );
    await page
      .locator('button[aria-label="Show LinkForge"]')
      .click();
    await page.waitForTimeout(400);
    await assertVisible(page, "text=LinkForge", "Projects — LinkForge carousel");

    await page.goto(`${BASE}/#skills`, { waitUntil: "networkidle" });
    await assertVisible(page, "text=Programming Languages", "Skills hashmap");

    await page.goto(`${BASE}/#contact`, { waitUntil: "networkidle" });
    await assertVisible(page, "text=udayk.polineni@gmail.com", "Footer email");

    const github = page.locator('a[href*="github.com/Uday-Polineni"]').first();
    const linkedin = page.locator('a[href*="linkedin.com/in/uday-polineni"]').first();
    if ((await github.count()) > 0) pass("GitHub link present");
    else fail("GitHub link present");
    if ((await linkedin.count()) > 0) pass("LinkedIn link present");
    else fail("LinkedIn link present");

    const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
    await mobile.goto(BASE, { waitUntil: "networkidle" });
    if (await mobile.locator("h1.hero-heading").isVisible()) pass("Mobile — hero renders");
    else fail("Mobile — hero renders");
    await mobile.close();

    const criticalErrors = consoleErrors.filter(
      (e) => !e.includes("favicon") && !e.includes("404")
    );
    if (criticalErrors.length === 0) pass("No critical console errors");
    else fail("No critical console errors", criticalErrors.slice(0, 3).join(" | "));
  } catch (err) {
    fail("E2E runner", err instanceof Error ? err.message : String(err));
  } finally {
    await browser.close();
  }

  console.log("\n=== E2E SMOKE TEST RESULTS ===\n");
  for (const r of results) {
    const icon = r.status === "PASS" ? "✓" : "✗";
    console.log(`${icon} ${r.name}${r.detail ? ` — ${r.detail}` : ""}`);
  }
  console.log(`\n${results.length - failed}/${results.length} passed\n`);

  if (failed > 0) process.exit(1);
}

run();
