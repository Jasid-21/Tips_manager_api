"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const database_connection_1 = require("../connections/database.connection");
const homeRouter = (0, express_1.Router)();
homeRouter.get('/', (req, resp) => {
    console.log('Payments: ', database_connection_1.payments);
    resp.send();
});
exports.default = homeRouter;
