<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { cn } from '$lib/utils';

	let { isplaying = false, mode } = $props();

	let audio: HTMLAudioElement;
	let bars: HTMLSpanElement[] = [];

	let currentTime = $state<number>(0);
	let duration = $state<number>(23);

	// 1. Improved progress calculation with a fallback
	let progress = $derived.by(() => {
		if (!duration || duration === 0) return 23;
		return (currentTime / duration) * 100;
	});

	let isUnlocked = $state(false);

  onMount(() => {
        const unlock = () => {
            isUnlocked = true;
            // Clean up
            ['touchstart', 'wheel', 'mousedown'].forEach(ev => 
                document.removeEventListener(ev, unlock)
            );
        };

        ['touchstart', 'wheel', 'mousedown'].forEach(ev => 
            document.addEventListener(ev, unlock, { passive: true })
        );

        // Waveform Animation logic
        const baseHeight = 10;
        gsap.ticker.add((time) => {
            if (bars.length < 5 || !isplaying) return;
            bars.forEach((bar, i) => {
                if (!bar) return;
                const wave = Math.sin(time * 4 + i * 0.6);
                const height = baseHeight + wave * 4;
                gsap.set(bar, { height, y: -(height - baseHeight) / 2 });
            });
        });
    });

	$effect(() => {
		if (!audio) return;
		audio.volume = 0.01;
		if (isplaying) {
			// If we are at the "reset" point, ensure we start at 23
			if (Math.abs(audio.currentTime - 23) < 0.3) {
				audio.currentTime = 23;
			}
			audio.play().catch(() => console.warn('Playback blocked'));
		} else {
			audio.pause();
			audio.currentTime = 23;
			currentTime = 23;
		}
	});

	function formatTime(time: number): string {
		const m = Math.floor(time / 60);
		const s = Math.floor(time % 60)
			.toString()
			.padStart(2, '0');
		return `${m}:${s}`;
	}

	function seek(e: MouseEvent) {
		const el = e.currentTarget as HTMLDivElement;

		const rect = el.getBoundingClientRect();
		const percent = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
		if (duration > 0) {
			audio.currentTime = percent * duration;
			currentTime = audio.currentTime;
		}
	}

	onMount(() => {
		const baseHeight = 10;
		gsap.ticker.add((time) => {
			if (bars.length !== 5 || bars.some((b) => !b)) return;
			bars.forEach((bar) => gsap.set(bar, { height: baseHeight, y: 0 }));

			bars.forEach((bar, i) => {
				const wave = Math.sin(time * 4 + i * 0.6);
				const height = baseHeight + wave * 4;
				gsap.set(bar, { height, y: -(height - baseHeight) / 2 });
			});
		});
	});
</script>

<div class= {cn(mode == "cleaned-up"? "w-1/2 rounded-r-xl justify-evenly flex flex-col bg-white/5 p-4 shadow-sm backdrop-blur-md": "w-full rounded-xl bg-white/5 p-4 shadow-sm backdrop-blur-md")}>
	<div class="mb-2 h-6">
		<div class="flex justify-center gap-1">
			{#each Array(5) as _, i}
				<span bind:this={bars[i]} class="w-1 rounded-full bg-black/60" style="height: 10px"></span>
			{/each}
		</div>
	</div>

	<p class="text-center text-xs text-black/40">The World Is Yours To Take</p>
	<p class="mb-4 text-center text-xs text-black/40">Lil Baby</p>

	<div
		class="relative h-1.5 w-full cursor-pointer rounded-full bg-black/10"
		onclick={seek}
		role="presentation"
	>
		<div class="h-full rounded-full bg-black/60" style:width="{progress}%"></div>

		<div
			class="absolute top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-black/80 shadow-sm"
			style:left="{progress}%"
		></div>
	</div>

	<div class="mt-2 flex justify-center gap-1 text-[10px] font-medium text-black/50">
		<span>{formatTime(currentTime)}</span>
		<span>/</span>
		<span>{formatTime(duration)}</span>
	</div>

	<audio
		bind:this={audio}
		src="/audio/wiy.mp3"
		preload="metadata"
		bind:this={audio}
		bind:currentTime
		bind:duration
	></audio>
</div>
