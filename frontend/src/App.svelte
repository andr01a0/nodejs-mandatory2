<script>
	import Header from "./components/header.svelte";
	import Body from "./components/body.svelte";
	import Footer from "./components/footer.svelte";
	import { Col, Container, Row } from 'sveltestrap';
</script>

<main>
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