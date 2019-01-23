const INITIAL_STATE = {
  barbers: null
}

const applySetBarbers = (state, action) => ({
  ...state,
  barbers: action.barbers
})

function barbersReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'BARBERS_SET' : {
      return applySetBarbers(state, action)
    }
    default : return state
  }
}

export default barbersReducer