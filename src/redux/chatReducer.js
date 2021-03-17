

let stateChat={
    change:'',
    signUp: {
        error: null,
        email: '',
        password: '',
    },
}




export const chatReducer = (state=stateChat,action)=>{
    switch(action.type){


        default:{
            return{...state}
        }
    }
}