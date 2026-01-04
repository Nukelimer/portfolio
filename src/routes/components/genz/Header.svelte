<script>
	import { ChevronsDown } from 'lucide-svelte';
	import Media from './Media.svelte';
</script>

<div class="relative flex flex-col items-center justify-center gap-4">
	<Media />
	<div class=" -translate-y-24 absolute z-10 ml-2 flex -rotate-28 flex-col items-center px-6 text-black/70">
		<h2 class="name_font mb-14 -translate-y-4 text-6xl text-black/50">Remi Egwuda</h2>

		<h3 class="-translate-y-9 capitalize opacity-100">Full-stack development</h3>
		<span class="mb-8 -translate-y-9 capitalize text-sm italic">noun & verb</span>

		<p class="max-w-xs -translate-y-9 ">
			a disciplined process of engineering scalable frontends and resilient backends that work
			together to turn complex problems into elegant solutions.
		</p>
	</div>

	<div class=" mb-12 inline-bounce">
		<ChevronsDown class=''  strokeWidth={1} size={30}/>
		
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
