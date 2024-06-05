<script>
</script>

<div class="fixed w-full h-full -z-10 overflow-hidden left-0 top-0">
	<h1 class="soon">Comming Soon</h1>
	<img src="/Image.png" class="absolute top-0 right-0" alt="thigh" />
	<img src="/thigh.png" alt="chicked thigh" class="absolute bottom-0 right-0" />
	<h1 class="soon">Comming Soon</h1>
</div>

<section class="max-w-screen-xl mx-auto my-3 md:my-12 p-3">
	<nav class="mb-10">
		<img src="/logo.png" class="h-12" alt="" />
	</nav>
	<div class="">
		<h3 class="mb-3 text-[43px] md:text-[64px] font-bold leading-tight">
			Delivering Happiness, <br /> One meal at a time
		</h3>
		<p class="text-[20px] md:w-3/5 mb-5">
			At Yummeals, we believe in the power of good food to bring people together and brighten their
			day. That's why we're dedicated to delivering happiness, one meal at a time.
		</p>
		<div class="flex items-center gap-2 mb-10">
			<div class="size-3 bg-primary rounded-full" />
			<div class="size-3 bg-primary rounded-full" />
			<div class="size-3 bg-primary rounded-full" />
		</div>
		<form class="grid md:grid-cols-2 gap-5">
			<h5 class="text-[24px] font-bold uppercase md:col-span-2">Get notified when we are live!</h5>
			<div class="input-box">
				<label for="firstname">First Name</label>
				<input id="firstname" placeholder="Enter first name" />
			</div>
			<div class="input-box">
				<label for="lastname">First Name</label>
				<input id="lastname" placeholder="Enter first name" />
			</div>
			<div class="input-box">
				<label for="email">Email</label>
				<input type="email" id="email" placeholder="name@email.com" />
			</div>
			<div class="input-box">
				<label for="Phone">Phone</label>
				<input id="Phone" type="tel" placeholder="Enter Phone number" />
			</div>
			<div class="mt-3">
				<button class="px-5 py-2 bg-primary/80 text-white rounded"> Notify Me </button>
			</div>
		</form>
	</div>
</section>

<style lang="postcss">
	.soon {
		@apply md:text-[168px] stroke-primary font-extrabold absolute
			w-full text-center -bottom-24 text-primary opacity-20;
	}
	label {
		@apply text-[18px] mb-3;
	}
	input {
		@apply h-[60px] ring-1 ring-[#EDEAE8] w-full rounded-lg px-5;
	}
	.soon:first-of-type {
		-webkit-text-stroke-width: 3px;
		-webkit-text-stroke-color: #f25b0a;
		@apply text-white -top-28 w-full text-center;
	}
	div img {
		@apply h-48 md:h-auto;
	}
</style>
