<script>
	import chef from '$lib/assets/images/medium-shot-smiley-man-with-pizza 1.png';
	import guy from '$lib/assets/images/man-with-drink.png';
	import lady from '$lib/assets/images/lady-with-thumbs-up.png';
	import {fade} from 'svelte/transition';

	let active = 0;
	const tabs = [
		{
			image: chef,
			heading: 'Homemade Goodness',
			description: "Experience the comfort of home-cooked meals without lifting a finger.Our chefs whip up mouthwatering dishes using time-honored recipes and quality ingredients, ensuring every bite is bursting with flavor."
		},
		{
			image: guy,
			heading: 'Affordable Luxury',
			description: "Treat yourself to fine dining at budget-friendly costs. Yummeals is committed to making high-quality, delicious meals accessible to everyone, because good food shouldn't come with a hefty price tag."
		},
		{
			image: lady,
			heading: 'Convenience Redefined',
			description: "With Yummeals, enjoying a delicious meal is as easy as a few clicks. Simply choose your favorites from our menu, place your order, and sit back while we take care of the rest. It's convenient dining at its finest!"
		}
	];
</script>

<section class="max-w-screen-xl relative -top-20 md:top-0 pb-20 md:pt-20 flex flex-col md:flex-row gap-10 mx-auto items-center justify-center">
	<div class="basis-1/2">
		<h3 class="text-3xl md:text-4xl mb-3 font-torus font-semibold">Why Yummeals?</h3>
		<div class="space-x-3 flex items-center">
			{#each [0,1,2] as i}
				<div class="line" transition:fade class:active={active === i}>
				</div>
			{/each}
		</div>

		<h3 class="text-xl md:text-2xl font-bold mt-10 mb-3">{tabs[active].heading}:</h3>

		<p class="text-base md:text-xl md:w-2/3">{tabs[active].description}</p>

		<div class="mt-10 flex items-center gap-5">
			<button disabled={active === 0} on:click={() =>  active > 0 ? active -=1 : null}>&laquo;</button>
			<button disabled={active === tabs.length - 1} on:click={() =>  active < tabs.length - 1 ? active +=1 : null}>&raquo;</button>
		</div>
	</div>

	<div class="basis-1/2 ">
		<img src={tabs[active].image} alt="chef" class="ml-auto transition-all duration-500" />
	</div>
</section>

<style>
		button{
				@apply size-8 rounded-full bg-green text-white text-2xl;
		}
		button:disabled{
				@apply bg-gray-light;
		}
    .line{
        @apply h-[3px] w-24 bg-gray-light rounded-full;
    }
    .line.active{
        @apply bg-primary/80;
    }
</style>