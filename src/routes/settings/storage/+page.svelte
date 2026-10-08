<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	let { data } = $props();
</script>

<section>
	<span class="usage">{m.storage_used({ used: data.used, total: data.total })}</span>
</section>
