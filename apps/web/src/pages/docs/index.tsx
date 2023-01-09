import { renderDom } from '@utils/render-react';

const Docs = () => {
    return (
        <section>
            <div className="text-3xl font-bold text-slate-400">Docs Homepage</div>

            <div className="group mt-4 [&>a]:mr-4 text-blue-600 text-sm [&>a:last-child]:ml-0">
                <a href="/docs/installation" className="hover:text-blue-900">
                    Installation
                </a>
                <a href="/docs/examples/today" className="hover:text-blue-900">
                    Today Example
                </a>
                <a href="/docs/examples/todo" className="hover:text-blue-900">
                    Todo
                </a>
            </div>
        </section>
    );
};

renderDom(<Docs />);
