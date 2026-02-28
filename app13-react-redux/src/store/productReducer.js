const initialState = {
        products: [
        {
            id: 1, prodName: "t-shirt", prodDes: "multi-color"
        },
        {
            id: 2, prodName: "pants", prodDes: "development"
        }
    ]
}
export const productReducer = (state = initialState,action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return {
                ...state,
                products :[...state.products,action.payload]
            }
        case 'DELETE_PRODUCT':
            return{
                ...state,
                products: state.products.filter((p)=>p.id!==action.payload.id)
            }    
        case 'UPDATE_PRODUCT':
            return{
                ...state,
                products: state.products.map((p)=> p.id ===action.payload.id ? action.payload : p)
            }    
        default:
            return state;
    }
}