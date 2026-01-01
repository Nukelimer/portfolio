<script>
	import Media from './Media.svelte';
	   import { ChevronsDown } from 'lucide-svelte';
</script>

<div class="relative flex flex-col items-center justify-center gap-4">
	<Media />
	<div class="absolute z-10 ml-2 flex -rotate-28 flex-col items-center px-6 opacity-70">
		<h2 class="remi mb-18 -translate-y-4 text-6xl opacity-70">Remi Egwuda</h2>

		<h3 class="-translate-y-9 font-medium capitalize">Full-stack development</h3>
		<span class="mb-8 -translate-y-9 capitalize italic">noun & verb</span>

		<p class="max-w-sm -translate-y-9 text-justify">
			a disciplined process of engineering scalable frontends and resilient backends that work
			together to turn complex problems into elegant solutions.
		</p>
	</div>

	<ChevronsDown />
</div>

<style>
	.remi {
		font-family: 'Remi', sans-serif;
	}
</style>
