<script lang="ts">
	import { cn } from '$lib/utils';
	import { onMount } from 'svelte';
	import MusicPlayer from './MusicPlayer.svelte';
	import { Presentation } from 'lucide-svelte';

	const mediaSrc = [
		'/genz/cursor.webp',
		'/genz/dream_note.webp',
		'/genz/garri.png',
		'/genz/intellij-idea.png',
		'/genz/notebook.webp',
		'/genz/pen.png',
		'/genz/music.webp',
		'/genz/pixel.png',
		'/genz/window.webp',
		'/genz/folder.webp',
		'/genz/pin_note.webp',
		'/genz/solar_panel.png',
		'/genz/thinkpad.png'
	];

	const audioFiles: Record<string, string> = {
		'/genz/cursor.webp': '/audio/click.mp3',
		'/genz/dream_note.webp': '/audio/paper-crinkle.mp3',
		'/genz/intellij-idea.png': '/audio/keyboard-typing.mp3',
		'/genz/notebook.webp': '/audio/page-flip.wav',
		'/genz/pen.png': '/audio/pen-click.mp3',
		'/genz/music.webp': '/audio/wiy.mp3',
		'/genz/pixel.png': '/audio/camera-shutter.mp3',
		'/genz/window.webp': '/audio/windows-xp.mp3',
		'/genz/folder.webp': '/audio/folder-pop.mp3',
		'/genz/java.png': '/audio/coffee-slurp.mp3',
		'/genz/vscode.png': '/audio/glitch.mp3',
		'/genz/pin_note.webp': '/audio/thumbtack.mp3',
		'/genz/solar_panel.png': '/audio/electric-hum.mp3',
		'/genz/thinkpad.png': '/audio/startup-chime.mp3'
	};

	let currentAudio = $state<HTMLAudioElement | null>(null);

	function playSound(src: string) {
		// 1. Stop any existing audio
		if (currentAudio) {
			currentAudio.pause();
			currentAudio = null;
		}

		const soundPath = audioFiles[src];
		if (soundPath) {
			// 2. Create the NEW audio object first
			const audio = new Audio(soundPath);
			audio.volume = 0.1;

			// 3. Handle specific start times (like your 23s mark)
			if (soundPath === '/audio/wiy.mp3') {
				// We must wait for metadata to load or set it after creation
				audio.currentTime = 23;
			}

			// 4. Assign to state and play
			currentAudio = audio;
			audio.play().catch((err) => {
				console.error('Playback blocked or failed:', err);
			});
		}
	}

	function stopSound() {
		if (currentAudio) {
			currentAudio.pause();
			currentAudio.currentTime = 0;
			currentAudio = null;
		}
	}
	let { mode = $bindable() } = $props();
	let isplaying = $state(false);

	function stopPlayback() {
		isplaying = false;
	}

	onMount(() => {
		// Stop playback whenever the mouse or touch is released anywhere on the screen
		window.addEventListener('mouseup', stopPlayback);
		window.addEventListener('touchend', stopPlayback);

		return () => {
			window.removeEventListener('mouseup', stopPlayback);
			window.removeEventListener('touchend', stopPlayback);
		};
	});
	let audioUnlocked = $state(false);
	$effect(() => {
		const unlock = () => {
			audioUnlocked = true;
			document.removeEventListener('click', unlock);

			console.log('okay');
		};
		document.addEventListener('click', unlock, { once: true });
	});


	onMount(() => {
  const setVH = () => {
    document.documentElement.style.setProperty(
      '--vh',
      `${window.innerHeight * 0.01}px`
    );
  };

  setVH();
  window.addEventListener('resize', setVH);

  return () => window.removeEventListener('resize', setVH);
});

</script>

