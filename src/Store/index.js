import { configureStore } from '@reduxjs/toolkit';
import { stepOneReducer } from './Reducers/stepOne';

export const store = configureStore({
    reducer: {
        stepOneReducer,
    }
})



