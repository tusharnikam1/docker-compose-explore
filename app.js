const redis = require("redis");
const MongoClient = require("mongodb").MongoClient;

const client = redis.createClient({ port: 6379, host: "cache" });

client.on("connect", () => {
  console.log("Redis connected ");
});

client.on("error", (error) => {
  console.log(`Error connecting redis : ${error}`);
});

// Connecting mongodb
const url = "mongodb://mongo:27017";
MongoClient.connect(url, (err, client) => {
  if (err) console.error(err, "Error connecting mongodb");
  console.log(client, "MongoDB connected");
});
