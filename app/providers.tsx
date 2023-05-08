'use client';
import { getData } from '@/src/lib/data'

import { createContext } from 'react';

export const ThemeContext = createContext({});

export default async function ThemeProvider({ children }: { children: any }) {
    const x = await getData()
    console.log(x.shortlisted[0].firstName)
    return (
        <ThemeContext.Provider value="dark">
            {children}
        </ThemeContext.Provider>
    );
}