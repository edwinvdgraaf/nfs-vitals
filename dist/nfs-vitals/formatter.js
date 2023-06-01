// const NUMERIC    = "NUMERIC";
// const TIME_MS    = "TIME_MS";
const valueFormatters = {
    "TIME_MS": (val) => `${Math.round((val + Number.EPSILON) * 100) / 100}ms`,
    "NUMERIC": (val) => val === null || val === undefined ? '-' : `${Math.round(val)}`,
};
const formatMetric = (metric) => {
    if (metric.name === "CLS") {
        if ("value" in metric) {
            return `CLS: ${valueFormatters["NUMERIC"](metric.value)}`;
        }
        return `CLS: 0`;
    }
    if ("value" in metric) {
        return `${metric.name}: ${valueFormatters["TIME_MS"](metric.value)}`;
    }
    return `${metric.name}: -`;
};
export { formatMetric };
