"use strict";

const Hapi = require("@hapi/hapi");
const biscuits = require("./db/fresh-herb-buttermilk-biscuits.json");
console.log("-----biscuits ", biscuits);

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost"
  });

  server.route({
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "Here's your biscuits: " + biscuits.name;
    }
  });

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", err => {
  console.log(err);
  process.exit(1);
});

init();
