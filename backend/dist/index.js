"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const drinks_route_1 = require("./routes/drinks.route");
const queue_route_1 = require("./routes/queue.route");
let app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/drinks", drinks_route_1.app);
app.use("/queue", queue_route_1.app);
app.get("/", (req, res) => {
    res.send("Hello mom!");
});
app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
