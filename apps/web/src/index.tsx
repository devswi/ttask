import { createRoot } from 'react-dom/client';
import App from '@pages/App';
import { avatar, egg } from 'assets/images';

const Demo = () => {
    return (
        <App>
            <div className="text-3xl font-bold underline text-slate-400">This is TTask</div>
            <img className="w-20" src={avatar} />
            <img className="w-20" src={egg} />
        </App>
    );
};

const container = document.querySelector('#root');
const root = createRoot(container!);
root.render(<Demo />);
