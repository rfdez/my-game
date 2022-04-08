<script lang="ts">
import type EventHint from '../../Contexts/Game/Events/domain/EventHint';

export let hint: EventHint;
</script>

<p class="mx-auto text-base leading-relaxed lg:w-3/4 xl:w-2/4">
	{hint.toString()}
</p>
