<script lang="ts">
	import { cn } from '$lib/utils';
	import { ChevronsDown } from 'lucide-svelte';
	import MusicPlayer from './MusicPlayer.svelte';

	const mediaSrc = [
		'/genz/cursor.webp',
		'/genz/dream_note.webp',
		// '/genz/garri.png',
		'/genz/intellij-idea.png',
		'/genz/notebook.webp',
		'/genz/pen.png',
		'/genz/music.webp',
		'/genz/pixel.png',
		'/genz/window.webp',
		'/genz/folder.webp',
		'/genz/java.png',
		'/genz/vscode.png',
		'/genz/pin_note.webp',
		'/genz/solar_panel.png',
		'/genz/thinkpad.png'
	];

	let { mode = $bindable() } = $props();
	let isplaying = $state(false);
</script>

<div class="relative mb-8 flex h-screen w-screen justify-center overflow-hidden">
	{#each mediaSrc as src}
		{#if src == '/genz/music.webp' || src == '/genz/music_layer.webp'}
			<div
				onmouseenter={() => {
					isplaying = !isplaying;
				}}
				onmouseleave={() => {
					isplaying = false;
				}}
				onclick={() => (isplaying = !isplaying)}
				role="presentation"
				class={cn(
					mode == 'chaos' &&
						src == '/genz/music.webp' &&
						'[@media(min-width:439px)]: [@media(min-width:450px)]: absolute top-5 right-6 w-38 rounded-2xl border border-black/20 bg-[#F6E8D6]/10 shadow-2xl shadow-[#F6E8D6] transition-all duration-500 hover:scale-105 hover:transition-all hover:delay-300 hover:duration-300  [@media(min-width:439px)]:w-44 [@media(min-width:450px)]:w-64',
					src == '/genz/music.webp' &&
						mode == 'cleaned-up' &&
						'  absolute top-12 right-[cal()]  flex h-56 rounded-2xl border border-black/20 bg-[#F6E8D6]/10 shadow-2xl shadow-[#F6E8D6] transition-all duration-700  hover:scale-105 hover:rotate-3 hover:animate-pulse hover:transition-all hover:delay-300 hover:duration-300 [@media(min-width:450px)]:w-96'
				)}
			>
				<div
					class={cn(
						mode == 'cleaned-up'
							? ' relative flex w-2/3 flex-col items-center justify-center '
							: ' relative flex flex-col items-center justify-center'
					)}
				>
					<img
						{src}
						alt="Media"
						class={cn(
							'block',

							src == '/genz/music.webp' && '    animate-spin animation-duration-[5s] ',

							mode == 'cleaned-up' ? ' max-h-56  ' : '  '
						)}
					/>
					<img
						src="/genz/music_layer.webp"
						alt="Media"
						class={cn('absolute  block size-18 animate-spin  rounded-full animation-duration-[5s]')}
					/>
				</div>
				<MusicPlayer {isplaying} {mode} />
			</div>
		{:else}
			<img
				{src}
				alt="Media"
				class={cn(
					'bloc k ',
					src == '/genz/cursor.webp' &&
						mode == 'chaos' &&
						src == '/genz/cursor.webp' &&
						'absolute top-3 right-68 z-10 h-16 w-16 -rotate-12 transition-all delay-500 duration-300 hover:z-20 hover:scale-75 hover:-rotate-32 ',

					mode == 'cleaned-up' &&
						src == '/genz/cursor.webp' &&
						'absolute  top-32 right-[calc(5%-10px)] z-10 h-16 w-16 -rotate-12 transition-all delay-500 duration-300 hover:z-20 hover:scale-75 hover:-rotate-32',

					src == '/genz/dream_note.webp' &&
						mode == 'chaos' &&
						src == '/genz/dream_note.webp' &&
						'[@media(min-width:450px)]:w-58-rotate-56 absolute top-33 -left-8 z-30  h-24 w-38 transition-all delay-200 duration-300 hover:scale-90 hover:-rotate-48  sm:left-24   [@media(min-width:640px)]:h-32 [@media(min-width:640px)]:w-48 ',

						mode == 'cleaned-up' &&
						src == '/genz/dream_note.webp' &&
						'[@media(min-width:450px)]:w-58-rotate-56 absolute top-33 -left-8 z-30  h-24 w-38 transition-all delay-200 duration-300 hover:scale-90 hover:-rotate-48  sm:left-24   [@media(min-width:640px)]:h-32 [@media(min-width:640px)]:w-48 ',








					src == '/genz/garri.png' && mode == 'chaos'
						? 'absolute bottom-26  z-30 h-38 w-37.5  object-cover transition-all duration-300 hover:scale-110 hover:-rotate-6  [@media(min-width:399px)]:bottom-36 [@media(min-width:399px)]:h-48  [@media(min-width:399px)]:w-47.5  [@media(min-width:439px)]:bottom-36 [@media(min-width:450px)]:-bottom-48 [@media(min-width:640px)]:bottom-2/5 [@media(min-width:640px)]:left-25  '
						: '',

					src == '/genz/intellij-idea.png' &&
						mode == 'chaos' &&
						src == '/genz/intellij-idea.png' &&
						'absolute top-36   z-30 h-22  w-22 rotate-12 transition-all duration-300 hover:scale-110   sm:scale-110 sm:hover:scale-125  [@media(min-width:399px)]:left-1 [@media(min-width:450px)]:h-30 [@media(min-width:450px)]:w-30',

					mode == 'cleaned-up' &&
						src == '/genz/intellij-idea.png' &&
						'absolute top-3   h-22 w-22 translate-x-6 rotate-12 transition-all duration-300 hover:z-20 hover:scale-110 sm:translate-x-0     sm:scale-110 sm:hover:scale-125  [@media(min-width:399px)]:left-2 [@media(min-width:450px)]:h-30 [@media(min-width:450px)]:w-30',

					src == '/genz/vscode.png' &&
						mode == 'chaos' &&
						src == '/genz/vscode.png' &&
						'absolute top-0 left-0   z-30 h-30 w-30 rotate-12 transition-all   duration-300 hover:scale-110  sm:scale-110 sm:hover:scale-125',

					mode == 'cleaned-up' &&
						src == '/genz/vscode.png' &&
						'absolute top-3  left-2  h-30 w-30 translate-x-6 transition-all duration-300    hover:z-20 hover:scale-110  sm:translate-x-46 sm:scale-110 sm:hover:scale-125',

					src == '/genz/notebook.webp' &&
						mode == 'chaos' &&
						src == '/genz/notebook.webp' &&
						'absolute top-64 -left-80   z-20 h-96.5 w-200 min-w-135 -rotate-28  object-cover  transition-all  delay-300 duration-300 hover:scale-110 hover:-rotate-22 sm:top-72  sm:max-w-152   [@media(min-width:359px)]:-translate-y-14  [@media(min-width:368px)]:translate-y-4 [@media(min-width:450px)]:top-76 [@media(min-width:450px)]:translate-y-12',

					mode == 'cleaned-up' &&
						src == '/genz/notebook.webp' &&
						'absolute top-64 -left-70   z-20 h-96.5 w-200 min-w-135 rotate-0  object-cover  transition-all  delay-300 duration-300 hover:scale-110 hover:-rotate-6 sm:top-72  sm:max-w-152   [@media(min-width:359px)]:-translate-y-14  [@media(min-width:368px)]:translate-y-4 [@media(min-width:450px)]:top-76 [@media(min-width:450px)]:translate-y-12',

					src == '/genz/pen.png' &&
						mode == 'chaos' &&
						src == '/genz/pen.png' &&
						'[@media(min-width:368px)]: right.-4 absolute top-88 left-50 z-60 h-42 rotate-6 transition-all duration-500 hover:scale-110 hover:-rotate-26  hover:transition-all   hover:delay-200 hover:duration-500 sm:-translate-x-14 [@media(min-width:359px)]:-rotate-1 [@media(min-width:365px)]:-rotate-32',

					mode == 'cleaned-up' &&
						src == '/genz/pen.png' &&
						'[@media(min-width:368px)]: absolute top-14 left-[calc(100%-260px)] h-54  -translate-x-full transition-all duration-500 hover:scale-110 hover:rotate-16 hover:transition-all hover:delay-200 hover:duration-500 [@media(min-width:365px)]:rotate-0',

					src == '/genz/pixel.png' &&
						mode == 'chaos' &&
						src == '/genz/pixel.png' &&
						'[@media(min-width:399px)]:bottom--0 absolute right-12 bottom-3  z-30 h-30 origin-center  rotate-220 cursor-pointer transition-all delay-200 duration-300 hover:z-30  hover:-translate-y-4 hover:scale-110 hover:rotate-230 sm:right-30 [@media(min-width:349px)]:hover:-translate-y-1 [@media(min-width:399px)]:h-40  [@media(min-width:400px)]:translate-y-18  [@media(min-width:449px)]:right-38  [@media(min-width:449px)]:bottom-14  [@media(min-width:640px)]:bottom-1/3 [@media(min-width:640px)]:translate-y-1 [@media(min-width:640px)]:rotate-16  [@media(min-width:640px)]:hover:z-30   [@media(min-width:640px)]:hover:-translate-y-1 [@media(min-width:640px)]:hover:rotate-14 [@media(min-width:700px)]:left-6 ',

					mode == 'cleaned-up' &&
						src == '/genz/pixel.png' &&
						'[@media(min-width:399px)]:bottom--0 absolute right-12 bottom-3  z-30 hidden h-30  origin-center rotate-220 cursor-pointer transition-all delay-200 duration-300  hover:z-30 hover:-translate-y-4 hover:scale-110 hover:rotate-230 sm:right-30 [@media(min-width:349px)]:hover:-translate-y-1  [@media(min-width:399px)]:h-40  [@media(min-width:400px)]:translate-y-18  [@media(min-width:449px)]:right-38  [@media(min-width:449px)]:bottom-14 [@media(min-width:640px)]:bottom-1/3 [@media(min-width:640px)]:translate-y-1  [@media(min-width:640px)]:rotate-16   [@media(min-width:640px)]:hover:z-30 [@media(min-width:640px)]:hover:-translate-y-1 [@media(min-width:640px)]:hover:rotate-14 [@media(min-width:700px)]:left-6 ',
					src == '/genz/pin_note.webp' &&
						'absolute -left-48 z-1 h-96 hover:scale-110 hover:rotate-12 hover:transition-all hover:delay-500 hover:duration-300  ',

					src == '/genz/solar_panel.png' &&
						mode == 'chaos' &&
						src == '/genz/solar_panel.png' &&
						'absolute   right-12 h-64 w-40  translate-y-12   hover:scale-105 hover:rotate-80  hover:transition-all hover:delay-500 hover:duration-500 [@media(min-width:365px)]:-rotate-6  [@media(min-width:399px)]:h-74  [@media(min-width:399px)]:w-54 [@media(min-width:450px)]:bottom-[44%] [@media(min-width:605px)]:rotate-90',
					mode == 'cleaned-up' &&
						src == '/genz/solar_panel.png' &&
						'absolute   right-[calc(calc(100%-590px))] hidden h-64  w-40  translate-y-12 hover:scale-105  hover:rotate-80 hover:transition-all hover:delay-500 hover:duration-500  2xl:flex  [@media(min-width:365px)]:-rotate-6 [@media(min-width:399px)]:h-64 [@media(min-width:399px)]:w-70 [@media(min-width:450px)]:bottom-[76%]  [@media(min-width:605px)]:rotate-90',
					src == '/genz/thinkpad.png' &&
						'absolute  right-46  hidden  w-36  hover:origin-center hover:scale-95 hover:transition-all hover:delay-300  hover:duration-300  2xl:flex [@media(min-width:439px)]:right-50  [@media(min-width:450px)]:h-54  [@media(min-width:450px)]:w-58 [@media(min-width:450px)]:object-fill [@media(min-width:600px)]:top-12  [@media(min-width:600px)]:right-54 [@media(min-width:640px)]:right-58 [@media(min-width:640px)]:w-44 [@media(min-width:720px)]:right-84  ',

					src == '/genz/window.webp' &&
						mode == 'chaos' &&
						src == '/genz/window.webp' &&
						'absolute right-21 hidden h-38 w-18 rotate-90 object-fill  hover:scale-110 hover:transition-all hover:duration-300 sm:h-54 [@media(min-width:450px)]:bottom-86 [@media(min-width:450px)]:flex ',
					mode == 'cleaned-up' &&
						src == '/genz/window.webp' &&
						'delay- absolute right-36 hidden h-38  w-18 rotate-x-0   object-fill  transform-3d hover:scale-110 sm:h-54 [@media(min-width:450px)]:top-14 [@media(min-width:450px)]:flex',

					src == '/genz/folder.webp' &&
						mode == 'chaos' &&
						src == '/genz/folder.webp' &&
						'absolute right-4  z-20 h-26 w-26  transition-all delay-500 duration-300 hover:scale-105 hover:-rotate-12 hover:transition-all  hover:delay-300 hover:duration-300 sm:bottom-73  [@media(min-width:450px)]:flex ',

					mode == 'cleaned-up' &&
						src == '/genz/folder.webp' &&
						'absolute  top-38 z-20 h-32 w-32  transition-all delay-500 duration-300 hover:scale-105 hover:-rotate-12   hover:transition-all  hover:delay-300  hover:duration-300 sm:left-1 [@media(min-width:450px)]:flex  ',
					src == '/genz/java.png' &&
						mode == 'chaos' &&
						src == '/genz/java.png' &&
						'absolute right-46  z-20  h-20 w-26  rounded-md border-2 bg-amber-50 shadow-accent transition-all delay-500  duration-300 hover:scale-105 hover:-rotate-12  hover:transition-all hover:delay-300 hover:duration-300 sm:bottom-76 [@media(min-width:450px)]:flex',

					mode == 'cleaned-up' &&
						src == '/genz/java.png' &&
						'absolute  top-42 z-20  h-26 w-32  rounded-md border-2 bg-amber-50 transition-all delay-500   duration-300  hover:scale-105  hover:-rotate-12 hover:transition-all hover:delay-300  hover:duration-300 sm:left-44 [@media(min-width:450px)]:flex'
				)}
			/>
		{/if}
	{/each}

	<div class={cn('absolute bottom-54 flex items-center gap-8')}>
		<div
			class={cn(
				mode == 'chaos' &&
					'flex h-11 w-10 transform-cpu items-center justify-center rounded-md bg-black/10  transition-all delay-150 hover:rotate-8'
			)}
		>
			<svg
				width="22"
				height="29"
				viewBox="-1 -1 22 29"
				fill="none"
				id="svg134420037_334"
				onclick={() => {
					mode = 'chaos';
				}}
				role="presentation"
			>
				<path
					d="M2.5 20L3 27H17L17.5 20M17.5 20H1.5L0.5 9.5H10H14.75H18.5M17.5 20H18.5L19.5 9.5H18.5M18.5 9.5L19 4M19 4H1M19 4H20V0.5H0V4H1M1 4L1.5 9"
					stroke="#69645E"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				></path>
			</svg>
		</div>

		<div
			class={cn(
				mode == 'cleaned-up' &&
					'flex h-11 w-10 transform-cpu items-center justify-center rounded-md bg-black/10  transition-all delay-150 hover:rotate-8'
			)}
		>
			<img
				src="/genz/broom.png"
				alt=""
				class="max-h-9.5 object-contain hover:scale-110 hover:transition-all hover:delay-300 hover:duration-300"
				onclick={() => {
					mode = 'cleaned-up';
				}}
				role="presentation"
			/>
		</div>

		<div
			class={cn(
				mode == 'notebook' &&
					'flex h-11 w-10 transform-cpu items-center justify-center rounded-md bg-black/10  transition-all delay-150 hover:rotate-8'
			)}
		>
			<svg width="26" height="39" viewBox="-1 -1 26 39" fill="none" id="svg-1742693216_728"
				><path
					d="M13.9737 5L14.5323 4.00494C15.6166 2.07353 18.0668 1.3953 19.9899 2.49423V2.49423C21.9208 3.59763 22.5766 6.06696 21.4475 7.98299L20.8482 9M13.9737 5L12.5702 7.5M13.9737 5L17.4109 7L20.8482 9M20.8482 9L19.375 11.5M19.375 11.5L12.5702 7.5M19.375 11.5L18.1964 13.5L7.12603 32.2861C7.04327 32.4266 6.92742 32.5447 6.78859 32.6301L2.0241 35.5621C1.35783 35.9721 0.5 35.4928 0.5 34.7104V29.2615C0.5 29.0901 0.544083 28.9215 0.628016 28.772L11.4474 9.5L12.5702 7.5M14.8219 11.5L9.41095 21L8.05821 23.375L7.38184 24.5625M4 30.5L5.35274 28.125L6.02911 26.9375"
					stroke="#69645E"
					stroke-width="1.5"
					stroke-linecap="round"
					onclick={() => {
						mode = 'notebook';
					}}
					role="presentation"
				/></svg
			>
		</div>
	</div>

	<div class=" inline-bounce absolute bottom-0">
		<ChevronsDown class="" strokeWidth={1} size={30} />
	</div>
</div>

<style>
	.name_font {
		font-family: 'Remi', sans-serif;
	}

	.inline-bounce {
		animation: inlineBounce 1.2s infinite;
	}

	@keyframes inlineBounce {
		0% {
			transform: translateY(15);
			animation-timing-function: step-end;
		}

		50% {
			transform: translateY(-25px);
			animation-timing-function: ease-in-out;
		}

		100% {
			transform: translateY(15);
		}
	}
</style>
