import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { Status, Todo } from '@models';
import { RootState } from '@app/store';
import { getAllTodos } from '@api/todos';

type Todos = {
    entities: Todo[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
};

const initialState: Todos = {
    entities: [],
    status: 'idle',
    error: null,
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
    extraReducers(builder) {
        builder
            .addCase(fetchTodos.pending, state => {
                state.status = 'loading';
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.entities = action.payload;
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ?? 'Fetch request failed';
            });
    },
});

export const fetchTodos = createAsyncThunk<Todo[]>('todos/fetchTodos', async () => {
    const response = await getAllTodos();
    return response.data.objects;
});

export const selectAllTodos = (state: RootState) => {
    const {
        filters: { status },
        todos,
    } = state;
    if (status === 'all') return todos.entities;
    return todos.entities.filter(todo => todo.status === status);
};

export const { added, statusChanged, priorityChanged } = todosSlice.actions;

export default todosSlice.reducer;
