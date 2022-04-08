export default interface Crypto {
	encrypt(data: string): string;
	decrypt(data: string): string;
}
