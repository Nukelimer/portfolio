<script>
	import { ChevronsDown } from 'lucide-svelte';
	import Media from './Media.svelte';
</script>

<div class="relative flex flex-col items-center justify-center gap-4 max-w-x sm:bg-red-300 overflow-hidden">
	<Media />
	<div
		class=" absolute z-40 ml-2 flex justify-center
		 [@media(min-width:389px)]:-translate-y-10 [@media(min-width:365px)]:translate-y-14  -rotate-28 flex-col items-center font-medium text-black/70"
	>
		<h2 class="name_font mb-10  text-6xl text-black/70 duration-300 hover:scale-110">
			Remi Egwuda
		</h2>

		<h3 class="-translate-y-9 capitalize opacity-100 duration-300 hover:scale-110">
			Full-stack development
		</h3>
		<span class="mb-4 -translate-y-9 text-sm capitalize italic duration-300 hover:scale-110"
			>noun & verb</span
		>

		<p class="max-w-xs -translate-y-9 font-normal duration-300 hover:scale-110 text-sm">
			a disciplined process of engineering scalable frontends and resilient backends that work
			together to turn complex problems into elegant solutions.
		</p>
	</div>

	<div class=" inline-bounce mb-12 mt-12">
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
			transform: translateY(0);
			animation-timing-function: step-end;
		}

		50% {
			transform: translateY(-15px);
			animation-timing-function: ease-in-out;
		}

		100% {
			transform: translateY(0);
		}
	}
</style>
