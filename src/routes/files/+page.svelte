<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import Button from '$lib/components/button.svelte';

	let { data } = $props();
	let selected = $state<string[]>([]);
</script>

<h1>{m.welcome_back({ name: data.user.name })}</h1>

<p class="hint">{m.upload_hint()}</p>
<p>{m.files_remaining({ count: data.remaining })}</p>
<p>{m.upload_rank({ place: data.rank })}</p>

{#if selected.length}
	<p>{m.files_selected({ count: selected.length })}</p>
	<Button onclick={() => (selected = [])}>{m.cancel()}</Button>
{/if}
