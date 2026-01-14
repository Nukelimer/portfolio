<script lang="ts">
	import { BrushCleaning, ChevronsDown } from 'lucide-svelte';
	import Media from './Media.svelte';
	import { onMount } from 'svelte';
	import LGMedia from './LGMedia.svelte';
	import { cn } from '$lib/utils';
	import Text from './Text.svelte';

	let mode = $state('cleaned-up');



</script>

<div
	class="max-w-x relative flex flex-col items-center justify-center gap-4 overflow-hidden  md:hidden "
>
	<!-- <div class="fixed top-24 z-50 bg-white">width: {width}</div> -->

	<Media  />
	<div
		class=" absolute z-40 ml-2 flex -rotate-28
		 flex-col items-center justify-center font-medium text-black/70 [@media(min-width:365px)]:-translate-y-14 [@media(min-width:389px)]:-translate-y-10"
	>
		<h2 class="name_font mb-10 text-6xl text-black/70 duration-300 hover:scale-110">Remi Egwuda</h2>

		<h3 class="-translate-y-9 capitalize opacity-100 duration-300 hover:scale-110">
			Full-stack development
		</h3>
		<span class="mb-4 -translate-y-9 text-sm capitalize italic duration-300 hover:scale-110"
			>noun & verb</span
		>

		<p class="max-w-xs -translate-y-9 text-sm font-normal duration-300 hover:scale-110">
			a disciplined process of engineering scalable frontends and resilient backends that work
			together to turn complex problems into elegant solutions.
		</p>
	</div>
	<div class=" h-16"></div>
	<div class=" inline-bounce mt-12 mb-12">
		<ChevronsDown class="" strokeWidth={1} size={30} />
	</div>
</div>

<!-- LG SCREEN -->
<div class={cn("  relative hidden flex-col items-center justify-center gap-4 overflow-hidden md:flex ", mode == "chaos" && "")}>
	
	
	<!-- {mode} -->
	
	
	<LGMedia bind:mode={mode} />
	

	
	<Text {mode}/>


	

</div>
<style>
	.name_font {
		font-family: 'Remi', sans-serif;
	}
</style>

