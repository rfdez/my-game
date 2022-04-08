import EventDate from './EventDate';
import EventHint from './EventHint';
import EventId from './EventId';
import EventKeywords from './EventKeywords';
import EventName from './EventName';

export default class Event {
	readonly id: EventId;
	readonly name: EventName;
	readonly hint: EventHint;
	readonly date: EventDate;
	readonly keywords: EventKeywords;

	constructor(
		id: EventId,
		name: EventName,
		hint: EventHint,
		date: EventDate,
		keywords: EventKeywords
	) {
		this.id = id;
		this.name = name;
		this.hint = hint;
		this.date = date;
		this.keywords = keywords;
	}

	static create(
		id: EventId,
		name: EventName,
		hint: EventHint,
		date: EventDate,
		keywords: EventKeywords
	): Event {
		return new Event(id, name, hint, date, keywords);
	}

	static fromPrimitives(plainData: {
		id: string;
		name: string;
		hint: string;
		date: string;
		keywords: string[];
	}): Event {
		return new Event(
			new EventId(plainData.id),
			new EventName(plainData.name),
			new EventHint(plainData.hint),
			new EventDate(plainData.date),
			new EventKeywords(plainData.keywords)
		);
	}

	toPrimitives(event: Event): Record<string, unknown> {
		return {
			id: event.id.value,
			name: event.name.value,
			hint: event.hint.value,
			date: event.date.value,
			keywords: event.keywords.value
		};
	}
}
