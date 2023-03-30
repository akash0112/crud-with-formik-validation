export const AddNewUser =(user)=>dispatch=>(
    dispatch({
        type:"ADD_USER",
        payload:user
    })
)

export const DeleteUser =(id)=>dispatch=>(
    dispatch({
        type:"DELETE_USER",
        payload:id
    })
)

export const UpdateUser =(edituser)=>dispatch=>(
    dispatch({
        type:"UPDATE_USER",
        payload:edituser
    })
)
export const EditUser =(id)=>dispatch=>(
    dispatch({
        type:"EDIT_USER",
        payload:id
    })
)
export const AfterUpdateUser =()=>dispatch=>(
    dispatch({
        type:"AFTER_UPDATE_USER",
    })
)