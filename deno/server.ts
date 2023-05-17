import { serve } from "https://deno.land/std@0.187.0/http/server.ts";

const port = 8081;

const handler = (request: Request): Response => {
  return new Response('hi\n', { status: 200 });
};

console.log(`HTTP webserver running. Access it at: http://localhost:8081/`);
await serve(handler, { port });
