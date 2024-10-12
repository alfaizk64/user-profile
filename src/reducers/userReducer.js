export default function userReducer(state, action) {
    switch (action.type) {
      case 'UPDATE_USER':
        return { ...state, user: action.payload };
      case 'SET_LOADING':
        return { ...state, loading: action.payload };
      default:
        return state;
    }
  }
  