<script>
	import Header from "./components/Header.svelte";
	import Body from "./components/Body.svelte";
	import Footer from "./components/Footer.svelte";
	import { Col, Container, Row } from 'sveltestrap';
	import { Router } from "svelte-navigator";
</script>

<svelte:head>
	<title>KEA Store</title>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
</svelte:head>

<Router primary={false}>
	<Container fluid>
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