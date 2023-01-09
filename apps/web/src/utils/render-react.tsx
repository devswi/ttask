import { ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '@pages/_app';

export function renderDom(node: ReactNode, selector = '#root') {
    const container = document.querySelector(selector);
    if (container) {
        const root = createRoot(container);
        root.render(<App>{node}</App>);
    }
}
