import { Activity } from "../types/types"

export type ActivityActions = 
    {type: "save-activity", playload:{newActivity: Activity}}

export type InitialStateType = {
    activities: Activity[]
}

export const initialStade: InitialStateType = {
    activities: []
}


export function activityReducers(state: InitialStateType = initialStade , action: ActivityActions) {
    
    if (action.type == "save-activity") {
        
        return {
            ...state, activities:[...state.activities, action.playload.newActivity]
        }
    }
}