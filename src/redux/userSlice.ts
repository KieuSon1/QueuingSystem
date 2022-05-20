import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { userInfo } from './types';


const initialState: userInfo = {
  userName: "KieuSon",
  fullName: "Kiều Hải Sơn",
  phoneNumber: "0123456789",
  email: "conmeo@gmail.com",
  password: "conmeoconcho",
  role: 0
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },
});

// To able to use reducers we need to export them.
export const { } = userSlice.actions;

export default userSlice.reducer;