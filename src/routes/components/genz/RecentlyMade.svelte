<script lang="ts">
	import { onMount } from 'svelte';
	import Card from './Card.svelte';

	let container: HTMLDivElement | null = null;
	let follower: HTMLDivElement | null = null;

	let x = -56;
	let y = -56;
	let visible = false;

	function onMouseMove(e: MouseEvent) {
		if (!visible) return;

		if (!container) return;

		const rect = container.getBoundingClientRect();

		x = e.clientX - rect.left;
		y = e.clientY - rect.top;
		if (y < 60) y -= 60;
		if (x < 15) x -= 160;
	}

	onMount(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				visible = entry.isIntersecting;
			},
			{ threshold: 0.1 }
		);

		if (!container) return;
		observer.observe(container);

		return () => observer.disconnect();
	});
</script>

<div
	class=" relative mt-44 min-h-screen w-full overflow-clip"
	on:mousemove={onMouseMove}
	role="presentation"
	bind:this={container}
>
	<div
		bind:this={follower}
		class="pointer-events-none absolute opacity-100 transition-transform duration-300 ease-out"
		style="transform: translate({x}px, {y}px);"
	>
		<div class="max-w-md">
			<span
				class="relative inline-block h-0 w-0
    translate-x-2 -translate-y-4 rotate-12
    rounded-[2px] border-t-20 border-r-10
    border-l-14 border-t-black border-r-transparent border-l-transparent"
			>
				<span
					class="absolute -top-4.5 left-1/2 h-2
           w-2 -translate-x-1/2 rounded-full bg-black blur-[4.5px]"
				></span>
			</span>

			<span class=" rounded-full bg-black px-8 py-2.5 text-center font-medium text-white">You</span>
		</div>
	</div>
	<h4
		class="w-full text-xl font-medium transition-all delay-150 duration-300 hover:scale-105 hover:font-normal"
	>
		Recently Made ▶︎
	</h4>
	<div class=" mx-auto mt-6 flex max-w-md flex-col gap-6">
		<Card
			data={[
				{
					image: '/genz/pixel.png',
					name: 'Drigmo',
					description: 'AI playlist of food and places '
				}
			]}
		/>
	</div>
</div>
