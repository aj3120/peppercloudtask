import {ActionTypes} from '../ActionTypes'
const initial_state={
    test_data:'no data'
}
export default function(state=initial_state,action){
    switch(action.type){
        case ActionTypes.TEST:
            return({...state,test_data:action.payload.name})
        default:
            return state    
    }
}