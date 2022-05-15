import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { userInfo } from './types';


const initialState: userInfo = {
  userName: "Lkt",
  fullName: "Le Kim Tan",
  phoneNumber: "123456789",
  email: "lkt@gmail.cum",
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
