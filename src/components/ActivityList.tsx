import { useMemo } from "react"
import { Activity } from "../types/types"
import { categories } from "../data/categoriesData"
import { PencilSquareIcon } from "@heroicons/react/16/solid"
import { ActivityActions } from "../useReducer/activityReducer"

type ActivityListProps = {
    activities: Activity[]
    dispatch: React.ActionDispatch<[action: ActivityActions]>
}

export function ActivityList({ activities, dispatch }: ActivityListProps) {

    const formatCategory = useMemo(() => (category: Activity["categories"]) => {
        return categories.map(function (cat) {
            return cat.id == category ? cat.name : ""
        })
    },[activities])

    return (
        <>
            <h2 className=" text-center text-gray-600 font-bold text-4xl">Comidas y Actividades</h2>

            {activities.map(function (activity) {
                return (
                    <div key={activity.id} className="mt-5 flex justify-between items-center border-t border-t-gray-500">
                        <div className="p-5 ">
                            <p className={`w-18 font-semibold p-1.5 text-center text-white ${activity.categories == 1 ? `bg-orange-500`: `bg-yellow-500`}`}>{formatCategory(activity.categories)}</p>
                            <p className=" font-bold text-2xl text-gray-800">{activity.activities}</p>
                            <p className=" text-lime-600 font-black text-4xl">{activity.calories} Calorias</p>
                        </div>

                        <div>
                            <button onClick={() => dispatch({type: "edit-activityID", payload:{id: activity.id}})}>
                                <PencilSquareIcon className={`w-8 h-8 text-gray-600 hover:cursor-pointer ${activity.categories == 1 ? `hover:text-orange-500` : `hover:text-yellow-500`}`}/>
                            </button>
                        </div>
                    </div>
                )
            })}
        </>
    )
}
