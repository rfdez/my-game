/// <reference types="svelte" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly GAME_CRYPTO_KEY: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
