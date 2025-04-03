import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './app';

export function render(): string {
    const html = renderToString(<App />);
    return `
    <!DOCTYPE html>
    <html>
      <head><title>SSR App</title></head>
      <body>
        <div id="root">${html}</div>
        <script src="/client/client-entry.js" type="module"></script>
      </body>
    </html>
  `;
}
