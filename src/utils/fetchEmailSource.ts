import { readFileSync } from 'fs';
import path from 'path';

interface FetchEmailSourceOptions {
  component: string;
}

export const fetchEmailSource = ({ component }: FetchEmailSourceOptions): string => {
  try {
    const filePath = path.join(process.cwd(), 'src', 'components', 'emails', `${component}.tsx`);
    return readFileSync(filePath, 'utf-8');
  } catch (error) {
    console.error('Error reading email source:', error);
    return '// Error loading source code';
  }
};

// This is a client-side compatible version that will be used in the browser
export const fetchEmailSourceClient = async ({ component }: FetchEmailSourceOptions): Promise<string> => {
  try {
    const response = await fetch(`/api/email-source?component=${component}`);
    if (!response.ok) throw new Error('Failed to fetch source');
    return await response.text();
  } catch (error) {
    console.error('Error fetching email source:', error);
    return '// Error loading source code';
  }
};
