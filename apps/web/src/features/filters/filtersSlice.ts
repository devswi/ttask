import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Status, Priority } from '@models';

type TodoFilter = { status?: Status; priority?: Priority };

const initialState: TodoFilter = {};

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        statusFilterChanged(state, action: PayloadAction<Status>) {
            state.status = action.payload;
        },
        priorityFilterChanged(state, action: PayloadAction<Priority>) {
            state.priority = action.payload;
        },
    },
});

export const { statusFilterChanged, priorityFilterChanged } = filtersSlice.actions;

export default filtersSlice.reducer;
