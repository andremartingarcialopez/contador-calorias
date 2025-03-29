import { Activity } from "../types/types"

export type ActivityActions = 
    {type: "save-activity", payload:{newActivity: Activity}} |
    {type: "edit-activityID", payload:{id: Activity["id"]}} 

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
                    return action.payload.newActivity
                }else{
                    return activity
                }
            })
        }else{
            activityUpdate = [...state.activities, action.payload.newActivity]
        }
        
        return {
            ...state, 
            activities: activityUpdate,
            activityID: ""
            
        }
    }

    if (action.type == "edit-activityID") {

        return {
            ...state, activityID: action.payload.id
        }
    }
}