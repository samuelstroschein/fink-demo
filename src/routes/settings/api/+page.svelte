<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import Button from '$lib/components/button.svelte';
</script>

<p class="description">{m.api_hint()}</p>
<Button variant="primary">{m.save()}</Button>
