import { createReducer, on } from '@ngrx/store';
import { add, clear } from './color.actions';

export const initialState: any = [];

export const colorReducer = createReducer(
    initialState,
    on(add, (state, { color }) => [...state, color]),
    on(clear, (state, { index }) => state.filter((data: any) => data.id !== index)),

);