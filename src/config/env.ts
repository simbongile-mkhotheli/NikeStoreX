interface ImportMetaEnv {
    readonly MODE: string;
    readonly VITE_REACT_APP_API_URL?: string;
    readonly VITE_REACT_APP_ENABLE_ANALYTICS?: string;
    // add other env variables here as needed
}

declare global {
    interface ImportMeta {
        readonly env: ImportMetaEnv;
    }
}

export const config = {
    app: {
        name: 'Nike Store',
        version: '1.0.0',
        environment: import.meta.env.MODE || 'development',
    },
    api: {
        baseUrl: import.meta.env.VITE_REACT_APP_API_URL || 'http://localhost:3001',
        timeout: 10000,
    },
    features: {
        enableAnalytics: import.meta.env.VITE_REACT_APP_ENABLE_ANALYTICS === 'true',
        enableDevTools: import.meta.env.MODE === 'development',
    },
} as const;
