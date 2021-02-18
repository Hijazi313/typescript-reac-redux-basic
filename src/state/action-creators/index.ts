import axios from "axios";
import {Dispatch} from "redux"
import {ActionType} from "../action-types";
import {Action} from "../actions";

export const searchRepositories =  (term: string) => async (dispatch:Dispatch<Action>) => {
    dispatch({type: ActionType.SEARCH_REPOSITORIES});
    try{
        const {data} = await axios.get(`http://registry.npmjs.org/-/v1/search?text=${term}`);
        const names = data.objects.map((result:any) => result.package.name)
        
        dispatch({type: ActionType.SEARCH_REPOSITORIES_SUCCESS, payload: names})
    }
    catch(err){
        dispatch({type:ActionType.SEARCH_REPOSITORIES_ERROR, payload: err.message})

    }

}
export {}