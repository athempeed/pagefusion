import path from "path";
import Dotenv from 'dotenv-webpack';
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";

// Convert ES module `import.meta.url` to __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// const env = dotenv.config().parsed;
// const envKeys = Object.keys(env).reduce((prev, next) => {
//     prev[`process.env.${next}`] = JSON.stringify(env[next]);
//     return prev;
// }, {});

export default {
    entry: "./src/client-entry.tsx", // Use index.js if not using TypeScript
    output: {
        path: path.resolve(__dirname, "dist/client"),
        filename: "client-entry.js",
        libraryTarget: 'module',
    },
    mode: "production",
    target: 'node',
    experiments: {
        outputModule: true,
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"], // Allow importing .ts and .tsx files
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
