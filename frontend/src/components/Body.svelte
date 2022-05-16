<script>
	import { Button, Toast, ToastBody, ToastHeader } from 'sveltestrap';

	let isOpen = false;
</script>

<main>
	<Button color="primary"
		on:click={() => (isOpen = true)}>
		Add to Cart
	</Button>
	<div>
    <Toast autohide delay=3000
		class="align-items-center position-absolute top-0 end-0 border-0 p-3" 
		{isOpen}
		on:close={() => (isOpen = false)}>
			<ToastHeader icon="success">success</ToastHeader>
			<ToastBody>
				Product added to your cart.
			</ToastBody>
    </Toast>
  </div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>