import { NextFont } from 'next/dist/compiled/@next/font';

declare module 'next/font/google' {
  export function Inter(options: {
    weight?: string | number | Array<string | number>;
    style?: string | Array<string>;
    subsets?: Array<string>;
    display?: string;
    variable?: string;
    preload?: boolean;
    fallback?: string | string[];
    adjustFontFallback?: boolean | string;
    axes?: string[];
  }): NextFont;
}

declare module 'next/font/local' {
  export default function localFont(options: {
    src: string | Array<{ path: string; weight?: string; style?: string }>;
    display?: string;
    weight?: string;
    style?: string | string[];
    fallback?: string[];
    preload?: boolean;
    variable?: string;
    adjustFontFallback?: string | boolean;
    declarations?: Array<{ prop: string; value: string }>;
  }): NextFont;
}
