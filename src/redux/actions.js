export const ADD = (text) => {
    return { type: 'ADD_TODO', text }
}
export const DEL = (id) => {
    return { type: 'DELETE_TODO', id }
}
export function COMP(id, check) {
    return {
        type: 'COMPLETE_TODO',
        id,
        check
    };
}
