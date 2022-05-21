<script>
	import { 
		Toast, ToastBody, ToastHeader
	} from 'sveltestrap';

	let isOpen = false;
</script>

<div id="container">
	<button class="card-button"
	on:click={() => (isOpen = true)} disabled={isOpen}>
	Add to Cart
</button>
</div>

<div>
<Toast autohide delay=1000
class="align-items-center position-fixed top-0 end-0 border-0 p-3" 
{isOpen}
on:close={() => (isOpen = false)}>
	<ToastHeader icon="success">success</ToastHeader>
	<ToastBody>
		Product added to your cart.
	</ToastBody>
</Toast>
</div>

<style>
	#container {
    background-image: url('../images/pcard.png');
		background-repeat: no-repeat;
    background-position: center;
    width:400px;
    height:484px;
	}
</style>