<script>
	import { Button, Toast, ToastBody, ToastHeader } from 'sveltestrap';

	let isOpen = false;
	let timeoutId = null;

  function showToast() {
		if(!isOpen) {
			isOpen = true;
			timeoutId = setTimeout(() => {isOpen=false}, 3000);
		}
  }

	function hideToast() {
		isOpen = false;
		if(timeoutId != null) {
			clearTimeout(timeoutId);
			timeoutId = null;
		}
	}
</script>

<main>
	<h1>Body Component</h1>
	<Button color="primary"
		on:click={showToast}>
		Add to Cart
	</Button>
	<div>
    <Toast class="align-items-center position-absolute top-0 end-0 border-0 p-3" {isOpen}>
      <ToastHeader icon="success" toggle={hideToast}>Success</ToastHeader>
      <ToastBody>
        This is a toast.
      </ToastBody>
    </Toast>
  </div>
</main>

<style>
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
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