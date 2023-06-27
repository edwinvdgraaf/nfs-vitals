<script>
	import { formatMetric } from './formatter';

	/** @type {import('./stores.ts').WritableMetric} */
	export let metric;

	let stateClass = '';

	$: if ('rating' in $metric) {
		stateClass = `metric-el--${$metric.rating}`;
	} else if ($metric.name === 'CLS' && !('value' in metric)) {
		stateClass = `metric-el--good`;
	}
</script>

<div class="metric-el {stateClass}">
	{formatMetric($metric)}
</div>

<style>
	/* style is bugged, pending svelte 4 release */
</style>
