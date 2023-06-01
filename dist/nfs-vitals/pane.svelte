<script>
	/** @type {boolean} */
	export let hidden;

	/** @type {string} */
	export let tipPosition;
</script>

<div class="pane" {hidden} data-tip-position={tipPosition}>
	<slot />
</div>
