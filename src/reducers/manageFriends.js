export function manageFriends(state ={friends: []}, action){
  switch(action.type){
    case "ADD_FRIEND":
    return (
      {...state,
        friends: [...state.friends, action.friend]}
    )

    case "REMOVE_FRIEND":
    const removalIndex = state.friends.findIndex(friend => friend.id === action.id);
    return (
      {...state,
          friends: [
            ...state.friends.slice(0, removalIndex),
            ...state.friends.slice(removalIndex + 1)
          ]
      }
    )

  default:
    return state;
  }

}



// In manageFriends.js write a function called manageFriends that takes in an action and the previous state as its argument. Here, our action will also have an additional attribute called friend, sometimes an action contains multiple attributes for producing a new state.

// action = {
//   type: "ADD_FRIEND",
//   friend: "Chrome Boi"
// }
