<script>
import { Image } from 'sveltestrap';

	const currentYear = new Date().getFullYear();
</script>

<footer>
	<p>© {currentYear} KEA Store</p>
	<hr/>
	<div class="footer-bottom">
		<div class="image-logo">
			<Image alt="KEA logo" src="./images/kea_logo.png" />
		</div>
		<div class="social-media">
			<a target="_blank" href="https://www.linkedin.com/school/kea-k-benhavns-erhvervsakademi/">
				<Image alt="LinkedIn" src="./images/Linkedin.png" />
			</a>
			<a target="_blank" href="https://www.facebook.com/kea.dk/">
				<Image alt="Facebook" src="./images/Facebook.png" />
			</a>
			<a target="_blank" href="https://www.instagram.com/keacph/">
				<Image alt="Instagram" src="./images/Instagram.png" />
			</a>
			<a target="_blank" href="https://www.youtube.com/user/KEAkanal">
				<Image alt="Youtube" src="./images/Youtube.png" />
			</a>
		</div>
	</div>
</footer>

<style>
	footer {
		background: #343947;
		box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
		color: #FFFFFF;
		opacity: 0.8;
		text-align: center;
	}
	hr {
		margin-left: 12.5%;
		margin-right: 12.5%;
		opacity: 0.2;
	}
	p {
		padding-top: 0.5em;
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		line-height: 17px;
		opacity: 0.8;
	}
	.footer-bottom {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-top: 1em;
		padding-bottom: 1em;
		padding-left: 12.5%;
		padding-right: 12.5%;
	}
	.image-logo {
		padding-left: 1em;
	}
	.social-media {
		padding-right: 1em;
	}
</style>