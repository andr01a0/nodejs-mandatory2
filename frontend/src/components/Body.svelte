<script>
	import { Button } from 'sveltestrap';
	import { getNotificationsContext } from 'svelte-notifications';
	const { addNotification } = getNotificationsContext();
</script>

<main>
	<h1>Body Component</h1>
	<Button color="primary"
		on:click={
			() => addNotification({
				text: 'Added to your cart',
				type: 'success',
				position: 'top-right',
				removeAfter: 3000,
			})
		}>
		Add to Cart
	</Button>
</main>

<style>
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
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