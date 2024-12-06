const redux = require('redux')

const createStore = redux.legacy_createStore
const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'
const ICECREAM_ORDERED = 'ICECREAM_ORDERED'
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED'
const bindActionCreators = redux.bindActionCreators
const combineReducers = redux.combineReducers


function orderCake(){

    return{
    type : CAKE_ORDERED,
    payload:1
}

}

function restockCake(qty=1){

    return{
        type:CAKE_RESTOCKED,
        payload:qty
    }

    
}

function orderIceCream(qty=1){
    return{
        type:ICECREAM_ORDERED,
        payload:qty
    }
}

function restockIceCream(qty=1){
    return{
        type:ICECREAM_RESTOCKED,
        payload:qty
    }
}

// const initialState={
// numOfCakes:10,
// numOfIcecream:20
// }


// const initialState={
    
// }

const reducer = (state=initialState,action)=>{

    switch(action.type){

        case CAKE_ORDERED:
            return{
                ...state,
                numOfCakes : state.numOfCakes-1
            }

        case CAKE_RESTOCKED :
            return{

                ...state,
                numOfCakes:state.numOfCakes+ action.payload
            }


        case ICECREAM_ORDERED:
            return{
                ...state,
                numOfIcecream:state.numOfIcecream - action.payload

            }

            case ICECREAM_RESTOCKED:
                return{
                    ...state,
                    numOfIcecream:state.numOfIcecream + action.payload
                }

        default:
            return state
    }
}


// const rootReducer = combineReducers({
//     cake:cakeReducer,
//     iceCream : iceCreamReducer
// })
const store = createStore(reducer)
console.log('initial state',store.getState());



const unsubscribe = store.subscribe(()=>console.log('updatestate',store.getState()))

// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())

// store.dispatch((restockCake(3)))

const actions = bindActionCreators({orderCake,restockCake,orderIceCream,restockIceCream},store.dispatch)
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restockCake(4)


actions.orderIceCream()
actions.orderIceCream()
actions.orderIceCream()
actions.orderIceCream(1)
actions.restockIceCream(8)

unsubscribe()
