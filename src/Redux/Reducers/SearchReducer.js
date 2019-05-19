import {ActionTypes} from '../ActionTypes'
const initial_state={
    search_text:'',
    content_list:[],
    current_count:0
}
export default function(state=initial_state,action){
    switch(action.type){
        case ActionTypes.SEARCH:
            return({...state,search_text:action.payload.search_text,search_loading_flag:true,content_list:[]})
        case ActionTypes.LOAD_MORE:
            return({...state,search_loading_flag:true})    
        case ActionTypes.SUCCESS_LOADMORE:
            let temp=[...state.content_list]
            let new_array=[...temp,...action.payload.contents]
            let new_current_count=state.current_count+action.payload.contents.length
            return ({...state,content_list:new_array,current_page:action.payload.page,search_loading_flag:false,current_count:new_current_count})
        case ActionTypes.SUCCESS_SEARCH:
            let current_count=action.payload.contents.length
            return ({...state,content_list:action.payload.contents,search_loading_flag:false,current_page:1,current_count:current_count,total_count:action.payload.total_count})    
        default:
            return state
    }
}