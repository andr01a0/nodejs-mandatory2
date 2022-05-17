<script>
	import { Button, Toast, ToastBody, ToastHeader } from 'sveltestrap';

	let isOpen = false;
</script>

<Button color="primary"
on:click={() => (isOpen = true)} disabled={isOpen}>
Add to Cart
</Button>
<div>
<Toast autohide delay=1000
class="align-items-center position-absolute top-0 end-0 border-0 p-3" 
{isOpen}
on:close={() => (isOpen = false)}>
	<ToastHeader icon="success">success</ToastHeader>
	<ToastBody>
		Product added to your cart.
	</ToastBody>
</Toast>
</div>