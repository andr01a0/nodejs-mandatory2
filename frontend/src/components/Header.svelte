<script>
	import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
		Image,
  } from 'sveltestrap';
	import { Link } from "svelte-navigator";

	let isOpen = false;

  function handleUpdate(event) {
    isOpen = event.detail.isOpen;
  }
</script>

<header>
	<Navbar dark expand="md">
		<NavbarBrand>
			<Link to="/">
				<Image alt="KEA Store" src="./images/logo.png" height=24 width=118 />
			</Link>
		</NavbarBrand>
		<NavbarToggler on:click={() => (isOpen = !isOpen)} />
		<Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
			<Nav class="ms-auto" navbar>
				<NavItem>
					<Link to="/cart" class="nav-link">
						Cart
					</Link>
				</NavItem>
			</Nav>
		</Collapse>
	</Navbar>
</header>

<style>
	header {
		background: #D55345;
	}
</style>