// TO USE WITH API
// USE
// Redux Thunk  https://github.com/gaearon/redux-thunk
// Redux Saga https://github.com/yelouafi/redux-saga

// increment like

export function increment(index){
    return {
        type: 'INCREMENT_LIKES',
        index
    }
}


// add comment
export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}


// remove comment

export function removeComment(postId,i){
    return {
        type: 'REMOVE_COMMENT',
        i,
        postId
    }
}