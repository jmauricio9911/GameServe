"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = require("../controller/indexController");
class IndexRoutes {
    constructor() {
        this.roter = express_1.Router();
        this.config();
    }
    config() {
        this.roter.get('/', indexController_1.indexController.index);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.roter;
