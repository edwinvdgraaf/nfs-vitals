import type { Writable } from 'svelte/store';
import type { Metric } from 'web-vitals';
export interface EmptyMetric {
    name: 'CLS' | 'FCP' | 'FID' | 'INP' | 'LCP' | 'TTFB';
}
export type WritableMetric = Writable<EmptyMetric | Metric>;
export declare const LCP: Writable<EmptyMetric | Metric>;
export declare const CLS: Writable<EmptyMetric | Metric>;
export declare const FID: Writable<EmptyMetric | Metric>;
export declare const INP: Writable<EmptyMetric | Metric>;
