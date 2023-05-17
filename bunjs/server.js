// http.js
export default {
  port: 3002,
  fetch(request) {
    return new Response("hi\n");
  },
};
