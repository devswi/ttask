import { ReactNode } from 'react';

import '@styles/tailwindcss.css';

interface AppProps {
    children: ReactNode;
}

const App = ({ children }: AppProps) => {
    return <div>{children}</div>;
};

export { type AppProps, App as default };
