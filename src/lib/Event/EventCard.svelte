<script lang="ts">
import type Event from '../../Contexts/Game/Events/domain/Event';

import EventHint from './EventHint.svelte';
import EventTitle from './EventTitle.svelte';

export let event: Event;
</script>

<div class="mb-20 text-center">
	<EventTitle date="{event.date}" />
	<EventHint hint="{event.hint}" />
</div>
