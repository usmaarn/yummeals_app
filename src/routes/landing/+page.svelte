<script>
	import Navbar from '$lib/components/comming-soon/Navbar.svelte';
	import Hero from '$lib/components/comming-soon/Hero.svelte';
	import TabSection from '$lib/components/comming-soon/TabSection.svelte';
	import Footer from '$lib/components/comming-soon/Footer.svelte';
</script>

<section class="min-h-screen bg-[#FFFCFA]">
	<div class="bg">
		<Navbar />
		<Hero />
	</div>
	<div class="max-w-[90%] mx-auto">
		<TabSection />

		<div class="max-w-6xl mx-auto space-y-10 text-center md:py-10">
			<h3 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-torus text-gray">
				Up to <span class="text-primary font-bold">1 Million Naira</span>
				free meal and exclusive party tickets up for grabs
			</h3>
			<p class="max-w-4xl mx-auto text-base md:text-2xl text-dark">
				Be among the first to experience the Yummeals difference! Sign up for our waitlist now and
				win free meal tickets or get an exclusive invite to our launch party.
			</p>
		</div>

		<form class="max-w-4xl mx-auto my-10 p-5 md:p-10 bg-white shadow-md rounded-2xl">
			<h3 class="text-xl md:text-4xl font-bold mb-10">Sign Up Form</h3>

			<div class="grid sm:grid-cols-2 gap-5 md:gap-10 mb-5 md:mb-10">
				<div class="">
					<label for="fn">First Name</label>
					<input type="text" placeholder="e.g: Ade" class="input" required />
				</div>

				<div class="">
					<label for="ln">Last Name</label>
					<input type="text" placeholder="e.g James" class="input" />
				</div>

				<div class="">
					<label for="fn">Email Address</label>
					<input type="email" placeholder="Email" required class="input" />
				</div>

				<div class="">
					<label for="ln">Phone Number</label>
					<input type="text" placeholder="phone number" class="input" />
				</div>
			</div>

			<div class="">
				<label for="ln">What personality best describes you?</label>
				<input type="text" placeholder="phone number" class="input" />
			</div>

			<button
				class="px-8 py-2.5 md:py-4 bg-green mt-5 md:mt-10 text-xs md:text-base rounded-md text-white font-semibold"
			>
				Join Waitlist now
			</button>
		</form>
	</div>
</section>

<Footer />

<style>
	.bg {
		@apply h-screen overflow-hidden bg-[url('/bg.png')] bg-no-repeat bg-cover;
	}
</style>
