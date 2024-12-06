const redux = require('redux')
const createStore = redux.legacy_createStore
 
const initialState ={
    loading:false,
    users:[],
    error:'',
}

const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED'
const  FETCH_USERS_SUCCEED = 'FETCH_USERS_SUCCEED'
const  FETCH_USERS_FAILED  = 'FETCH_USERS_FAILED'

const fetchUsersRequested = ()=>{
    return {
        type:FETCH_USERS_REQUESTED
    }
}

const fetchUsersSucceeded=(users)=>{
    return{
        type:FETCH_USERS_SUCCEED
    }
}

const fetchUsersfailed= error=>{

    return{

        type:FETCH_USERS_FAILED,
        payload:error
    }
}


const reducer =(state=initialState,action)=>{

    switch(action.type){
        case FETCH_USERS_REQUESTED:
            return{
                ...state,
                laoding: true
            }

            case FETCH_USERS_SUCCEED:
                return{
                    loading:false,
                    users:action.payload,
                    error:''
                }

            case FETCH_USERS_FAILED:
                return{
                    loading:false,
                    users:[],
                    error:action.payload

                }
    }
}

const store = createStore(reducer) 


