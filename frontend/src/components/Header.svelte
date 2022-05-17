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
	<Navbar color="#D55345" dark expand="md">
		<NavbarBrand>
			<Link to="/">
				<Image alt="KEA Store" src="./images/logo.png" />
			</Link>
		</NavbarBrand>
		<NavbarToggler on:click={() => (isOpen = !isOpen)} />
		<Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
			<Nav class="ms-auto" navbar>
				<NavItem>
					<NavLink href="#components/">Components</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="https://github.com/bestguy/sveltestrap">GitHub</NavLink>
				</NavItem>
			</Nav>
		</Collapse>
	</Navbar>
</header>