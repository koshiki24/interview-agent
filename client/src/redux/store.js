import { configureStore } from '@reduxjs/toolkit';
//import userSlice.reducer from "./userSlice";
import userSlice from "./userSlice";

export default configureStore({
  reducer: {
    user:userSlice
  },
})