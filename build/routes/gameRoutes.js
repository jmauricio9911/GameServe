"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gamesController_1 = __importDefault(require("../controller/gamesController"));
class GamesRoutes {
    constructor() {
        this.roter = express_1.Router();
        this.config();
    }
    config() {
        this.roter.get('/', gamesController_1.default.list);
        this.roter.get('/:id', gamesController_1.default.getOne);
        this.roter.post('/', gamesController_1.default.create);
        this.roter.put('/:id', gamesController_1.default.update);
        this.roter.delete('/:id', gamesController_1.default.delete);
    }
}
const gamesRoutes = new GamesRoutes();
exports.default = gamesRoutes.roter;
