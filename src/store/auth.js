import { createSlice } from '@reduxjs/toolkit';

const authInitialState = {
    isAuthenticated: false,
}

const authSlice = createSlice({
    name: 'authSlice',
    initialState: authInitialState,
    reducers: {
        login(state){
            state.isAuthenticated = true;
        },
        logout(state){
            state.isAuthenticated = false;
        }
    }
})


export default authSlice.reducer;
export const authAction = authSlice.actions;