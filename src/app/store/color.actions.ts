import { createAction, props } from '@ngrx/store';

export const add = createAction('[Counter Component] Increment', props<{ color: { id: number, data: any } }>());
export const clear = createAction('[Counter Component] Decrement', props<{ index: number }>());