<div class="relative flex h-[110vh]  w-screen justify-center border-red-400 border-4">
	{#each mediaSrc as src}
		{#if src == '/genz/music.webp' || src == '/genz/music_layer.webp'}
			<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
			<div
				onmouseenter={() => {
					isplaying = !isplaying;
				}}
				tabindex="0"
				onmousedown={() => {
					isplaying = true;
					playSound(src);
				}}
				onmouseup={() => {
					isplaying = false;
					stopSound();
				}}
				role="presentation"
				onclick={() => (isplaying = !true)}
				ontouchstart={(e) => {
					e.preventDefault();
					isplaying = true;

					playSound(src);
				}}
				class="[@media(min-width:439px)].:h-59 absolute top-5 right-6 w-45 rounded-2xl border border-black/20 bg-[#F6E8D6]/10 shadow-2xl shadow-[#F6E8D6] transition-all duration-300 select-none hover:scale-105 hover:transition-all hover:delay-300 hover:duration-300 focus:rotate-3 [@media(min-width:439px)]:w-44 [@media(min-width:450px)]:h-fit [@media(min-width:450px)]:w-50"
			>
				<div class=" relative flex flex-col items-center justify-center">
					<img
						{src}
						alt="Media"
						class={cn(
							'block',

							src == '/genz/music.webp' && '    animate-spin animation-duration-[5s] '
						)}
					/>
					<img
						src="/genz/music_layer.webp"
						alt="Media"
						class={cn('absolute block size-16 animate-spin  rounded-full animation-duration-[5s]')}
					/>
				</div>
				<MusicPlayer {isplaying} {mode} />
			</div>
		{:else if src == '/genz/notebook.webp'}
			<div
			onmousedown={() => playSound(src)}
				ontouchstart={(e) => {
					e.preventDefault(); // Prevents "long press" menus on mobile
					playSound(src);
				}}
				onclick={() => playSound(src)}
				onmouseup={stopSound}
				ontouchend={stopSound}
				role="presentation"
				class={cn(
					src == '/genz/notebook.webp' &&
						'absolute top-1/3 z-20 flex w-full flex-col justify-center items-center transition-all delay-500 duration-500 '
				)}
			>
				<div class="relative flex flex-col justify-center items-center h-full w-full -rotate-28">
					<img
						{src}
						role="presentation"
						alt="Media"
						class=" -z-10  w-screen min-w-sm min-h-sm  hover:scale-110 hover:-rotate-22  focus:-rotate-38 active:-rotate-38 transition-all delay-500 duration-500"
					/>
					<div
						class=" flex  absolute  flex-col  
		 items-center justify-center font-medium text-black/70 select-none "
					>
						<h2 class="name_font  text-6xl text-black/70 duration-300 hover:scale-110">
							Remi Egwuda
						</h2>

						<h3 class=" capitalize opacity-100 duration-300 hover:scale-110">
							Full-stack development
						</h3>
						<span class="mb-4 text-sm capitalize italic duration-300 hover:scale-110"
							>noun & verb</span
						>

						<p class="max-w-xs text-sm font-normal duration-300 hover:scale-110">
							a disciplined process of engineering scalable frontends and resilient backends that
							work together to turn complex problems into elegant solutions.
						</p>
					</div>
				</div>
			</div>
		{:else}
			<img
				{src}
				role="presentation"
				alt="Media"
				onmousedown={() => playSound(src)}
				ontouchstart={(e) => {
					e.preventDefault(); // Prevents "long press" menus on mobile
					playSound(src);
				}}
				onclick={() => playSound(src)}
				onmouseup={stopSound}
				ontouchend={stopSound}
				class={cn(
					'inline-block select-none ',
					src == '/genz/cursor.webp' &&
						'absolute top-3 left-6 z-10 h-16 w-16 -rotate-12 transition-all delay-500 duration-300 hover:z-20 hover:scale-75 hover:-rotate-32 focus:-rotate-16 sm:top-16 sm:left-0 ',

					src == '/genz/dream_note.webp' &&
						'[@media(min-width:450px)]:w-58-rotate-56 absolute top-36 -left-8 z-30 hidden  h-24 w-38 transition-all delay-200 duration-300 hover:scale-90 hover:-rotate-48  sm:top-48 sm:-left-4  [@media(min-width:450px)]:h-38 [@media(min-width:640px)]:h-44 [@media(min-width:640px)]:w-58',

					src == '/genz/garri.png' &&
						'absolute bottom-36  left-59 z-10 h-38 w-37.5 object-cover  transition-all duration-300 hover:z-20 hover:scale-110 hover:-rotate-6 [@media(min-width:399px)]:bottom-36  [@media(min-width:399px)]:h-48 [@media(min-width:399px)]:w-47.5  [@media(min-width:439px)]:bottom-36  [@media(min-width:450px)]:hidden [@media(min-width:640px)]:-bottom-4 [@media(min-width:640px)]:left-1/3  [@media(min-width:640px)]:ml-6  [@media(min-width:700px)]:left-2/6 hidden',

					src == '/genz/intellij-idea.png' &&
						'absolute top-3 left-12  h-22 w-22 translate-x-6 rotate-12  transition-all duration-300 hover:z-20     hover:scale-110 focus:rotate-18  active:rotate-18 sm:translate-x-0 sm:scale-110 sm:hover:scale-125 [@media(min-width:399px)]:left-20 [@media(min-width:450px)]:h-30 [@media(min-width:450px)]:w-30 ',

					src == '/genz/pen.png' &&
						'absolute top-70  z-60 h-42 -rotate-30 hover:scale-110 hover:rotate-12 hover:transition-all hover:delay-200 hover:duration-500  [@media(min-width:390px)]:right-6  right-0    [@media(min-width:365px)]: ',

					src == '/genz/pixel.png' &&
						' absolute right-5 top-[75%]   h-30 origin-center  cursor-pointer transition-all delay-200 duration-300 hover:z-30 hover:scale-110 hover:rotate-20 sm:right-30 [@media(min-width:349px)]:hover:-translate-y-1 [@media(min-width:399px)]:h-40  [@media(min-width:449px)]:right-38 [@media(min-width:500px)]:rotate-0    ',

					src == '/genz/pin_note.webp' &&
						'absolute -left-48 z-1 h-96 hover:scale-110 hover:rotate-12 hover:transition-all hover:delay-500 hover:duration-300  ',

					src == '/genz/solar_panel.png' &&
						'absolute top-[70%] left-18 h-64 w-40   rotate-84  hover:rotate-50  hover:transition-all duration-500 hover:delay-500 hover:duration-500 [@media(min-width:365px)]:rotate-66  [@media(min-width:399px)]:h-74  [@media(min-width:399px)]:w-54 [ [@media(min-width:605px)]:rotate-85 scale-75',

					src == '/genz/thinkpad.png' &&
						'absolute top-26 right-52  z-10  h-38 w-40 object-cover hover:origin-center hover:scale-95 hover:transition-all hover:delay-300  hover:duration-300  [@media(min-width:439px)]:right-50 [@media(min-width:450px)]:h-64  [@media(min-width:450px)]:w-58  [@media(min-width:450px)]:object-cover  ',

					src == '/genz/window.webp' &&
						'absolute right-8 bottom-64 hidden h-38 w-18 object-fill sm:bottom-54 sm:h-54 [@media(min-width:450px)]:bottom-28 [@media(min-width:450px)]:flex',

					src == '/genz/folder.webp' &&
						'absolute right-4 bottom-24 hidden h-28 w-28 hover:scale-105 hover:-rotate-12  hover:transition-all hover:delay-300 hover:duration-300 sm:right-28 sm:bottom-68 [@media(min-width:450px)]:-bottom-3  [@media(min-width:450px)]:flex [@media(min-width:700px)]:right-37'
				)}
			/>
		{/if}
	{/each}

	
</div>

<style>
	.name_font {
		font-family: 'Remi', sans-serif;
	}

	.stable-vh {
  height: calc(var(--vh) * 100);
}

</style>
