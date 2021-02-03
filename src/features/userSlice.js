import { createSlice } from '@reduxjs/toolkit'
//rxslice

// a lorigine avec les hooks on avait
// ex: const [userName, setUserName] = useState(null)

const initialState = {
  userName: null,
  userEmail: null
}

//ici le setUserName(action.payload)
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.userName = action.payload.userName
      state.userEmail = action.payload.userEmail
    },
    setUserLogoutState: state => {
      state.userName = null
      state.userEmail = null
    }
  }
});

export const {
  setActiveUser,
  setUserLogoutState
} = userSlice.actions

export const selectUserName = state => state.user.userName
export const selectUserEmail = state => state.user.userEmail

export default userSlice.reducer