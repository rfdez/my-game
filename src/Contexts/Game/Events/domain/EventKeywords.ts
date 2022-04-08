import ArrayValueObject from '../../../../Contexts/Shared/domain/ValueObject/ArrayValueObject';

export default class EventKeywords extends ArrayValueObject<string> {
	constructor(value: Array<string>) {
		super(value);
	}
}
