import { createSlice } from '@reduxjs/toolkit';

export const ProfileSlice = createSlice({
    name: 'profile',
    initialState: {
        filter: 2,
        metricsList: [],
        avatar: undefined,
    },
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload
        },
        setMetricsList: (state, action) => {
            action.payload.length > 0 ?
                state.metricsList = action.payload :
                state.metricsList = [];
        },
        setNewAvatar: (state, action) => {
            state.avatar = action.payload
        },
    }
})


export const { setFilter, setMetricsList, setNewAvatar } = ProfileSlice.actions;
export default ProfileSlice.reducer;