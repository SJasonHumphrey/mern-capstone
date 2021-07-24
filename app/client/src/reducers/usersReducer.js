

const usersReducer = (state,action) => {
    if(state == null){
        state = {
            auth:""
        }
    }

    switch(action.type){

        case "AUTH_USER":
            return{
                ...state,
                auth:action.data
            }


        default:
            return state;
    }
}

export default usersReducer
