import { useSelector, useDispatch } from 'react-redux';
import { AllStatus, Status } from '@models';
import { formatFilterTag } from '@utils';
import { RootState, AppDispatch } from '@app/store';
import { statusFilterChanged } from './filtersSlice';

const StatusFilter = () => {
    const currentStatus = useSelector((state: RootState) => state.filters.status);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <section className="flex items-center mt-6 mb-4 overflow-scroll">
            {['all'].concat(Object.keys(Status)).map(key => (
                <div
                    key={key}
                    className={`filter-tag ${currentStatus === key ? 'selected' : ''}`}
                    onClick={() => dispatch(statusFilterChanged(key as AllStatus))}
                >
                    {formatFilterTag(key)}
                </div>
            ))}
        </section>
    );
};

export default StatusFilter;
