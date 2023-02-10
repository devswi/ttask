import { configureStore } from '@reduxjs/toolkit';
import filtersSlice from '@features/filters/filtersSlice';
import todosSlice from '@features/todos/todosSlice';

export default configureStore({
    reducer: {
        todos: todosSlice,
        filters: filtersSlice,
    },
});
