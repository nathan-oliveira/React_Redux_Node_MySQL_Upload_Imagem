const INITIAL_STATE = {
  list: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SHOW_PRODUCT':
      return Object.assign({}, state, {list: action.payload})
    default:
      return state
  }
}