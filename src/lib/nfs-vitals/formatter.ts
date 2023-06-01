// const NUMERIC    = "NUMERIC";
// const TIME_MS    = "TIME_MS";

import type { Metric } from "web-vitals";
import type { EmptyMetric } from "./stores.ts";

type FormatterType = "NUMERIC" | "TIME_MS";

const valueFormatters: Record<FormatterType, Function> = {
    "TIME_MS": (val: number): string => `${Math.round((val + Number.EPSILON) * 100) / 100}ms`,
    "NUMERIC": (val: number): string => val === null || val === undefined ? '-' : `${Math.round(val)}`,
}

const formatMetric = (metric: EmptyMetric | Metric): string => {
    if (metric.name === "CLS") {
        if ("value" in metric) {
            return `CLS: ${valueFormatters["NUMERIC"](metric.value)}`
        }
        return `CLS: 0`
    }
    
    if ("value" in metric) {
        return `${metric.name}: ${valueFormatters["TIME_MS"](metric.value)}`;
    }

    return `${metric.name}: -`;
};

export {
    formatMetric
}
