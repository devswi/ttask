import { renderDom } from '@utils/render-react';
import { avatar } from 'assets/images';

const Home = () => {
    return (
        <section>
            <div className="text-3xl font-bold text-yellow-500">Hello World!</div>
            <img className="w-20" src={avatar} />

            <div className="flex mt-2">
                <a href="/about" className="text-red-800">
                    About us
                </a>
                <a href="/docs" className="ml-2">
                    Docs
                </a>
            </div>
        </section>
    );
};

renderDom(<Home />);
