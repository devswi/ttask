import { renderDom } from '@utils/render-react';
import Header from '@components/Header';
import StatusFilter from '@features/filters/StatusFilter';

const Home = () => {
    return (
        <div className="mx-auto my-2 max-w-[85%]">
            <Header />
            <StatusFilter />
        </div>
    );
};

renderDom(<Home />);
