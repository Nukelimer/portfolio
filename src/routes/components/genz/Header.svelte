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


	<Media  />
	
	
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

