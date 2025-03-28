
import { Dispatch, useState } from "react"
import { categories } from "../data/categoriesData"
import { Activity } from "../types/types";

type FormProps = {
    dispatch: Dispatch<ActivityActions>
}

const initialStateForm = {
    categories: 1,
    activities: "",
    calories: ""
}

export function Form({ dispatch }: FormProps) {

    const [activity, setActivity] = useState<Activity>(initialStateForm);

    function handleChange(e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) {

        const numberCovertion = ["categories", "calories"].includes(e.target.id);

        setActivity({ ...activity, [e.target.id]: numberCovertion ? +e.target.value : e.target.value })

    }

    function formValidation() {
        const { activities, calories } = activity;

        if (activities.trim() == "" || calories == "") {
            return true
        } else {
            return false
        }
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        dispatch({ type: "save-activity", playload: { newActivity: activity } })
        setActivity(initialStateForm)
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow shadow-gray-500">
            <div>
                <label className="font-bold" htmlFor="categories">Categorias:</label>
                <select className="border p-2 rounded-xl border-gray-500 w-full my-3"
                    id="categories"
                    value={activity.categories}
                    onChange={handleChange}>
                    {categories.map(function (category) {
                        return (
                            <option key={category.id} value={category.id}>{category.name}</option>
                        )
                    })}
                </select>
            </div>

            <div>
                <label className="font-bold" htmlFor="activities">Actividad:</label>
                <input type="text"
                    placeholder="Ej. Correr, Comer Tacos, Pesas"
                    className="border p-2 rounded-xl border-gray-500 w-full my-3"
                    id="activities"
                    value={activity.activities}
                    onChange={handleChange} />
            </div>

            <div>
                <label className="font-bold" htmlFor="calories">Calorias:</label>
                <input type="number"
                    placeholder="Ej. 500, 900"
                    className="border p-2 rounded-xl border-gray-500 w-full my-3"
                    id="calories"
                    value={activity.calories}
                    onChange={handleChange} />
            </div>

            <input type="submit"
                className=" text-white font-bold bg-black p-2 mt-3 w-full hover:bg-gray-800 hover:cursor-pointer disabled:opacity-30 disabled:bg-black disabled:cursor-default"
                value={activity.categories == 1 ? "Guardar Comida" : "Guardar Ejercicio"}
                disabled={formValidation()} />
        </form>
    )
}
