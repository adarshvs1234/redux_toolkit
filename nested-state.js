const { legacy_createStore } = require("redux")




const initialState={
    name:'Vishwas',
    address:{
        street:'Main st.',
        city:'Boston',
        state:'MA'
    },
}

const STREET_UPDATED = 'STREET_UPDATED'
const updateStreet = (street)=>{
    return{
        type:STREET_UPDATED,
        payload:street,
    }
}

const reducer = (state=initialState,action)=>{

    switch(action.type){
        case STREET_UPDATED:
            return{
                ...state,
                address:{
                    ...state.address,
                    street:action.payload
                },
            }
            default:{
                return  state
            }
    }
}
const store = legacy_createStore(reducer)

console.log('initial state',store.getState());

const unsubscribe = store.subscribe(()=>console.log('updatestate',store.getState()))
store.dispatch(updateStreet('123 Main st.'))


unsubscribe()