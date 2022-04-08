import StringValueObject from '../../../../Contexts/Shared/domain/ValueObject/StringValueObject';

export default class EventName extends StringValueObject {
	constructor(value: string) {
		super(value);
	}
}
