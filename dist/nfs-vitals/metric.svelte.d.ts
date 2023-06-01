/** @typedef {typeof __propDef.props}  MetricProps */
/** @typedef {typeof __propDef.events}  MetricEvents */
/** @typedef {typeof __propDef.slots}  MetricSlots */
export default class Metric extends SvelteComponentTyped<{
    metric: import("./stores.ts").WritableMetric;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type MetricProps = typeof __propDef.props;
export type MetricEvents = typeof __propDef.events;
export type MetricSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        metric: import('./stores.ts').WritableMetric;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
