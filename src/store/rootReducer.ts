import userReducer from "./userSlice";
import loginFormReducer from "./form/loginFormSlice";
import dbRecordFormReducer from "./form/DBRecordFormSlice";
import { signInAPI } from "../api/authAPI";
import { databaseAPI } from "./../api/databaseAPI";
import databaseStatusReducer from "./databaseStatusSlice";
import dbRowModeReducer from "./dbRowModeSlice";

export default {
  userState: userReducer,
  loginFormState: loginFormReducer,
  dbRecordFormState: dbRecordFormReducer,
  databaseStatusState: databaseStatusReducer,
  [signInAPI.reducerPath]: signInAPI.reducer,
  [databaseAPI.reducerPath]: databaseAPI.reducer,
  dbRowModeState: dbRowModeReducer,
};
