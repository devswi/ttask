import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '@app/store';
import { PRIORITY_COLORS, Status } from '@models';
import { fetchTodos, selectAllTodos } from './todosSlice';

const TodosList = () => {
    const dispatch = useDispatch<AppDispatch>();
    const todos = useSelector(selectAllTodos);
    const todosStatus = useSelector((state: RootState) => state.todos.status);

    useEffect(() => {
        if (todosStatus === 'idle') {
            dispatch(fetchTodos());
        }
    }, [todosStatus, dispatch]);

    return (
        <section>
            {todos.map(todo => (
                <div
                    key={todo.id}
                    className="flex items-center justify-between pl-3 pr-4 py-3 mb-4 border border-gray-200 rounded-lg shadow-md shadow-gray-100"
                >
                    <span className="flex-1">{todo.title}</span>
                    {todo.priority && (
                        <span
                            className={`${
                                PRIORITY_COLORS[todo.priority]
                            } font-thin text-sm text-white px-2 py-0.5 mr-2 rounded-full`}
                        >
                            {todo.priority}
                        </span>
                    )}
                    <span className="font-thin text-sm text-white px-2 py-0.5 rounded-full bg-blue-300">
                        {Status[todo.status]}
                    </span>
                </div>
            ))}
        </section>
    );
};

export default TodosList;
