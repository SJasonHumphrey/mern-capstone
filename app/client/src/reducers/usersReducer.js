const usersReducer = (state,action) => {
    if(state == null){
        state = {
            currentUser:{}
        }
    }
    switch(action.type){
        default:
            return state;
    }
}

export default usersReducer
