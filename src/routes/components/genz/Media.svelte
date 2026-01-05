<script lang="ts">
	import { cn } from '$lib/utils';

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
</script>

<div class="relative flex h-screen w-full justify-center">
	{#each mediaSrc as src}
		{#if src == '/genz/music.webp' || src == '/genz/music_layer.webp'}
			<div
				class="absolute top-5 right-6 h-44 w-38 rounded-2xl border border-black/20 bg-[#F6E8D6]/10 shadow-2xl shadow-[#F6E8D6] hover:scale-105 hover:transition-all hover:delay-300 hover:duration-300 [@media(min-width:439px)]:h-59 [@media(min-width:439px)]:w-44 [@media(min-width:450px)]:h-68 [@media(min-width:450px)]:w-50"
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
			</div>
		{:else}
			<img
				{src}
				alt="Media"
				class={cn(
					'bloc k',
					src == '/genz/cursor.webp' &&
						'absolute top-3 left-6 z-10 h-16 w-16 -rotate-12 transition-all delay-500 duration-300 hover:z-20 hover:scale-75 hover:-rotate-32 ',

					src == '/genz/dream_note.webp' &&
						'[@media(min-width:450px)]:w-58-rotate-56 absolute top-36 -left-8 z-30 h-24  w-38 transition-all delay-200 duration-300 hover:scale-90 hover:-rotate-48 [@media(min-width:450px)]:h-38',

					src == '/genz/garri.png' &&
						'absolute bottom-26  left-59 z-10 h-38 w-37.5 object-cover  transition-all duration-300 hover:z-20 hover:scale-110 hover:-rotate-6 [@media(min-width:399px)]:bottom-36  [@media(min-width:399px)]:h-48 [@media(min-width:399px)]:w-47.5  [@media(min-width:439px)]:bottom-36  [@media(min-width:450px)]:bottom-18 ',

					src == '/genz/intellij-idea.png' &&
						'absolute top-3 left-12  h-22 w-22 translate-x-6 rotate-12 transition-all duration-300 hover:z-20 hover:scale-110 [@media(min-width:399px)]:left-20     [@media(min-width:450px)]:h-30 [@media(min-width:450px)]:w-30   ',

					src == '/genz/notebook.webp' &&
						'absolute top-64 z-20   h-96.5 w-200 min-w-135 -rotate-28 object-cover  transition-all  delay-300  duration-300 hover:scale-110 hover:-rotate-22 [@media(min-width:359px)]:-translate-y-14 [@media(min-width:368px)]:translate-y-4  [@media(min-width:450px)]:translate-y-12',

					src == '/genz/pen.png' &&
						'absolute top-92 right-4 z-60 h-42 rotate-6 hover:scale-110 hover:rotate-12 hover:transition-all hover:delay-200 hover:duration-500 [@media(min-width:359px)]:right-0 [@media(min-width:359px)]:-translate-y-28 [@media(min-width:359px)]:-rotate-1  [@media(min-width:365px)]:right-4 [@media(min-width:365px)]:rotate-6  [@media(min-width:368px)]:translate-y-0 [@media(min-width:450px)]:-translate-x-6 [@media(min-width:450px)]:translate-y-12',

					src == '/genz/pixel.png' &&
						'absolute right-12 bottom-3 h-30  origin-center rotate-220 cursor-pointer  transition-all delay-200 duration-300 hover:z-30 hover:-translate-y-4 hover:scale-110  hover:rotate-230 [@media(min-width:399px)]:bottom-0 [@media(min-width:399px)]:h-40 [@media(min-width:400px)]:translate-y-18',

					src == '/genz/pin_note.webp' &&
						'absolute -left-48 z-1 h-96 hover:scale-110 hover:rotate-12 hover:transition-all hover:delay-500 hover:duration-300  ',

					src == '/genz/solar_panel.png' &&
						'absolute bottom-0  left-8 h-64 w-40  translate-y-12  rotate-84  hover:scale-105 hover:rotate-50  hover:transition-all hover:delay-500 hover:duration-500 [@media(min-width:365px)]:-rotate-6 [@media(min-width:399px)]:h-74  [@media(min-width:399px)]:w-54 [@media(min-width:450px)]:-bottom-18',

					src == '/genz/thinkpad.png' &&
						'absolute top-26 right-46  h-38  w-36 object-cover hover:origin-center hover:scale-95 hover:transition-all hover:delay-300 hover:duration-300  [@media(min-width:439px)]:right-50  [@media(min-width:450px)]:h-64 [@media(min-width:450px)]:w-58  [@media(min-width:450px)]:object-fill ',

					src == '/genz/window.webp' && 'hidden [@media(min-width:450px)]:flex absolute right-8 bottom-64 h-38 w-18 object-fill',
					
					src == '/genz/folder.webp' && 'hidden [@media(min-width:450px)]:flex absolute right-4 bottom-24 h-28 w-28 hover:scale-105  hover:-rotate-12 hover:transition-all hover:delay-300 hover:duration-300 '
				)}
			/>
		{/if}
	{/each}

	<div class="w-screen"></div>
</div>
==