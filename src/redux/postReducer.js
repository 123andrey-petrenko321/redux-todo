import { ADD_TODO, COMPLETE_TODO, DELETE_TODO } from './types';

const initialState = {
    posts: []
}

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return { ...state, posts: state.posts.concat([action.text]) }
        case DELETE_TODO:
            const id = action.id
            return {
                ...state, posts: state.posts.filter((posts) => posts.id !== id)
            }
        case COMPLETE_TODO:
            return {
                ...state,
                posts: state.posts.map(posts =>
                    posts.id === action.id
                        ? { ...posts, check: action.check }
                        : posts)
            }
        default: return state
    }

}