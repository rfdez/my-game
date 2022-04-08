import type Crypto from '../../domain/Crypto';
import crypto from 'crypto-js';

export default class AESCrypto implements Crypto {
	private readonly passphrase: string;

	constructor(passphrase: string) {
		this.passphrase = passphrase;
	}

	encrypt(data: string): string {
		return crypto.AES.encrypt(data, this.passphrase).toString();
	}

	decrypt(cipherdata: string): string {
		const bytes = crypto.AES.decrypt(cipherdata, this.passphrase);
		return bytes.toString(crypto.enc.Utf8);
	}
}
