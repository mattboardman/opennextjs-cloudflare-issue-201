Steps to reproduce issue:

1. In a terminal run:

```
npm run preview -- --port 3999
```

2. Hit an API route with a POST request from another terminal (the route doesn't even need to exist)

```
curl -X POST -H "Content-Type: application/json" -d '{}' localhost:3999/api/test 
```

3. See stack trace:

```
⎔ Starting local server...
[wrangler:err] TypeError: Request with a GET or HEAD method cannot have a body.
    at new CustomRequest (file:///home/mattboardman/opennextjs-cloudflare-issue-201/.open-next/server-functions/default/handler.mjs:28:9)
    at new r9 (file:///home/mattboardman/opennextjs-cloudflare-issue-201/.open-next/middleware/handler.mjs:2145:11)
    at r7 (file:///home/mattboardman/opennextjs-cloudflare-issue-201/.open-next/middleware/handler.mjs:2163:59)
    at null.<anonymous> (file:///home/mattboardman/opennextjs-cloudflare-issue-201/.open-next/middleware/handler.mjs:3053:22)
    at async eW (file:///home/mattboardman/opennextjs-cloudflare-issue-201/.open-next/middleware/handler.mjs:1087:20)
    at async Object.edgeFunctionHandler (file:///home/mattboardman/opennextjs-cloudflare-issue-201/.open-next/middleware/handler.mjs:5506:18)
    at async handleMiddleware (file:///home/mattboardman/opennextjs-cloudflare-issue-201/.open-next/middleware/handler.mjs:6723:18)
    at async routingHandler (file:///home/mattboardman/opennextjs-cloudflare-issue-201/.open-next/middleware/handler.mjs:6902:25)
    at null.<anonymous> (async file:///home/mattboardman/opennextjs-cloudflare-issue-201/.wrangler/tmp/dev-pAbCZO/worker.js:124588:20)
    at null.<anonymous> (async file:///home/mattboardman/opennextjs-cloudflare-issue-201/.wrangler/tmp/dev-pAbCZO/worker.js:123197:20)
[wrangler:inf] POST /api/ui/search 500 Internal Server Error (333ms)
```