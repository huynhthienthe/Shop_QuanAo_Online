import { configureStore } from "@reduxjs/toolkit";
import User_Status_Reducer from "./User_Status_Slice";


export default configureStore({
  reducer: {
    user_status: User_Status_Reducer },
})
