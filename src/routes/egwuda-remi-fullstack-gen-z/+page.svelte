<script>
	import AboutMe from "../components/genz/AboutMe.svelte";
	import Contact from "../components/genz/Contact.svelte";
	import Header from "../components/genz/Header.svelte";
	import HeaderText from "../components/genz/HeaderText.svelte";
	import OtherWorks from "../components/genz/OtherWorks.svelte";
	import RecentlyMade from "../components/genz/RecentlyMade.svelte";

	
let audioUnlocked = $state(false);
	$effect(() => {
	const unlock = () => {
	  audioUnlocked = true;
	  document.removeEventListener('click', unlock);

	  console.log("okay");
	  
	};
	document.addEventListener('click', unlock, { once: true });
  });
</script>
<div class="flex flex-col min-h-screen  items-center justify-cccenter px-1 bg-[#F6E8D6] min-w-screen   overflow-hidden">


<Header/>

<AboutMe/>
<HeaderText/>
<RecentlyMade/>

<OtherWorks/>

	<Contact/>

</div>