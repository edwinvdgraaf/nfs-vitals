import { onCLS, onFID, onINP, onLCP } from 'web-vitals';

import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import type { Metric } from 'web-vitals';

export interface EmptyMetric {
    name: 'CLS' | 'FCP' | 'FID' | 'INP' | 'LCP' | 'TTFB';
}

export type WritableMetric = Writable<EmptyMetric | Metric>;

const lcpWriteable = writable<EmptyMetric | Metric>({ name: 'LCP' });
const clsWriteable = writable<EmptyMetric | Metric>({ name: 'CLS' });
const fidWriteable = writable<EmptyMetric | Metric>({ name: 'FID' });
const inpWriteable = writable<EmptyMetric | Metric>({ name: 'INP' });

onLCP((data) => {
    lcpWriteable.set(data);
})

onCLS((data) => {
    clsWriteable.set(data);
})

onFID((data) => {
    fidWriteable.set(data);
})

onINP((data) => {
    inpWriteable.set(data);
})

export const LCP = lcpWriteable;
export const CLS = clsWriteable;
export const FID = fidWriteable;
export const INP = inpWriteable;