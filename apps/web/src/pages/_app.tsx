import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import store from '@app/store';

import '@styles/tailwindcss.css';

interface AppProps {
    children: ReactNode;
}

const App = ({ children }: AppProps) => {
    return <Provider store={store}>{children}</Provider>;
};

export { type AppProps, App as default };
