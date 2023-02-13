import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AllStatus } from '@models';

type TodoFilter = { status: AllStatus };

const initialState: TodoFilter = {
    status: 'all',
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        statusFilterChanged(state, action: PayloadAction<AllStatus>) {
            state.status = action.payload;
        },
    },
});

export const { statusFilterChanged } = filtersSlice.actions;

export default filtersSlice.reducer;
