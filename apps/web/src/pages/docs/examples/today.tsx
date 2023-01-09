import { renderDom } from '@utils/render-react';

const Today = () => {
    return (
        <section>
            <div className="text-3xl font-bold text-zinc-900">Example Today</div>
        </section>
    );
};

renderDom(<Today />);
