import { renderDom } from '@utils/render-react';
import Header from '@components/Header';
import PriorityFilter from '@components/PriorityFilter';

const Home = () => {
    return (
        <div className="mx-auto my-2 max-w-[85%]">
            <Header />
            <PriorityFilter />
        </div>
    );
};

renderDom(<Home />);
