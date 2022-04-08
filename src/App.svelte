<script lang="ts">
import Event from './Contexts/Game/Events/domain/Event';
import EventDate from './Contexts/Game/Events/domain/EventDate';
import EventHint from './Contexts/Game/Events/domain/EventHint';
import EventId from './Contexts/Game/Events/domain/EventId';
import EventKeywords from './Contexts/Game/Events/domain/EventKeywords';
import EventName from './Contexts/Game/Events/domain/EventName';
import AESCrypto from './Contexts/Shared/infrastructure/Crypto/AESCrypto';
import EventCard from './lib/Event/EventCard.svelte';
import QuestionList from './lib/Question/QuestionList.svelte';
import SolveButton from './lib/SolveButton.svelte';

let event = Event.create(
	new EventId('db81735a-865d-4f32-82b6-da8f1bed3d88'),
	new EventName('Event 1'),
	new EventHint('Event 1 description'),
	new EventDate('2022-04-07T10:14:12.000Z'),
	new EventKeywords(['keyword1', 'keyword2'])
);

let crypto = new AESCrypto(import.meta.env.GAME_CRYPTO_KEY);
let encryptedName = crypto.encrypt(event.name.value);
let encryptedKeywords: string[] = [];
event.keywords.value.forEach(async (keyword) => {
	encryptedKeywords.push(crypto.encrypt(keyword));
});
localStorage.setItem('encryptedName', encryptedName);
localStorage.setItem('encryptedKeywords', JSON.stringify(encryptedKeywords));
</script>

<section class="body-font text-gray-600">
	<div class="container mx-auto px-5 py-24">
		<EventCard event="{event}" />
		<!-- Question List -->
		<QuestionList />
		<!-- Solve Buttton -->
		<SolveButton />
	</div>
</section>
