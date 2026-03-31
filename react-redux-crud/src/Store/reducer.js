
const initialState = {
    users: [
        {
            fname :"naveen",
            lname : "bellam",
            gender: "Male",
            state: "AP",
            areasOfInterest: ["HTML","CSS"]
        },
        {
            fname:"ok",
            lname: "ok",
            gender: "Female",
            state: "KA",
            areasOfInterest: ["JS"]
        }
    ]
}
export const rootReducer = (state = initialState, action) =>{
    switch (action.type) {
        case "ADD_USERS":
            return{
                ...state,
                users:[...state.users,action.payload]
            }
        case "UPDATE_USERS":
            return {
                users: state.users.map((usr,index)=>{
                    if(index === action.payload.isIndex){
                        return action.payload
                    }
                    return usr;
                })

            }
        case "DELETE_USERS":
            return{
                users: state.users.filter((usr,index)=>index!==action.payload.index)
            }    
        default:
            return state;
    }

}