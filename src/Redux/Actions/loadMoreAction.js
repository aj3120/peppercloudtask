import {ActionTypes} from '../ActionTypes'
export const loadMoreAction=(data)=>{
    return(
        {
            type:ActionTypes.LOAD_MORE,
            payload:data
        }
    )
}