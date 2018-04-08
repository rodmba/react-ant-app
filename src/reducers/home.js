import homeState from '../initial-states/home'
import { Action } from '../constants/home'

export default (state = homeState, action) => {
  switch (action.type) {
    case Action.SAMPLE_ACTION:
      return {
        ...state,
        hello: "Now, i'm changing this text."
      }
    default:
      return state
  }
}
