<script>
	import { page } from '$app/stores';
	import { CardsData } from '../../../data/Cards';
	import Footer from '../../../components/Footer.svelte';
	import { scale, blur, fade } from 'svelte/transition';
	import { sineIn } from 'svelte/easing';
	import { onMount } from 'svelte';
	import axios from 'axios';
	const id = $page.params.id;
	const data = CardsData.filter((value) => value.id == id);
	let animate = false;

	let name;
	let email;
	let college_year;
	let college_name;
	let phone;
	let payment_id;

	onMount(() => {
		animate = true;
	});

	const createParticipant = async () => {
		try {
			const request = await axios.post(
				'/api/add-detail',
				{
					event_id: id,
					name,
					email,
					college_name,
					college_year,
					phone,
					payment_id
				},
				{
					headers: {
						'Content-Type': 'application/json'
					}
				}
			);
			alert('Added Successfully!');
			const response = request.data;
		} catch (error) {
			const status_code = error.response.status;
			if (status_code == 400) {
				alert('Something went wrong, try again!');
			}
		}
	};
</script>

{#if data.length > 0}
	<div class="min-h-screen bg-black select-none">
		<div class="flex justify-center items-center pt-12">
			<a href="/">
				<img class="h-[64px]" src="/exergie_logo.svg" alt="" />
			</a>
		</div>
		<div class="px-28 py-16 flex justify-center items-center">
			<div class="flex flex-col">
				{#if animate}
					<img
						in:blur={{ duration: 2500 }}
						out:fade={{ duration: 500 }}
						class="md:h-[300px] h-[100px] object-contain"
						src={data[0].image}
						alt=""
					/>
					<div class="text-center mt-8">
						<p
							in:scale={{ duration: 2000 }}
							out:fade={{ duration: 500 }}
							class="font-bebas-neue text-[2.5rem] font-bold text-red-600 tracking-wider"
						>
							{data[0].name}
						</p>
						<p
							in:fade={{ duration: 2700, easing: sineIn }}
							class="text-slate-200 font-mono font-bold text-xl mt-4"
						>
							{data[0].info}
						</p>
						<!-- <div
							transition:scale={{ duration: 2000 }}
							class="mt-8 flex flex-col items-center gap-6"
						> -->
						<form
							in:scale={{ duration: 2000 }}
							out:fade={{ duration: 500 }}
							class="mt-8 flex flex-col items-center gap-6"
							id="form"
							on:submit|preventDefault={() => createParticipant()}
						>
							<input
								bind:value={name}
								type="text"
								required
								placeholder="Enter Name"
								class="!outline-none input w-full max-w-md border border-red-600 bg-black text-slate-200"
							/>
							<input
								bind:value={email}
								type="email"
								required
								placeholder="Enter Email"
								class="!outline-none input w-full max-w-md border border-red-600 bg-black text-slate-200"
							/>
							<input
								bind:value={college_name}
								type="text"
								required
								placeholder="Enter College Name"
								class="!outline-none input w-full max-w-md border border-red-600 bg-black text-slate-200"
							/>
							<input
								bind:value={college_year}
								type="number"
								required
								placeholder="Enter College Year"
								class="!outline-none input w-full max-w-md border border-red-600 bg-black text-slate-200"
							/>
							<input
								bind:value={phone}
								type="number"
								required
								placeholder="Enter Phone Number"
								class="!outline-none input w-full max-w-md border border-red-600 bg-black text-slate-200"
							/>
							<input
								bind:value={payment_id}
								type="text"
								required
								placeholder="Enter Payment ID"
								class="!outline-none input w-full max-w-md border border-red-600 bg-black text-slate-200"
							/>
							<div class="flex gap-4">
								<!-- The button to open modal -->
								<label
									for="my-modal-4"
									class="bg-zinc-900 text-slate-200 rounded-md pl-4 pr-4 pt-2 pb-2 hover:brightness-75"
									>Show QR</label
								>
								<!-- Put this part before </body> tag -->
								<input type="checkbox" id="my-modal-4" class="modal-toggle" />
								<label for="my-modal-4" class="modal cursor-pointer">
									<label class="modal-box relative" for="">
										<img class="object-contain" src="/qr_code_image.jpeg" alt="" />
									</label>
								</label>
								<button
									form="form"
									class="bg-zinc-900 text-slate-200 rounded-md pl-4 pr-4 pt-2 pb-2 hover:brightness-75"
									>Submit</button
								>
							</div>
						</form>
					</div>
					<!-- </div> -->
				{/if}
			</div>
		</div>
		<Footer />
	</div>
{:else}
	<div>no</div>
{/if}
