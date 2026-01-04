<script lang="ts">
	let { data } = $props();
</script>

{#each data as item}
	<div class="mx-12 flex gap-4 rounded-xl border border-black/10 bg-accent/30 p-6 py-6 hover:scale-110 active:scale-110 transition-transform duration-200 ease-in-out delay-200 my-8">
		<div class="">
			<img src={item.image} alt={item.name} class="size-18 object-cover" />
		</div>

		<div class="">
			<h3 class=" mono capitalize text-xl pb-2 font-semibold  text-black/50">{item.name}</h3>
			<p class="mono text-black/50">{item.description}</p>
		</div>
	</div>
{/each}



<style>
	.mono {
		font-family: 'mono', sans-serif;
	}
</style>