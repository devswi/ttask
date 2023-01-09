import { renderDom } from '@utils/render-react';
import { egg } from 'assets/images';

const Installation = () => {
    return (
        <section>
            <div className="text-3xl font-bold text-green-200">Installation Guide</div>
            <img className="w-20" src={egg} />
        </section>
    );
};

renderDom(<Installation />);
