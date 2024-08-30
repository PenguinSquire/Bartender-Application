import express from "express";

import { app as OrdersRouter } from "./routes/drinks.route";
import { app as QueueRouter } from "./routes/queue.route";

let app = express();
app.use(express.json());

app.use("/drinks", OrdersRouter);
app.use("/queue", QueueRouter);

app.get("/", (req, res) => {
	res.send("Hello mom!");
});

app.listen(3001, () => {
	console.log("Server is running on port 3001");
});
