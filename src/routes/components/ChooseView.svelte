<script lang="ts">
	import { gsap } from 'gsap';
	import Button from '$lib/components/ui/button/button.svelte';
	let genZImage = $state<HTMLImageElement>();
	let boomerImage = $state<HTMLImageElement>();

	let { choice, onSelect } = $props<{
		choice: string;
		onSelect: (val: string) => void;
	}>();

	const handleHover = (target: HTMLImageElement | undefined) => {
		if (!target) return;
		gsap.killTweensOf(target);

		gsap.fromTo(
			target,
			{
				display: 'block',
				opacity: 0,
				y: 50
			},
			{
				opacity: 1,
				y: 0,
				duration: 3,
				ease: 'power2.out'
			}
		);
	};

	const handleMouseOut = (target: HTMLImageElement | undefined) => {
		if (!target) return;
		gsap.killTweensOf(target);

		gsap.to(target, {
			y: 100,
			opacity: 0,
			duration: 0.8,
			ease: 'power2.in',
			onComplete: () => {
				if (!target) return;

				gsap.set(target, { display: 'none', y: 50 });
			}
		});
	};
</script>

<section
	class="mx-auto flex h-full w-full flex-row items-center justify-center max-[350px]:flex-col"
>
	<div class="relative flex flex-col items-center p-8">
		<img
			bind:this={genZImage}
			src="/home/images/genz.webp"
			alt="gen-z"
			class="pointer-events-none absolute bottom-full left-1/2 mb-4 hidden aspect-video h-44 w-100 -translate-x-1/2 rounded-sm opacity-0"
		/>
		<a href="/egwuda-remi-fullstack-gen-z">
			<Button
				class="cursor-pointer rounded text-xs sm:text-base"
				onmouseenter={() => handleHover(genZImage)}
				onmouseleave={() => handleMouseOut(genZImage)}
				onclick={() => {
					onSelect('genz');
				}}
			>
				View as a Gen Z
			</Button>
		</a>
	</div>

	<div class="relative flex flex-col items-center p-8">
		<img
			bind:this={boomerImage}
			src="/home/images/oldie.webp"
			alt="gen-z"
			class="pointer-events-none absolute bottom-full left-1/2 mb-4 hidden h-44 w-100 -translate-x-1/2 rounded-sm opacity-0"
		/>

		<Button
			class="cursor-pointer rounded text-xs sm:text-base"
			onmouseenter={() => handleHover(boomerImage)}
			onmouseleave={() => handleMouseOut(boomerImage)}
		>
			View as a Boomer
		</Button>
	</div>
</section>
