"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const database_connection_1 = require("../connections/database.connection");
const PaymentRouter = (0, express_1.Router)();
PaymentRouter.get('/', (req, res) => {
    res.status(200).send(database_connection_1.payments);
});
PaymentRouter.post('/', (req, res) => {
    const objs = req.body;
    console.log(objs);
    const failures = [];
    objs.forEach(o => {
        const r = PayTip(o);
        if (!r.success)
            failures.push(o);
    });
    if (failures.length) {
        res.statusMessage = 'Error haciendo algunos pagos. Por favor validar los datos';
        res.status(400);
        res.send({ payments: failures });
        return;
    }
    res.status(200).send();
});
function PayTip(obj) {
    const { value, date, method } = obj;
    if (!value || !date || !method) {
        return { success: false, message: 'Missing information' };
    }
    database_connection_1.payments.push(obj);
    return { success: true, message: '' };
}
exports.default = PaymentRouter;
