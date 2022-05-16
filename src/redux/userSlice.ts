import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { userInfo } from './types';


const initialState: userInfo = {
  userName: "kieuson1",
  fullName: "Kiều Hải Sơn",
  phoneNumber: "123456789",
  email: "kieuson@gmail.com",
  password: "123456",
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
