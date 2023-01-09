import { renderDom } from '@utils/render-react';

const Todo = () => {
    return (
        <section>
            <div className="text-3xl font-bold text-zinc-900">Todo</div>
        </section>
    );
};

renderDom(<Todo />);
