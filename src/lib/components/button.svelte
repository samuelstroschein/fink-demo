<script lang="ts">
	let { variant = 'secondary', children, ...rest } = $props();
</script>

<button class="button {variant}" {...rest}>{@render children()}</button>
