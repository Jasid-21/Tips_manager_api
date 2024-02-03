"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function GetRandomString(num = 5) {
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const upper = lower.toUpperCase();
    const numbers = '0123456789';
    const total = lower + upper + numbers;
    var code = '';
    for (var i = 0; i < num; i++) {
        const index = Math.floor(Math.random() * (total.length - 1));
        const char = total[index];
        code += char;
    }
    return code;
}
exports.default = GetRandomString;
