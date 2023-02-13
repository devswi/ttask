import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '@app/store';
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
                <div key={todo.id}>{todo.title}</div>
            ))}
        </section>
    );
};

export default TodosList;
