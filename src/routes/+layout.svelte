<script lang="ts">
	import './layout.css';
	import { page } from '$app/stores';

	let { children } = $props();

	let isHidden = $state(false);

	let pageState = $state($page.status);

	const routeTitle = $derived.by(() => {
		const path = $page.url.pathname;
		if (path === '/') return "Welcome to Remi's portfolio";

		return path
			.split('/')[1]
			.replace(/[-_]+/g, ' ')
			.replace(/\b\w/g, (c) => c.toUpperCase());
	});

	const displayTitle = $derived(isHidden ? 'I MISS YOU, PLEASE, HIRE ME' : routeTitle);

	$effect(() => {
		let timeoutId: number;

		const onVisibilityChange = () => {
			if (document.hidden) {
				timeoutId = window.setTimeout(() => {
					isHidden = true;
				}, 3000);
			} else {
				window.clearTimeout(timeoutId);
				isHidden = false;
			}
		};

		document.addEventListener('visibilitychange', onVisibilityChange);

		return () => {
			document.removeEventListener('visibilitychange', onVisibilityChange);
			window.clearTimeout(timeoutId);
		};
	});
</script>

<svelte:head>
	{#if pageState === 404}
		<link rel="icon" href="/404.png" />
	{:else}

	{#if isHidden}
			<link rel="icon" href="/sad-face.png" />
		{:else}
		
			<link rel="icon" href="/portfolio.png" />
		{/if}
	{/if}

	<title>{displayTitle}</title>
</svelte:head>

{@render children()}
