"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TheGranary {
    constructor() {
        this.grain = {};
    }
    static getInstance() {
        if (!TheGranary.instance) {
            TheGranary.instance = new TheGranary();
        }
        return TheGranary.instance;
    }
    setGranary(name, state) {
        this.grain[name] = state;
    }
    getGranary(name) {
        return this.grain[name] ? this.grain[name] : "";
    }
}
exports.default = TheGranary;
