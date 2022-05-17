<script>
	import { Route } from "svelte-navigator";
	import Products from "./Products.svelte";
</script>

<main>
	<Route path="/" component={Products} />
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