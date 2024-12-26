import { createSlice } from '@reduxjs/toolkit';



const initialState = {
  user: null,
  token: '',
  isLoading: false,
  error: '',
  userId: '',
  success: '',
};

export const authStateSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setResetUserState: (state) => (state = initialState),
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    setSuccess: (state, action) => {
      state.success = action.payload
    }
  },
});

export default authStateSlice.reducer;