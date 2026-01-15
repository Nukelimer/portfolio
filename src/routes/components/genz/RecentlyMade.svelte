<script lang="ts">
	import { onMount } from 'svelte';
	import Card from './Card.svelte';
	import Preview from './Preview.svelte';
	import gsap from 'gsap';

	let container: HTMLDivElement | null = null;
	let follower: HTMLDivElement | null = null;

	let x = $state(-56);
	let y = $state(-56);
	let visible = false;
	type Item = {
		image: string;
		name: string;
		description: string;
		previewText: string;
		offsetX: number;
	};

	const items: Item[] = [
		{
			image: '/genz/pixel.png',
			name: 'Drigmo',
			description: 'AI playlist of food and places',
			previewText: 'Preview A',
			offsetX: Math.random() * -40 - 10 // -10px → -50px
		},
		{
			image: '/genz/pixel.png',
			name: 'Flux',
			description: 'Creative AI experiments',
			previewText: 'Preview B',
			offsetX: Math.random() * -40 - 10
		},
		{
			image: '/genz/pixel.png',
			name: 'Nova',
			description: 'Design-first AI tools',
			previewText: 'Preview C',
			offsetX: Math.random() * -40 - 10
		},
		{
			image: '/genz/pixel.png',
			name: 'Echo',
			description: 'Personalized soundscapes',
			previewText: 'Preview D',
			offsetX: Math.random() * -40 - 10
		},
			{
			image: '/genz/pixel.png',
			name: 'Flux',
			description: 'Creative AI experiments',
			previewText: 'Preview B',
			offsetX: Math.random() * -40 - 10
		},
		{
			image: '/genz/pixel.png',
			name: 'Nova',
			description: 'Design-first AI tools',
			previewText: 'Preview C',
			offsetX: Math.random() * -40 - 10
		},
	];

	const gsapEasings = [
    // Power (Standard)
    "power1.in", "power1.out", "power1.inOut",
    "power2.in", "power2.out", "power2.inOut",
    "power3.in", "power3.out", "power3.inOut",
    "power4.in", "power4.out", "power4.inOut",
    // Expressive
    "back.in", "back.out", "back.inOut",
    "elastic.in(1, 0.3)", "elastic.out(1, 0.3)", "elastic.inOut(1, 0.3)",
    "bounce.in", "bounce.out", "bounce.inOut",
    // Smooth/Circular
    "circ.in", "circ.out", "circ.inOut",
    "expo.in", "expo.out", "expo.inOut",
    "sine.in", "sine.out", "sine.inOut",
    "quad.in", "quad.out", "quad.inOut",
    "quart.in", "quart.out", "quart.inOut",
    "quint.in", "quint.out", "quint.inOut",
    // Step/Linear
    "none", "steps(5)"
];
	const directions = [
        { x: 500, y: 0 },    // Right
        { x: -500, y: 0 },   // Left
        { x: 0, y: -500 },   // Top
        { x: 0, y: 500 },    // Bottom
        { x: 400, y: 400 },  // Bottom-Right
        { x: -400, y: -400 } // Top-Left
    ];
	function flyIn(node: HTMLElement, { active, index }: { active: boolean; index: number }) {
		const randomDir = directions[Math.floor(Math.random() * directions.length)];
        const randomEase = gsapEasings[Math.floor(Math.random() * gsapEasings.length)];

		
		const tl = gsap.timeline({ paused: true }).fromTo(
			node,
			{ 
                    opacity: 0, 
                    visibility: 'hidden',
                    x: randomDir.x, 
                    y: randomDir.y, 
                    scale: 0.5,
                    rotate: Math.random() * 20 - 10
                },
                { 
                    opacity: 1, 
                    visibility: 'visible',
                    x: 0, 
                    y: 0, 
                    scale: 1, 
                    rotate: 0,
                    duration: 0.8, 
                    ease: randomEase 
                }
		);

		return {
			update({ active }: { active: boolean; index: number }) {
				if (active) {
					tl.play();
				} else {
					tl.reverse();
				}
			}
		};
	}

	let hoveredIndex = $state<number | null>(null);

	function onMouseMove(e: MouseEvent) {
		if (!visible) return;

		if (!container) return;

		const rect = container.getBoundingClientRect();

		x = e.clientX - rect.left;
		y = e.clientY - rect.top;
		if (y < 60) y -= 60;
		if (x < 15) x -= 160;

		if (y > 1004) y += 610;
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
	onmousemove={onMouseMove}
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
		class="w-full max-w-md pl-4 text-xl font-medium text-black/70 transition-all delay-150 duration-300 hover:scale-105 hover:font-normal md:mx-auto md:max-w-4xl md:text-2xl"
	>
		Recently Made ▶︎
	</h4>

	<div class="mx-auto mt-6 flex  max-w-md flex-col md:max-w-4xl">
		{#each items as item, i}
			<div
				class="group flex items-start gap-10 "
				onmouseenter={() => (hoveredIndex = i)}
				onmouseleave={() => (hoveredIndex = null)}
				role="presentation"
			>
				<Card data={[item]} />

				<div
					use:flyIn={{ active: hoveredIndex === i, index: i }}
					style="opacity: 0; visibility: hidden;"
					class="md:w-1/2"
				>
					<Preview text={item.previewText} />
				</div>
			</div>
		{/each}
	</div>
</div>
