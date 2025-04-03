// esbuild.config.js
require('esbuild').build({
    entryPoints: ['./src/server-entry.tsx'],
    bundle: true,
    outfile: './dist/server/server-entry.js',
    platform: 'neutral', // 👈 not 'node'
    target: ['es2022'],
    format: 'esm',
    external: ['react', 'react-dom'], // let Cloudflare handle these
    banner: {
        js: 'import { createElement } from "react";'
    },
}).catch(() => process.exit(1));
