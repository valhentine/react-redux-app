const initialAppState = {
  user: null
}

export default function(state = initialAppState, action) {
  console.log("action:", action);
  switch (action.type) {
    case "update-user":
      return { user: action.user }
      break;
    default:
      return state
  }
}

export const getUser = state => state.user
