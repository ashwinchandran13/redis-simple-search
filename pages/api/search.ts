import { NextApiRequest, NextApiResponse } from 'next';
import { searchCars } from '../../lib/redis';

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    const q = req.query.q;
    
    const cars = await searchCars(q);
    res.status(200).json({ cars });
}