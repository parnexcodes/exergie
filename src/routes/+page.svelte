<script>
	import Navbar from '../components/Navbar.svelte';
	import Cards from '../components/Cards.svelte';
    import SponsorCards from '../components/SponsorCards.svelte';
    import Footer from '../components/Footer.svelte';
    import { CardsData } from '../data/Cards'
    import { SponsorsData } from '../data/Sponsors'
</script>

<div class="min-h-screen bg-[#050C19] select-none">
	<Navbar />
	<div class="flex flex-col">
		<h1 class="text-[12rem] font-bold flex justify-center pt-8 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-800">
			Exergie<span class="text-slate-200 font-bold text-5xl pt-12">'23</span>
		</h1>
		<p class="text-slate-200 font-light text-5xl mx-auto mt-4">Cultural & Technical Event</p>
		<p class="text-slate-200 text-2xl mx-auto mt-8">May 04-05, 2023</p>
		<p class="text-slate-200 text-2xl mx-auto mt-2">Arya College of Engineering & IT</p>
	</div>
	<div class="flex justify-between px-28 mt-[16rem]">
		<div class="flex flex-col max-w-xl">
			<p class="text-[4.5rem] font-bold text-orange-500">About US</p>
			<p class="text-slate-200 text-2xl mt-8">
				EXERGIE'23 is the most anticipated national level technical carnival organized by the
				Computer Science and I.T. Department. This innovative event challenges and enhances the
				skills of students in various categories of competition.
			</p>
			<p class="text-slate-200 text-2xl mt-4">
				With over 4000 footfalls, EXERGIE'23 is the perfect platform for brands to connect with
				tech-savvy young minds. Our event offers a unique opportunity for sponsors to showcase their
				brand, products, and services to an engaged audience of students, professors, and
				professionals.
			</p>
		</div>
		<img src="/about.773b3d4.png" alt="" />
	</div>
	<div class="mt-[12rem] px-28">
		<h1 class="text-[4.5rem] font-bold text-orange-500 flex justify-center">Events</h1>
		<div class="flex justify-center gap-10 mt-16 flex-wrap">
			{#each CardsData as card}
				<Cards name={card.name} info={card.info} image={card.image}/>
			{/each}
		</div>
	</div>
	<div class="mt-[12rem] px-28">
		<h1 class="text-[4.5rem] font-bold text-orange-500 flex justify-center">Sponsors</h1>
		<div class="flex justify-center gap-8 mt-16 flex-wrap">
			{#each SponsorsData as card}
				<SponsorCards name={card.name} info={card.info} image={card.image}/>
			{/each}
		</div>
	</div>
    <div class="mt-12">
        <Footer />
    </div>
</div>
