import {authStateSlice} from "./auth.reducer"

const { setUser } = authStateSlice.actions
export const addUserInformation = (user) => (dispatch) => {
  dispatch(setUser(user))
}

