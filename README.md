# Context

There are currently 6 different web servers.

The ports they are currently set to are:
- bunjs 3002 (command: bun run server.js)
- go/gin 8080 (command: go run main.go)
- nodejs/fastify/pm2 port 3001 (command: pm2 start -i max server.js)
- deno 8081 (command: deno run --allow-net server.ts)
- Rust/axum 3000 (command: cargo run)
- Rust/Rocket 8000 (command: cargo run)

# Dependencies

- bunjs
- nodejs
- deno
- golang
- rust

# Benchmarking utilities

- autocannon (npm package, can just install globally)
- go-wrk (go package, can just install)

# Benchmarking

Run: `autocannon http://localhost:3002` or `go-wrk http://localhost:3002`

I got different results from each in terms of number of requests but generally the trend between each server was the same.
Interesting of note is I think deno was the only server that did better with autocannon, while all the others did better with go-wrk.
