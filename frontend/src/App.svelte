<script>
	import Header from "./components/header.svelte";
	import Body from "./components/body.svelte";
	import Footer from "./components/footer.svelte";
	import { Col, Container, Row } from 'sveltestrap';
	import Notifications from 'svelte-notifications';
	import { Router } from "svelte-navigator";
</script>

<svelte:head>
	<title>KEA Store</title>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
</svelte:head>

<Notifications>
	<Router>
		<Container>
			<Row>
				<Col>
					<Header />
				</Col>
			</Row>
			<Row>
				<Col>
					<Body />
				</Col>
			</Row>
			<Row>
				<Col>
					<Footer />
				</Col>
			</Row>
		</Container>
	</Router>
</Notifications>

<style>
	
</style>