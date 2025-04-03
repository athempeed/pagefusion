export default {
    async fetch(request: Request) {
        const mod = await import('./dist/server/server-entry.js'); // note the .js extension!
        const html = mod.render(); // ✅ must match named export

        return new Response(html, {
            headers: {
                'Content-Type': 'text/html',
            },
        });
    }
}