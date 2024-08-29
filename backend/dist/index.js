"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//import { app as VolunteerRouter } from "./routes/volunteers.route";
//import { app as OpportunitiesRouter } from "./routes/opportunities.route";
//import { app as UsersRouter } from "./routes/users.route";
let app = (0, express_1.default)();
app.use(express_1.default.json());
//app.use("/volunteers", VolunteerRouter);
//app.use("/opportunities", OpportunitiesRouter);
//app.use("/users", UsersRouter);
app.get("/", (req, res) => {
    res.send("Hello mom!");
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
