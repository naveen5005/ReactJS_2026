export const handleAddUser = (user) =>{
    return {
        type: 'ADD_USER',
        payload: user
    }
}

export const handleDeleteUser = (user) =>{
    return {
        type: 'DELETE_USER',
        payload: user.id
    }
}

export const handleUpdateUser = (user) =>{
    return {
        type: 'UPDATE_USER',
        payload: user
    }
}

export const handleAddProduct = (prod) => {
    return {
        type: 'ADD_PRODUCT',
        payload: prod
    }
}

export const handleDeleteProduct = (prod) => {
    return {
        type: 'DELETE_PRODUCT',
        payload: prod
    }
}

export const handleUpdateProduct = (prod) => {
    return {
        type: 'UPDATE_PRODUCT',
        payload: prod
    }
}