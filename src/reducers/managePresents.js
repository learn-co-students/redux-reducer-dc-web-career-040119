
export function managePresents(state = {
  numberOfPresents: 0
  }, action) {
    switch(action.type) {

      case "INCREASE":
        return Object.assign({}, state, {
          numberOfPresents: state.numberOfPresents + 1
        });

      default:
        return state;
      }
}

// standard function declaration above.
// state is set as a key/value pair followed by an action

// Action is defined as action) {switch(action.type) {
// case "TYPE":
// return DOES THE THING.

// in this case, Object.assign({}, state, {
//  numberOfPresents: state.numberOfPresents + 1

// The above passes an empty object, state, and a new key/value
// pair
// that modifies state and sets that value to what we currently
// have in state. So that's neat!
