<script>
	import amala from '$lib/assets/images/Amala.png';
	import rice from '$lib/assets/images/rice.png';
	import masa from '$lib/assets/images/masa.png';
	import veg from '$lib/assets/images/veg.png';
	import burger from '$lib/assets/images/burger.png';
	import chicken from '$lib/assets/images/chicken.png';
</script>


<div class="flex flex-col items-center mt-10 md:mt-0">
	<h1 class="text-5xl sm:text-6xl md:text-8xl font-bold text-center text-dark capitalize">
		Yummeals is <br> launching soon!!
	</h1>

	<div class="relative -top-10 md:-top-16 z-10 p-5 md:p-10 bg-primary/5 rounded-full md:mt-0">
		<img src={amala} alt="amala" class="amala">
		<img src={rice} alt="rice with plantain" class="rice">
		<img src={masa} alt="masa" class="masa">
		<img src={veg} alt="stew with meats" class="stew">
		<img src={burger} alt="burger" class="burger">
		<img src={chicken} alt="chicken thighs" class="chicken">
		<div class="relative p-5 md:p-10 rounded-full border-8 border-dashed border-primary/10">
			<div class="p-5 md:p-10 rounded-full bg-primary/15">
				<div class="size-56 md:size-[26rem] p-5 md:p-16 rounded-full flex shadow shadow-primary/50 items-center justify-center bg-primary/80">
					<p class="text-xs sm:text-sm p-3 text-center md:text-xl text-white">
						Say goodbye to cooking stress and hello to <strong>Yummeals</strong> –
						your ultimate solution for very affordable and delicious,
						homemade meals timely delivered right to your doorstep!
					</p>
				</div>
			</div>
		</div>
	</div>


</div>

<style>
	img{
		@apply absolute z-10 w-32 md:w-auto;
	}
	img.amala{
			@apply top-[66%] -translate-y-1/2 left-0;
	}
	img.rice{
			@apply bottom-0 -translate-x-1/2 left-1/2;
	}
	img.chicken{
      @apply top-0 -translate-x-1/2 left-1/2;
	}
	img.masa{
      @apply top-[66%] -translate-y-1/2 right-0;
	}
	img.stew{
      @apply top-[33%] -translate-y-1/2 right-0;
	}
	img.burger{
      @apply top-[33%] -translate-y-1/2 -left-1 md:-left-10;
	}
</style>


