import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

// Define a type for the slice state
interface IUser {
  email: string;
  displayName: string;
  localId: string;
}

// Define the initial state using that type
const initialState: IUser = {
  email: '',
  displayName: '',
  localId: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.email = action.payload.email;
      state.displayName = action.payload.displayName;
      state.localId = action.payload.localId;
    },
    logout: (state) => {
      state.email = '';
      state.displayName = '';
      state.localId = '';
    },
  },
});

export const { login, logout } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
