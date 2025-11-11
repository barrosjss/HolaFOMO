import { readFileSync } from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { component } = req.query;
  
  if (!component || typeof component !== 'string') {
    return res.status(400).json({ error: 'Component name is required' });
  }

  try {
    const filePath = path.join(process.cwd(), 'src', 'components', 'emails', `${component}.tsx`);
    const source = readFileSync(filePath, 'utf-8');
    res.setHeader('Content-Type', 'text/plain');
    return res.status(200).send(source);
  } catch (error) {
    console.error('Error reading file:', error);
    return res.status(404).json({ error: 'Component not found' });
  }
}