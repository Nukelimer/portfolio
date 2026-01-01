<script>
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<section class="min-h-screen flex flex-col justify-center ">
	<video src="/home/video/error.mp4" autoplay loop muted class=" select-none pointer-events-none max-h-125 ">
		<track kind="captions" />
	</video>

	<div class="max-w-smmx-auto flex justify-center flex-col items-center-safe gap-6">
		<p>Oops you landed in an unknown route... use the button back to civilization.</p>
		<a href="/" class="cursor-pointer"> <Button class=" font-mono cursor-pointer">Go Back Home</Button></a>
	</div>
</section>
