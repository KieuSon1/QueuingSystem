import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { userInfo } from './types';

const initialState: userInfo = {
  userName: 'kieuson',
  fullName: 'Kiều Hải Sơn',
  phoneNumber: '0123456789',
  email: 'conmeo@gmail.com',
  password: '112233',
  role: 0,
  avatar:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJBOD72tHQtt4MVdSPjxi6gcJ8w9VjVv4KA&usqp=CAU',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, actions) => {
      state.email = actions.payload.email;
    },
    logout: (state) => {
      state.email = '';
    },
  },
});

// To able to use reducers we need to export them.
export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
