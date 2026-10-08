<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	let { children } = $props();
</script>

<nav>
	<a href="/files">{m.nav_files()}</a>
	<a href="/settings">{m.nav_settings()}</a>
</nav>

{@render children()}
