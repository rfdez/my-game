import InvalidArgumentError from './InvalidArgumentError';

export default abstract class DateValueObject {
	readonly value: Date;

	constructor(date: string) {
		this.ensureIsoDate(date);

		const d = new Date(date);
		this.value = d;
	}

	day(): number {
		return this.value.getDay();
	}

	month(): number {
		return this.value.getMonth();
	}

	year(): number {
		return this.value.getFullYear();
	}

	toString(): string {
		return this.value.toISOString();
	}

	private ensureIsoDate(value: string): void {
		if (
			!/^([\\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\\:?00)([\\.,]\d+(?!:))?)?(\17[0-5]\d([\\.,]\d+)?)?([zZ]|([\\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/.test(
				value
			)
		)
			throw new InvalidArgumentError(
				`<${this.constructor.name}> does not allow the format <${value}>`
			);

		const d = new Date(value);

		if (d.toISOString() !== value)
			throw new InvalidArgumentError(
				`<${this.constructor.name}> does not allow the value <${value}>`
			);
	}
}
