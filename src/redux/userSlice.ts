import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { userInfo } from './types';


const initialState: userInfo = {
  userName: "kimtan1",
  fullName: "Lê Kim Tân",
  phoneNumber: "0999999999",
  email: "kimtan1@gmail.com",
  password: "meomeo",
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