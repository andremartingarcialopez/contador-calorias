import { Activity } from "../types/types"

export type ActivityActions = 
    {type: "save-activity", playload:{newActivity: Activity}} |
    {type: "edit-activityID", playload:{id: Activity["id"]}} 

export type InitialStateType = {
    activities: Activity[]
    activityID: Activity["id"]
}

export const initialStade: InitialStateType = {
    activities: [],
    activityID: ""
}


export function activityReducers(state: InitialStateType = initialStade , action: ActivityActions) {
    
    if (action.type == "save-activity") {
        
        return {
            ...state, activities:[...state.activities, action.playload.newActivity]
        }
    }

    if (action.type == "edit-activityID") {

        return {
            ...state, activityID: action.playload.id
        }
    }
}