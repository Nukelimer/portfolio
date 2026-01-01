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
		'/genz/pin_note.webp',
		'/genz/solar_panel.png',
		'/genz/thinkpad.png'
	];
</script>

<div class="relative h-screen w-full flex  justify-center">
	{#each mediaSrc as src}
		<img
			{src}
			alt="Media"
			class={cn(
				'block',
				src == '/genz/cursor.webp' &&
					'absolute top-3 left-6 h-16 w-16 -rotate-12 transition-all delay-500 duration-300 hover:z-20 hover:scale-75 hover:-rotate-32 z-10 ',
				src == '/genz/dream_note.webp' &&
					'absolute top-8 right-5 h-44 w-44 -rotate-28 transition-all delay-200 duration-300 hover:z-20 hover:scale-90 hover:rotate-32 ',
				src == '/genz/garri.png' &&
					'absolute top-28 left-0 h-58 w-56.5 transition-all duration-300 z-10 hover:z-20 hover:scale-110 hover:-rotate-6',
				src == '/genz/intellij-idea.png' &&
					'absolute top-3 right-2/4 h-32 w-32 translate-x-6 rotate-12 transition-all duration-300 hover:z-20 hover:scale-110       ',
				src == '/genz/notebook.webp' && 'absolute top-64 object-cover  hover:bg-r.ed-400  -rotate-28 min-w-150 ',



                                src == '/genz/music.webp' && 'absolute h-44 w-44 top-32 right-33 animate-spin hover:scale-110 hover:rotate-12 hover:transition-all hover:delay-300 hover:duration-300 ',

				src == '/genz/pen.png' && 'h-52  top-92 absolute right-12 hover:scale-110 hover:rotate-12 hover:transition-all hover:delay-300 hover:duration-300 ',



				src == '/genz/pixel.png' &&
					'absolute bottom-32 right-4 h-70 transition-all delay-200 duration-300 hover:z-30 cursor-pointer hover:scale-110 hover:-rotate-16 rotate-4  origin-left hover:-translate-y-4',



				src == '/genz/pin_note.webp' && 'absolute h-96 -left-48 z-1 hover:scale-110 hover:rotate-12 hover:transition-all hover:delay-500 hover:duration-300 ',



				src == '/genz/solar_panel.png' && 'absolute h-88  w-67 bottom-1 rotate-54 left-12  hover:scale-75 hover:rotate-12  hover:transition-all hover:delay-500  hover:duration-300 ',


				src == '/genz/thinkpad.png' && 'absolute h-44 w-46  -right-16 top-32 hover:-translate-x-16 hover:transition-all hover:delay-300 hover:origin-right  hover:duration-300 '
			)}
		/>
	{/each}

        <div class="w-screen"></div>
</div>
