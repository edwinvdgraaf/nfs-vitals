/** @typedef {typeof __propDef.props}  PaneProps */
/** @typedef {typeof __propDef.events}  PaneEvents */
/** @typedef {typeof __propDef.slots}  PaneSlots */
export default class Pane extends SvelteComponentTyped<{
    hidden: boolean;
    tipPosition: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type PaneProps = typeof __propDef.props;
export type PaneEvents = typeof __propDef.events;
export type PaneSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        hidden: boolean;
        tipPosition: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
