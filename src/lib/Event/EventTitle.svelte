<script lang="ts">
import type EventDate from '../../Contexts/Game/Events/domain/EventDate';

enum months {
	enero,
	febrero,
	marzo,
	abril,
	mayo,
	junio,
	julio,
	agosto,
	septiembre,
	octubre,
	noviembre,
	diciembre
}

export let date: EventDate;
let month = months[date.month()];
let day = date.day();
let year = date.year();
let dateString = `${day} de ${month} de ${year}.`;
</script>

<h1 class="title-font mb-4 text-center text-2xl font-medium text-gray-900 sm:text-3xl">
	{dateString}
</h1>
