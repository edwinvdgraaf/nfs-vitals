<svelte:options tag="nfs-vitals" />

<script>
	import Pane from './pane.svelte';
	import Metric from './metric.svelte';
	import { LCP, FID, CLS, INP } from './stores';
	import { onMount } from 'svelte';

	/** @type {string} */
	export let position = 'top';

	let paneIsOpen = false;

	function handleClick() {
		paneIsOpen = !paneIsOpen;
	}

	let initialized = false;

	// https://github.com/sveltejs/svelte/pull/7638
	// fixed in svelte 4
	onMount(() => {
		// [use greeting for whatever]

		initialized = true;
	});
</script>

<div class="nfs-vitals-root">
	<button on:click={handleClick}>
		<slot />
	</button>
	{#if initialized}
		<Pane hidden={!paneIsOpen} tipPosition={position}>
			<Metric metric={CLS} />
			<Metric metric={LCP} />
			<Metric metric={FID} />
			<Metric metric={INP} />
		</Pane>
	{/if}

	<style>
		:host { 
			--metric-good--: var(--metric-good, green);
			--metric-poor--: var(--metric-poor, red);
			--metric-needs-improvement--: var(--metric-needs-improvement, yellow);
		}

		button {
			-webkit-appearance: button;
			text-transform: none;
			overflow: visible;
			font-family: inherit;
			font-size: 100%;
			line-height: 1.15;
			margin: 0;
			background: none;
			border: 0;
			padding: 0;
			color: currentColor;
		}

		.metric-el {
			display: block;
			position: relative;
			padding-left: 1.5rem;
		}

		.metric-el:before {
			content: '';
			width: 0;
			height: 0;
			border-left: 0.4rem solid transparent;
			border-right: 0.4rem solid transparent;
			border-bottom: 0.8rem solid rgba(0, 0, 0, 0.1);
			position: absolute;
			left: 0;
			top: 0.2rem;
		}

		.metric-el.metric-el--good:before {
			border-bottom-color: var(--metric-good--);
		}

		.metric-el.metric-el--poor:before {
			border-bottom-color: var(--metric-poor--);
		}

		.metric-el.metric-el--needs-improvement:before {
			border-bottom-color: var(--metric-needs-improvement--);
		}

		.pane {
			--_p-inline: 1.5ch;
			--_p-block: 0.75ch;
			--_triangle-size: 7px;
			--_bg: hsl(0 0% 20%);
			--_shadow-alpha: 50%;

			--isRTL: -1;

			--_bottom-tip: conic-gradient(from -30deg at bottom, #0000, #000 1deg 60deg, #0000 61deg)
				bottom / 100% 50% no-repeat;
			--_top-tip: conic-gradient(from 150deg at top, #0000, #000 1deg 60deg, #0000 61deg) top / 100%
				50% no-repeat;
			--_right-tip: conic-gradient(from -120deg at right, #0000, #000 1deg 60deg, #0000 61deg) right /
				50% 100% no-repeat;
			--_left-tip: conic-gradient(from 60deg at left, #0000, #000 1deg 60deg, #0000 61deg) left /
				50% 100% no-repeat;

			pointer-events: none;
			user-select: none;

			opacity: 0;
			transform: translateX(var(--_x, 0)) translateY(var(--_y, 0));
			transition: opacity 0.2s ease, transform 0.2s ease;

			position: absolute;
			z-index: 1;
			inline-size: max-content;
			max-inline-size: 25ch;
			text-align: start;
			font-size: 1rem;
			font-weight: normal;
			line-height: initial;
			padding: var(--_p-block) var(--_p-inline);
			margin: 0;
			border-radius: 5px;
			background: var(--_bg);
			color: currentColor;
			will-change: filter;
			filter: drop-shadow(0 3px 3px hsl(0 0% 0% / var(--_shadow-alpha)))
				drop-shadow(0 12px 12px hsl(0 0% 0% / var(--_shadow-alpha)));
        }

			/* light theme style adjustments */
			@media (prefers-color-scheme: light) {
                .pane {
                    --_bg: white;
				--_shadow-alpha: 15%;
                    }
			}

			/* create a stacking context for elements with > .panes */
			:has(> .pane) {
				position: relative;
				/* when those parent elements have focus, hover, etc */
			}

            .pane:not([hidden]) {
                opacity: 1;
                transition-delay: 200ms;
            }


			/* prepend some prose for screen readers only */
			.pane::before {
				content: '; Has tooltip: ';
				clip: rect(1px, 1px, 1px, 1px);
				clip-path: inset(50%);
				height: 1px;
				width: 1px;
				margin: -1px;
				overflow: hidden;
				padding: 0;
				position: absolute;
			}

            /* .pane::after {
                content: "";
                background: var(--_bg);
                position: absolute;
                z-index: -1;
                inset: 0;
                mask: var(--_tip);
            } */

			/* TOP || BLOCK START */
			.pane:is([data-tip-position='top'], [data-tip-position='block-start'], :not([data-tip-position])) {
				inset-inline-start: 50%;
				inset-block-end: calc(100% + var(--_p-block) + var(--_triangle-size));
				--_x: calc(50% * var(--isRTL));
			}

            .pane:is([data-tip-position='top'], [data-tip-position='block-start'], :not([data-tip-position]))::after {
					--_tip: var(--_bottom-tip);
					inset-block-end: calc(var(--_triangle-size) * -1);
					border-block-end: var(--_triangle-size) solid transparent;
            }


			/* RIGHT || INLINE END */
			.pane:is([data-tip-position='right'], [data-tip-position='inline-end']) {
				inset-inline-start: calc(100% + var(--_p-inline) + var(--_triangle-size));
				inset-block-end: 50%;
				--_y: 50%;
			}

            .pane:is([data-tip-position='right'], [data-tip-position='inline-end'])::after {
                --_tip: var(--_left-tip);
                inset-inline-start: calc(var(--_triangle-size) * -1);
                border-inline-start: var(--_triangle-size) solid transparent;
            }

			/* BOTTOM || BLOCK END */
			/* &:is([tip-position='bottom'], [tip-position='block-end']) {
				inset-inline-start: 50%;
				inset-block-start: calc(100% + var(--_p-block) + var(--_triangle-size));
				--_x: calc(50% * var(--isRTL));

				@media (prefers-reduced-motion: no-preference) {
					@nest :has(> &):not(:hover, :active) tool-tip {
						--_y: -3px;
					}
				}

				&::after {
					--_tip: var(--_top-tip);
					inset-block-start: calc(var(--_triangle-size) * -1);
					border-block-start: var(--_triangle-size) solid transparent;
				}
			} */

			/* LEFT || INLINE START */
			.pane:is([data-tip-position='left'], [data-tip-position='inline-start']) {
				inset-inline-end: calc(100% + var(--_p-inline) + var(--_triangle-size));
				inset-block-end: 50%;
				--_y: 50%;
			}

            .pane:is([data-tip-position='left'], [data-tip-position='inline-start'])::after {
                --_tip: var(--_right-tip);
                inset-inline-end: calc(var(--_triangle-size) * -1);
                border-inline-end: var(--_triangle-size) solid transparent;
            }

		}
	</style>
</div>
