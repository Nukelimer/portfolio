<script lang="ts">
    import ChooseView from './components/ChooseView.svelte';
	import Header from './components/genz/Header.svelte';

    let choice = $state('none');
    function handleChoice(val:string) {
        choice = val;
    }

    $inspect(choice)

    
</script>

<main class="flex flex-col min-h-screen items-center justify-center px-4 bg-[#F6E8D6] min-w-screen   overflow-hidden">
        <ChooseView {choice} onSelect={handleChoice} />
    <!-- {#if choice === 'none'}
    {:else if choice === 'boomer'}
        <div class="">
            <h1>Welcome Boomer</h1>
            <button onclick={() => choice = 'none'}>Go Back</button>
        </div>
    {:else}
        <div class="">
         <Header/>
        </div>
    {/if} -->
</main>