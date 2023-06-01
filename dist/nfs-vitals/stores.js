import { onCLS, onFID, onINP, onLCP } from 'web-vitals';
import { writable } from 'svelte/store';
const lcpWriteable = writable({ name: 'LCP' });
const clsWriteable = writable({ name: 'CLS' });
const fidWriteable = writable({ name: 'FID' });
const inpWriteable = writable({ name: 'INP' });
onLCP((data) => {
    lcpWriteable.set(data);
});
onCLS((data) => {
    clsWriteable.set(data);
});
onFID((data) => {
    fidWriteable.set(data);
});
onINP((data) => {
    inpWriteable.set(data);
});
export const LCP = lcpWriteable;
export const CLS = clsWriteable;
export const FID = fidWriteable;
export const INP = inpWriteable;
