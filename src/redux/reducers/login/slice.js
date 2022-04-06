import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { callAPI } from '../../../helpers/network';
const initialState = {
  loading: false,
  error: ""
};
const slices = createSlice({
  initialState,
  name: 'login',
  reducers: {
    setError (state, action) {
      Object.assign(state, {
        ...state,
        error: action.payload,
      });
    },
    toggleLoading(state, action) {
      Object.assign(state, {
        ...state,
        loading: action.payload,
      });
    },
  },
});
const { toggleLoading, setError } = slices.actions;
export const useLoginDispatcher = () => {
  const { login } = useSelector((state) => state);
  const dispatch = useDispatch();
  const doLogin = async (values) => {
    dispatch(toggleLoading(true));
    const response = await callAPI({
      url: 'auth/local',
      // url: '/user-login/login',
      method: 'POST',
      data: values,
    });
    const { data } = response;
    localStorage.setItem('jwt', data.jwt);
    localStorage.setItem('user', JSON.stringify(data.user));
    dispatch(toggleLoading(false));
  };
  return {
    login,
    doLogin,
  };
};
export default slices.reducer;
