"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var app = (0, express_1.default)();
var PORT = 5000;
app.use(express_1.default.json());
app.use('/', (0, routes_1.default)());
app.listen(PORT, function () { return console.log("Server is running on port ".concat(PORT)); });
