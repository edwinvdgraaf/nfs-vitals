<script>
	import { onMount } from 'svelte';

	onMount(async () => {
		import('../lib/index.js');
	});
</script>

<h1>Welcome to nfs vitals</h1>
<p>A small custom element to quickly see page performance</p>

<div style:width="50px">
	<nfs-vitals position="right">
		right positioned <svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 16 16"
			width="16"
			height="16"
			style="padding: 5px;"
		>
			<path
				fill-rule="evenodd"
				fill="currentColor"
				d="M5.75.75A.75.75 0 016.5 0h3a.75.75 0 010 1.5h-.75v1l-.001.041a6.718 6.718 0 013.464 1.435l.007-.006.75-.75a.75.75 0 111.06 1.06l-.75.75-.006.007a6.75 6.75 0 11-10.548 0L2.72 5.03l-.75-.75a.75.75 0 011.06-1.06l.75.75.007.006A6.718 6.718 0 017.25 2.541a.756.756 0 010-.041v-1H6.5a.75.75 0 01-.75-.75zM8 14.5A5.25 5.25 0 108 4a5.25 5.25 0 000 10.5zm.389-6.7l1.33-1.33a.75.75 0 111.061 1.06L9.45 8.861A1.502 1.502 0 018 10.75a1.5 1.5 0 11.389-2.95z"
			/>
		</svg>
	</nfs-vitals>
</div>

<div style:width="50px" style:margin-left="500px">
	<nfs-vitals position="left">
		left positioned <svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 16 16"
			width="16"
			height="16"
			style="padding: 5px;"
		>
			<path
				fill-rule="evenodd"
				fill="currentColor"
				d="M5.75.75A.75.75 0 016.5 0h3a.75.75 0 010 1.5h-.75v1l-.001.041a6.718 6.718 0 013.464 1.435l.007-.006.75-.75a.75.75 0 111.06 1.06l-.75.75-.006.007a6.75 6.75 0 11-10.548 0L2.72 5.03l-.75-.75a.75.75 0 011.06-1.06l.75.75.007.006A6.718 6.718 0 017.25 2.541a.756.756 0 010-.041v-1H6.5a.75.75 0 01-.75-.75zM8 14.5A5.25 5.25 0 108 4a5.25 5.25 0 000 10.5zm.389-6.7l1.33-1.33a.75.75 0 111.061 1.06L9.45 8.861A1.502 1.502 0 018 10.75a1.5 1.5 0 11.389-2.95z"
			/>
		</svg>
	</nfs-vitals>
</div>

<div style:width="50px" style:margin-bottom="300px" style:margin-left="150px">
	<nfs-vitals position="bottom">
		bottom positioned <svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 16 16"
			width="16"
			height="16"
			style="padding: 5px;"
		>
			<path
				fill-rule="evenodd"
				fill="currentColor"
				d="M5.75.75A.75.75 0 016.5 0h3a.75.75 0 010 1.5h-.75v1l-.001.041a6.718 6.718 0 013.464 1.435l.007-.006.75-.75a.75.75 0 111.06 1.06l-.75.75-.006.007a6.75 6.75 0 11-10.548 0L2.72 5.03l-.75-.75a.75.75 0 011.06-1.06l.75.75.007.006A6.718 6.718 0 017.25 2.541a.756.756 0 010-.041v-1H6.5a.75.75 0 01-.75-.75zM8 14.5A5.25 5.25 0 108 4a5.25 5.25 0 000 10.5zm.389-6.7l1.33-1.33a.75.75 0 111.061 1.06L9.45 8.861A1.502 1.502 0 018 10.75a1.5 1.5 0 11.389-2.95z"
			/>
		</svg>
	</nfs-vitals>
</div>

<div style:width="50px" style:margin-left="500px">
	<nfs-vitals position="top">
		top positioned <svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 16 16"
			width="16"
			height="16"
			style="padding: 5px;"
		>
			<path
				fill-rule="evenodd"
				fill="currentColor"
				d="M5.75.75A.75.75 0 016.5 0h3a.75.75 0 010 1.5h-.75v1l-.001.041a6.718 6.718 0 013.464 1.435l.007-.006.75-.75a.75.75 0 111.06 1.06l-.75.75-.006.007a6.75 6.75 0 11-10.548 0L2.72 5.03l-.75-.75a.75.75 0 011.06-1.06l.75.75.007.006A6.718 6.718 0 017.25 2.541a.756.756 0 010-.041v-1H6.5a.75.75 0 01-.75-.75zM8 14.5A5.25 5.25 0 108 4a5.25 5.25 0 000 10.5zm.389-6.7l1.33-1.33a.75.75 0 111.061 1.06L9.45 8.861A1.502 1.502 0 018 10.75a1.5 1.5 0 11.389-2.95z"
			/>
		</svg>
	</nfs-vitals>
</div>

<style>
	nfs-vitals {
		/* --metric-good: orange; */
		color: grey;
	}
</style>
