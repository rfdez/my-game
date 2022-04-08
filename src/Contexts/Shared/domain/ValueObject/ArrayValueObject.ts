export default abstract class ArrayValueObject<T> {
	readonly value: Array<T>;

	constructor(value: Array<T>) {
		this.value = value;
	}
}
