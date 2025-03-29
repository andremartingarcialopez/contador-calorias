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

        let activityUpdate: Activity[] = [];

        if (state.activityID) {
            activityUpdate = state.activities.map(function (activity) {
                if (activity.id == state.activityID) {
                    return action.playload.newActivity
                }else{
                    return activity
                }
            })
        }else{
            activityUpdate = [...state.activities, action.playload.newActivity]
        }
        
        return {
            ...state, 
            activities: activityUpdate,
            activityID: ""
            
        }
    }

    if (action.type == "edit-activityID") {

        return {
            ...state, activityID: action.playload.id
        }
    }
}