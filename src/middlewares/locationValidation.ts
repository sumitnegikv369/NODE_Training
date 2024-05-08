import { NextFunction, Request, Response } from "express";
import geoip from 'geoip-lite'; 

const expectedCountryCode = 'IN'; 
const locationValidation = (req: Request, res: Response, next: NextFunction) => {
    const ip: any = req.ip || req.headers['x-forwarded-for']; 
    if (!ip) {
      return res.status(400).send('Unable to determine your location');
    }
  
    const geo = geoip.lookup(ip);
    if (!geo || geo.country !== expectedCountryCode) {
      return res.status(403).send('Access restricted for your region');
    }
  
    next();
}

module.exports = locationValidation

