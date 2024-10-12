import { useReducer } from 'react';

const initialState = { loading: false, error: null };

function reducer(state, action) {
  switch (action.type) {
    case 'START':
      return { ...state, loading: true, error: null };
    case 'SUCCESS':
      return { ...state, loading: false };
    case 'ERROR':
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
}

const useLoading = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const startLoading = () => dispatch({ type: 'START' });
  const stopLoading = () => dispatch({ type: 'SUCCESS' });
  const setError = (error) => dispatch({ type: 'ERROR', error });

  return { state, startLoading, stopLoading, setError };
};

export default useLoading;
