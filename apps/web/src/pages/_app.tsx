import { ReactNode } from 'react';
import '@styles/tailwindcss.css';

interface AppProps {
    children: ReactNode;
}

const App = ({ children }: AppProps) => {
    // TODO: Add global context
    return <>{children}</>;
};

export { type AppProps, App as default };
