import {ActionTypes} from '../ActionTypes'
export const searchAction=(data)=>{
    return(
        {
            type:ActionTypes.SEARCH,
            payload:data
        }
    );
}