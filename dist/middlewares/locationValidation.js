"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const geoip_lite_1 = __importDefault(require("geoip-lite"));
const expectedCountryCode = 'IN';
const locationValidation = (req, res, next) => {
    const ip = req.ip || req.headers['x-forwarded-for'];
    if (!ip) {
        return res.status(400).send('Unable to determine your location');
    }
    const geo = geoip_lite_1.default.lookup(ip);
    if (!geo || geo.country !== expectedCountryCode) {
        return res.status(403).send('Access restricted for your region');
    }
    next();
};
module.exports = locationValidation;
