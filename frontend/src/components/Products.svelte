<script>
import Product from "./Product.svelte";

</script>

<div class="flex-container">
	<Product />
	<Product />
	<Product />
	<Product />
	<Product />
</div>

<style>
	.flex-container {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
		width: 100%;
	}
</style>