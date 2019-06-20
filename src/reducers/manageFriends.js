export function manageFriends(state= {friends: []}, action){
  switch(action.type){
    case 'ADD_FRIEND':
    return state={friends: [...state.friends, action.friend]}

    case 'REMOVE_FRIEND':
    let find_friend = state.friends.findIndex((friend)=> friend.id === action.id)
    let copy = [...state.friends]
    copy.splice(find_friend, 1)
    return state={friends: copy}

    default:
    return state
  }
}
