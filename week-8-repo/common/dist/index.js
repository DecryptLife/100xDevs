"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUpInput = void 0;
const zod_1 = require("zod");
exports.SignUpInput = zod_1.z.object({
    username: zod_1.z.string().min(1).max(20),
    password: zod_1.z.string().min(6).max(20),
});
