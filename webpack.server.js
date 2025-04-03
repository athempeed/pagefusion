// webpack.server.js
import { platform } from 'os';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    entry: './src/server-entry.tsx',
    target: 'webworker',
    mode: 'production',
    output: {
        filename: 'server-entry.js',
        path: path.resolve(__dirname, 'dist/server'),
        libraryTarget: 'module',
        module: true,
    },
    experiments: {
        outputModule: true,
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        fallback: {
            // prevent Node polyfills from being injected
            fs: false,
            path: false,
            module: false,
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
            {
                test: /\.scss$/, // SCSS Handling
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    }
};
