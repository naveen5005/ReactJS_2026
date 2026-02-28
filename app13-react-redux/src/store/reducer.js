const initialState = {
    users: [
        {
            id: 1, uname: "naveen", pwd: "123"
        },
        {
            id: 2, uname: "kiran", pwd: "123"
        }
    ]
}

export const reducerFunction = (state = initialState,action) => {
    switch (action.type) {
        case "ADD_USER":
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        case "DELETE_USER":
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload)
            }
        case "UPDATE_USER":
            return {
                ...state,
                users: state.users.map(user => 
                    user.id === action.payload.id ? action.payload : user
                )
            }        
        default:
            return state;
    }
}