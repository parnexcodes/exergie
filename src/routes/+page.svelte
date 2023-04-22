<script>
	import Navbar from '../components/Navbar.svelte';
	import Cards from '../components/Cards.svelte';
	import SponsorCards from '../components/SponsorCards.svelte';
	import Footer from '../components/Footer.svelte';
	import { CardsData } from '../data/Cards';
	import { SponsorsData } from '../data/Sponsors';
	import { scale, fade, blur, slide, draw, crossfade, fly } from 'svelte/transition';
	import { expoOut } from 'svelte/easing'
	import { onMount } from 'svelte';
	let animate = false;
	onMount(() => {
		animate = true;
	});
</script>

<div class="min-h-screen bg-black select-none">
	<!-- <Navbar /> -->
	{#if animate}
	<div class="flex flex-col px-8">
		<!-- <h1 class="text-[12rem] font-bold flex justify-center pt-36 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-800">
			Exergie<span class="text-slate-200 font-bold text-5xl pt-12">'23</span>
		</h1> -->
			<img
				transition:scale="{{ duration: 5000 }}"
				class="md:h-[12rem] object-contain md:mt-[14rem] mt-[15rem]"
				src="/exergie_logo.png"
				alt=""
			/>
			<p transition:blur="{{ duration: 3000 }}" class="text-slate-200 md:text-5xl text-lg mx-auto mt-4 font-bold">Cultural & Technical Event</p>
			<p transition:blur="{{ duration: 2500 }}" class="text-slate-200 md:text-2xl mx-auto md:mt-8 mt-2 text-xs">May 04-05, 2023</p>
			<p transition:blur="{{ duration: 2500 }}" class="text-slate-200 md:text-2xl mx-auto md:mt-2 mt-1 text-xs">Arya College of Engineering & IT</p>
	</div>
	<div class="flex md:justify-between flex-col md:flex-row md:px-28 px-8 md:mt-[16rem] mt-[17rem]">
		<div class="flex flex-col max-w-xl">
			<p class="text-[4.5rem] font-bold text-[#DB202C] font-bebas-neue tracking-wide">About US</p>
			<p class="text-slate-200 md:text-2xl text-sm mt-8">
				EXERGIE'23 is the most anticipated national level technical carnival organized by the
				Computer Science and I.T. Department. This innovative event challenges and enhances the
				skills of students in various categories of competition.
			</p>
			<p class="text-slate-200 md:text-2xl text-sm mt-4">
				With over 4000 footfalls, EXERGIE'23 is the perfect platform for brands to connect with
				tech-savvy young minds. Our event offers a unique opportunity for sponsors to showcase their
				brand, products, and services to an engaged audience of students, professors, and
				professionals.
			</p>
		</div>
		<img class="mt-6 md:mt-0" src="/about.773b3d4.png" alt="" />
	</div>
	<div class="md:mt-[12rem] mt-[4rem] md:px-28">
		<h1
			class="text-[4.5rem] font-bold text-[#DB202C] flex justify-center font-bebas-neue tracking-wide"
		>
			Events
		</h1>
		<div class="flex justify-center gap-10 md:mt-16 mt-8 flex-wrap">
			{#each CardsData as card}
				<Cards name={card.name} info={card.info} image={card.image} />
			{/each}
		</div>
	</div>
	<div class="md:mt-[12rem] mt-[4rem] md:px-28">
		<h1
			class="text-[4.5rem] font-bebas-neue tracking-wide font-bold text-[#DB202C] flex justify-center"
		>
			Sponsors
		</h1>
		<div class="flex justify-center gap-8 mt-16 flex-wrap">
			{#each SponsorsData as card}
				<SponsorCards name={card.name} info={card.info} image={card.image} />
			{/each}
		</div>
	</div>
	<div class="mt-12">
		<Footer />
	</div>
	{/if}
</div>
