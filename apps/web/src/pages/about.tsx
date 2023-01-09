import { renderDom } from '@utils/render-react';

const About = () => {
    return (
        <section>
            <div className="text-3xl font-bold text-slate-400">About us</div>
        </section>
    );
};

renderDom(<About />);
