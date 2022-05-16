<script>
	import { Navbar } from 'sveltestrap';
	import { Route, Link } from "svelte-navigator";
</script>

<header>
	<Navbar>
		<Link to="/">Home</Link>
		<Link to="about">About</Link>
		<Link to="blog">Blog</Link>
	</Navbar>
</header>

<style>

</style>