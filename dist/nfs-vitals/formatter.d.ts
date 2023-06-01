import type { Metric } from "web-vitals";
import type { EmptyMetric } from "./stores.ts";
declare const formatMetric: (metric: EmptyMetric | Metric) => string;
export { formatMetric };
