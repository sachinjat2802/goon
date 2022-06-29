"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const router = (0, express_1.default)();
const port = 30000;
router.get("/", (req, res) => {
    res.send("hello world");
});
router.listen(port, () => {
    mongoose_1.default.connect("mongodb+srv://sachinjat2802:sachinjat2802@cluster0.dndop1h.mongodb.net/?retryWrites=true&w=majority").then(() => {
        console.log(`connected to db `);
        console.log(`server is running on ${port}`);
    })
        .catch((err) => {
        console.log(err);
        console.log(`server is running on ${port}`);
    });
});
//# sourceMappingURL=app.js.map