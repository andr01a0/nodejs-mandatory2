<script>
	import { Route } from "svelte-navigator";
	import Products from "./Products.svelte";
	import Cart from "./Cart.svelte";
</script>

<main>
	<Route path="/" component={Products} />
	<Route path="/cart" component={Cart} />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
		background: #DBCBC2;
		box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
	}
</style>