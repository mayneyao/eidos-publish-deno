import { Hono } from "hono";
import { serveStatic } from "hono/deno";
import { DataSpace } from "jsr:@eidos/core";
import { NodeServerDatabase } from "./db-server.ts";
import { handleFunctionCall } from "./rpc.ts";
const app = new Hono();

const db = new NodeServerDatabase({
  path: "./data/db.sqlite3",
});

const nodes = await db.selectObjects("select * from eidos__tree");
console.log(nodes[0]);

const dataSpace = new DataSpace({
  db: db,
  activeUndoManager: false,
  dbName: "read",
  context: {
    setInterval: undefined,
  },
  isServer: true,
});

// const nodesViaRpc = await dataSpace.listTreeNodes();
// console.log(nodesViaRpc);
app.post("/server/api", async (c) => {
  try {
    const body = await c.req.json();
    const res = await handleFunctionCall(body.data, dataSpace);
    const response = new Response(
      JSON.stringify({
        status: "success",
        result: res,
      }),
      {
        headers: {
          "content-type": "application/json",
          "Cache-Control": "max-age=3600", // Cache for 1 hour
        },
      }
    );
    return response;
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(
      JSON.stringify({
        status: "error",
        message: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 500,
        headers: {
          "content-type": "application/json",
        },
      }
    );
  }
});

app.use("/*", serveStatic({ root: "./www" }));

Deno.serve(app.fetch);
