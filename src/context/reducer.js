export const initialState = {
  loading: {
    isLoaded: false,
    analyser: null
  },
  routing: {
    path: null,
    animating: false,
    lastProject: null,
    currentScrollIndex: null,
    wave: null
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_PATH':
      return {
        ...state,
        routing: {
          ...state.routing,
          path: action.payload
        }
      }
    case 'SET_ANIMATING': {
      return {
        ...state,
        routing: {
          ...state.routing,
          animating: action.payload
        }
      }
    }
    case 'SET_LAST_PROJECT': {
      return {
        ...state,
        routing: {
          ...state.routing,
          lastProject: action.payload
        }
      }
    }
    case 'SET_CURRENT_SCROLL_INDEX': {
      return {
        ...state,
        routing: {
          ...state.routing,
          currentScrollIndex: action.payload
        }
      }
    }
    case 'SET_WAVE': {
      return {
        ...state,
        routing: {
          ...state.routing,
          wave: action.payload
        }
      }
    }
    case 'SET_IS_LOADED': {
      return {
        ...state,
        loading: {
          ...state.loading,
          isLoaded: action.payload
        }
      }
    }
    case 'SET_ANALYSER': {
      return {
        ...state,
        loading: {
          ...state.loading,
          analyser: action.payload
        }
      }
    }
    default:
      return state;
  }
}

export default reducer;