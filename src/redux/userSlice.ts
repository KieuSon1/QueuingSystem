import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { userInfo } from './types';


const initialState: userInfo = {
<<<<<<< HEAD
  userName: "Beos",
  fullName: "Mạnh Quang Thong",
  phoneNumber: "123456789",
  email: "manhthongg950@gmail.com",
=======
  userName: "kieuson1",
  fullName: "Kiều Hải Sơn",
  phoneNumber: "123456789",
  email: "kieuson@gmail.com",
>>>>>>> f840345c5b4a33d08f203b95599e9d4d4aef0145
  password: "123456",
  role: 0,
  avatar: "https://scontent.fsgn5-15.fna.fbcdn.net/v/t1.15752-9/280456204_850331862593722_6796225965863368502_n.jpg?_nc_cat=111&ccb=1-6&_nc_sid=ae9488&_nc_ohc=wAYWEdu1YyMAX8mmLEc&_nc_ht=scontent.fsgn5-15.fna&oh=03_AVJUg7CLF6CvgDl8DpuHzlaTg_ZM-d1JVnkERrwvoVd90Q&oe=62A6E60E"

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
