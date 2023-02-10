import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Status, Todo } from '@models';
import { v4 as uuidv4 } from 'uuid';

type Todos = { entities: Todo[] };

const initialState: Todos = {
    entities: [],
};

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        added(state, action: PayloadAction<Pick<Todo, 'title' | 'priority'>>) {
            const { title, priority } = action.payload;
            const newTodo: Todo = {
                id: uuidv4(),
                status: Status.Pending,
                title,
                priority,
            };
            state.entities.push(newTodo);
        },
        statusChanged(state, action: PayloadAction<Pick<Todo, 'id' | 'status'>>) {
            const { id: todoId, status } = action.payload;
            const todo = state.entities.find(entity => entity.id === todoId);
            if (todo) todo.status = status;
        },
        priorityChanged(state, action: PayloadAction<Pick<Todo, 'id' | 'priority'>>) {
            const { id: todoId, priority } = action.payload;
            const todo = state.entities.find(entity => entity.id === todoId);
            if (todo) todo.priority = priority;
        },
    },
});

export const { added, statusChanged, priorityChanged } = todosSlice.actions;

export default todosSlice.reducer;
