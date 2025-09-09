import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    role : null,

  };
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload.token;  // Lưu thông tin user vào state
      state.role = action.payload.role; 
    },
    logout: (state) => {
      state.user = null;  // Đặt user thành null khi logout
    },
  },
});

// Export các action
export const { login, logout } = userSlice.actions;

// Selector để lấy dữ liệu từ state
export const selectUser = (state) => state.user.user;
export const selectRole = (state) => state.user.role;
// Export reducer
export default userSlice.reducer;
