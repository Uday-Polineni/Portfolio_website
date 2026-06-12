import { useCallback, useRef, useState } from "react";
import "./RequestFlowSimulator.css";

type FlowStep = {
  id: string;
  label: string;
  detail: string;
  latency: number | null;
  skipped?: boolean;
  variant?: "hit" | "miss" | "success";
};

type LogEntry = {
  time: string;
  message: string;
  tone?: "ok" | "warn" | "info";
};

const CACHE_MISS_STEPS: FlowStep[] = [
  { id: "client", label: "Client", detail: "POST /api/v1/orders", latency: null },
  { id: "gateway", label: "API Gateway", detail: "JWT verify · route match", latency: 4 },
  { id: "api", label: "FastAPI", detail: "Schema validation", latency: 11 },
  { id: "redis", label: "Redis", detail: "Cache MISS — key not found", latency: 3, variant: "miss" },
  { id: "postgres", label: "PostgreSQL", detail: "INSERT orders + index lookup", latency: 27 },
  { id: "kafka", label: "Kafka", detail: "Publish order.created", latency: 7 },
  { id: "response", label: "Response", detail: "201 Created", latency: 2, variant: "success" },
];

const CACHE_HIT_STEPS: FlowStep[] = [
  { id: "client", label: "Client", detail: "GET /api/v1/products/42", latency: null },
  { id: "gateway", label: "API Gateway", detail: "JWT verify · rate limit OK", latency: 3 },
  { id: "api", label: "FastAPI", detail: "Handler dispatch", latency: 6 },
  { id: "redis", label: "Redis", detail: "Cache HIT — product:42", latency: 2, variant: "hit" },
  { id: "postgres", label: "PostgreSQL", detail: "Skipped (cached)", latency: 0, skipped: true },
  { id: "kafka", label: "Kafka", detail: "Skipped (read path)", latency: 0, skipped: true },
  { id: "response", label: "Response", detail: "200 OK", latency: 1, variant: "success" },
];

const STEP_PAUSE_MS = 520;

function formatTime(date: Date) {
  return date.toLocaleTimeString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

const RequestFlowSimulator = () => {
  const [steps, setSteps] = useState<FlowStep[]>(CACHE_MISS_STEPS);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [running, setRunning] = useState(false);
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [totalMs, setTotalMs] = useState<number | null>(null);
  const [scenario, setScenario] = useState<"miss" | "hit">("miss");
  const runIdRef = useRef(0);
  const useHitNextRef = useRef(false);

  const runSimulation = useCallback(() => {
    if (running) return;

    const runId = ++runIdRef.current;
    const isHit = useHitNextRef.current;
    useHitNextRef.current = !useHitNextRef.current;

    const flow = isHit ? CACHE_HIT_STEPS : CACHE_MISS_STEPS;
    setScenario(isHit ? "hit" : "miss");
    setSteps(flow);
    setRunning(true);
    setActiveIndex(-1);
    setTotalMs(null);
    setLogs([
      {
        time: formatTime(new Date()),
        message: isHit
          ? "Simulating read path with cache hit..."
          : "Simulating write path with cache miss...",
        tone: "info",
      },
    ]);

    let index = 0;
    let accumulated = 0;

    const tick = () => {
      if (runId !== runIdRef.current) return;

      setActiveIndex(index);

      const step = flow[index];
      const now = formatTime(new Date());

      if (step.latency !== null && step.latency > 0) {
        accumulated += step.latency;
      }

      setLogs((prev) => [
        ...prev,
        {
          time: now,
          message: step.skipped
            ? `${step.label} — skipped`
            : step.latency
              ? `${step.label} · +${step.latency}ms`
              : `${step.label} · request sent`,
          tone: step.variant === "hit" ? "ok" : step.variant === "miss" ? "warn" : step.variant === "success" ? "ok" : "info",
        },
      ]);

      index += 1;

      if (index >= flow.length) {
        setTotalMs(accumulated);
        setRunning(false);
        setLogs((prev) => [
          ...prev,
          {
            time: formatTime(new Date()),
            message: `Completed in ${accumulated}ms — all services healthy`,
            tone: "ok",
          },
        ]);
        return;
      }

      window.setTimeout(tick, STEP_PAUSE_MS);
    };

    window.setTimeout(tick, STEP_PAUSE_MS);
  }, [running]);

  return (
    <div className="flow-sim">
      <div className="flow-sim__header">
        <div>
          <p className="flow-sim__title">Request Flow Simulator</p>
          <p className="flow-sim__subtitle">
            {scenario === "hit" ? "Read path · cache hit" : "Write path · cache miss"}
          </p>
        </div>
        <span className="flow-sim__env">prod · us-east-1</span>
      </div>

      <div className="flow-sim__pipeline">
        {steps.map((step, index) => {
          const isActive = index === activeIndex;
          const isDone = index < activeIndex;
          const isPending = index > activeIndex;
          const isLast = index === steps.length - 1;

          return (
            <div
              key={step.id}
              className={[
                "flow-sim__step",
                isActive && "flow-sim__step--active",
                isDone && "flow-sim__step--done",
                isPending && "flow-sim__step--pending",
                step.skipped && isDone && "flow-sim__step--skipped",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <div className="flow-sim__rail">
                <span className="flow-sim__node" />
                {!isLast && (
                  <span className="flow-sim__connector">
                    {isActive && <span className="flow-sim__packet" />}
                  </span>
                )}
              </div>
              <div className="flow-sim__body">
                <div className="flow-sim__row">
                  <span className="flow-sim__label">{step.label}</span>
                  {isDone && step.latency !== null && step.latency > 0 && (
                    <span className="flow-sim__latency">+{step.latency}ms</span>
                  )}
                  {isDone && step.skipped && (
                    <span className="flow-sim__skipped">skipped</span>
                  )}
                  {step.variant === "hit" && isDone && (
                    <span className="flow-sim__badge flow-sim__badge--hit">HIT</span>
                  )}
                  {step.variant === "miss" && isDone && (
                    <span className="flow-sim__badge flow-sim__badge--miss">MISS</span>
                  )}
                </div>
                <p className="flow-sim__detail">{step.detail}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flow-sim__footer">
        <button
          type="button"
          className="flow-sim__btn"
          onClick={runSimulation}
          disabled={running}
        >
          {running ? "Processing..." : "Send Request"}
        </button>
        {totalMs !== null && (
          <p className="flow-sim__total">
            Total latency <strong>{totalMs}ms</strong>
          </p>
        )}
      </div>

      <div className="flow-sim__log" aria-live="polite">
        {logs.slice(-4).map((entry, i) => (
          <p key={`${entry.time}-${i}`} className={`flow-sim__log-line flow-sim__log-line--${entry.tone ?? "info"}`}>
            <span>{entry.time}</span> {entry.message}
          </p>
        ))}
      </div>
    </div>
  );
};

export default RequestFlowSimulator;
