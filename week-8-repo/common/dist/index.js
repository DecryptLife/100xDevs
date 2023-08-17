"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const SignUpInput = zod_1.z.object({
    username: zod_1.z.string().min(1).max(20),
    password: zod_1.z.string().min(6).max(20),
});
