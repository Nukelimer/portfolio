

<script lang="ts">
	import Contact from "./Contact.svelte";

	let text =
		'I’m a full-stack developer (React & Svelte for frontend, Spring Boot for backend) (he/him) passionate about crafting meaningful interactions and bringing fun ideas to life with code. Currently based in Nairobi, Kenya.';
	let text_secondary =
		'I blend aesthetic and emotional design with design psychology to create experiences that delight users and drive measurable outcomes. I hold a Bachelor’s Degree in Law from Ambrose Alli University and a currently a Year 1 Computer Science Student. in Open Source Society University.';
	let text_last = 'I create web experiences to make people smile ☺.';

	let characters = text.split('').map((char, index) => ({ char, id: index }));
	let characters_secondary = text_secondary.split('').map((char, index) => ({ char, id: index }));
	let characters_last = text_last.split('').map((char, index) => ({ char, id: index }));

	let glitchMap = $state<Record<number, { x: number; y: number }>>({});
	let glitchMap_secondary = $state<Record<number, { x: number; y: number }>>({});
	let glitchMap_last = $state<Record<number, { x: number; y: number }>>({});

	$effect(() => {
		const interval = setInterval(() => {
			const nextGlitches: Record<number, { x: number; y: number }> = {};
			const numberOfGlitches = Math.floor(Math.random() * 3) + 1;

			for (let i = 0; i < numberOfGlitches; i++) {
				const randomIndex = Math.floor(Math.random() * characters.length);
				nextGlitches[randomIndex] = {
					x: (Math.random() - 0.5) * 2,
					y: (Math.random() - 0.5) * 2
				};
			}
			glitchMap = nextGlitches;
		}, 80);
		return () => clearInterval(interval);
	});

	$effect(() => {
		const interval = setInterval(() => {
			const nextGlitches: Record<number, { x: number; y: number }> = {};
			const numberOfGlitches = Math.floor(Math.random() * 2) + 1;

			for (let i = 0; i < numberOfGlitches; i++) {
				const randomIndex = Math.floor(Math.random() * characters_secondary.length);
				nextGlitches[randomIndex] = {
					x: (Math.random() - 0.5) * 3,
					y: (Math.random() - 0.5) * 3
				};
			}
			glitchMap_secondary = nextGlitches;
		}, 80);

		return () => clearInterval(interval);
	});

	$effect(() => {
		const interval = setInterval(() => {
			const nextGlitches: Record<number, { x: number; y: number }> = {};
			const numberOfGlitches = Math.floor(Math.random() * 3) + 1;

			for (let i = 0; i < numberOfGlitches; i++) {
				const randomIndex = Math.floor(Math.random() * characters_last.length);
				nextGlitches[randomIndex] = {
					x: (Math.random() - 0.5) * 2,
					y: (Math.random() - 0.5) * 2
				};
			}
			glitchMap_last = nextGlitches;
		}, 80);
		return () => clearInterval(interval);
	});
</script>

<svg style="width:0;height:0;position:absolute" aria-hidden="true">
	<defs>
		<filter id="text-distort">
			<feTurbulence type="fractalNoise" baseFrequency="0.15" numOctaves="1" seed="2" />
			<feDisplacementMap in="SourceGraphic" scale="4" />
		</filter>
	</defs>
</svg>

<div class="mono mx-3 w-full max-w-md md:min-w-4xl  overflow-clip px-4 text-black/70">
	<h4
		class="font-me.dium mt-16 mb-8 w-full origin-top-right text-2xl font-bold transition-all delay-150 duration-300 hover:ml-6 hover:scale-105 hover:font-normal"
	>
		About ⌘
	</h4>

	<div class="mono max-w-sm  mb-22  min-w-full  text-left text-lg font-light text-black/50">
		<div class="flex">
			<p class="font-mono text-lg leading-relaxed text-[#69645e] select-none md:max-w-4xl md:w-full  ">
				{#each characters as { char, id }}
					<span
						class="-block inline transition-all duration-200"
						style:transform={glitchMap[id]
							? `translate(${glitchMap[id].x}px, ${glitchMap[id].y}px)`
							: 'none'}
						style:filter={glitchMap[id] ? "url('#text-distort')" : 'none'}
						style:color={glitchMap[id] ? '#333' : 'inherit'}
					>
						{char === ' ' ? ' ' : char}
					</span>
				{/each}
			</p>
		</div>

		<div class="flex py-6">
			<p class="text-start font-mono text-lg text-[#69645e] select-none">
				{#each characters_secondary as { char, id }}
					<span
						class="inline transition-all duration-200"
						style:transform={glitchMap_secondary[id]
							? `translate(${glitchMap_secondary[id].x}px, ${glitchMap_secondary[id].y}px)`
							: 'none'}
						style:filter={glitchMap_secondary[id] ? "url('#text-distort')" : 'none'}
						style:color={glitchMap_secondary[id] ? '#333' : 'inherit'}
					>
						{char === ' ' ? ' ' : char}
					</span>
				{/each}
			</p>
		</div>

		<div class="flex">
			<p class="text-start font-mono text-lg text-[#69645e] select-none">
				{#each characters_last as { char, id }}
					<span
						class="inline transition-all duration-200"
						style:transform={glitchMap_last[id]
							? `translate(${glitchMap_last[id].x}px, ${glitchMap_last[id].y}px)`
							: 'none'}
						style:filter={glitchMap_last[id] ? "url('#text-distort')" : 'none'}
						style:color={glitchMap_last[id] ? '#333' : 'inherit'}
					>
						{char === ' ' ? ' ' : char}
					</span>
				{/each}
			</p>
		</div>

	
	</div>
</div>

<style>
	.mono {
		font-family: 'IBM Plex Mono', monospace;
	}
	span {
		will-change: transform, filter;
	}
</style>
