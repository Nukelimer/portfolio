<script lang="ts">
	import { cn } from '$lib/utils';
	import { Link } from 'lucide-svelte';
	let data = [
		{
			image: '/genz/pixel.png',
			name: 'Project One',
			description: 'Description for project one.',
			stack: 'HTML, CSS and JS',
			link: '#'
		},
		{
			image: '/genz/pixel.png',
			name: 'Project Two',
			description: 'Description for project two.',
			stack: 'HTML, CSS and JS',
			link: '#'
		},
		{
			image: '/genz/pixel.png',
			name: 'Project Three',
			description: 'Description for project three.',
			stack: 'HTML, CSS and JS',
			link: '#'
		}
	];
</script>

<div class=" mx-3 max-w-md  w-full overflow-clip text-black/70">
	<h4
		class="mt-16 mb-8 w-full text-xl font-medium transition-all delay-150 duration-300 hover:scale-105 hover:font-normal"
	>
		Currently cooking ☺︎
	</h4>

	{#each data as item, idx}
		<div
			class={cn(
				'  mx-auto  mb-8  flex w-[90%]   cursor-pointer flex-col gap-4 rounded-xl border border-black/10 bg-accent/30 p-6 transition-transform duration-200 ease-in hover:scale-105 active:scale-105 '
			)}
		>
			<div class="w-full">
				<img src={item.image} alt={item.name} class="max-h-75 w-full object-fill" />
			</div>

			<div>
				<h3 class="mono pb-1  font-semibold text-black/60 capitalize">
					{item.name}
				</h3>

				<p class="py-1 text-black/50">{item.stack}</p>
				<span class="my-3 flex h-px w-1/5 max-w-1/5 bg-black/10"></span>

				<p class="mono font-normal text-black/50">{item.description}</p>

				<p class="mt-6 animate-pulse cursor-context-menu text-black/500">
					<a href={item.link}><Link /></a>
				</p>
			</div>
		</div>
	{/each}
</div>

<style>
	.mono {
		font-family: 'mono', sans-serif;
	}
</style>
