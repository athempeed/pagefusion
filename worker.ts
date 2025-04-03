import { readFile } from 'node:fs/promises';

import path from 'node:path';

export default {
  async fetch(request: Request) {
    const url = new URL(request.url);

    // // ✅ Serve client static assets
    // if (url.pathname.startsWith('/client/')) {
    //  const filePath = `C:/work/own/react/pagefusion/dist${url.pathname}`; // e.g., dist/client/client-entry.js
    //     console.log('filePath',filePath);
    //   try {
    //     const file = await readFile(filePath);
    //     return new Response(file, {
    //       headers: {
    //         'Content-Type': 'application/javascript', // or auto-detect if needed
    //       },
    //     });
    //   } catch (err) {
    //     console.error(`⚠️ File not found: ${filePath}`);
    //     return new Response('Not found', { status: 404 });
    //   }
    // }

    // ✅ Otherwise, render SSR HTML
    const mod = await import('./dist/server/server-entry.js');
    const html = mod.render(url.pathname);

    return new Response(html, {
      headers: {
        'Content-Type': 'text/html',
      },
    });
  },
};
