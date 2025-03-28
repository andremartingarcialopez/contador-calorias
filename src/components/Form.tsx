
import { categories } from "../data/categoriesData"

export function Form() {
    return (
        <form className="bg-white p-8 rounded shadow shadow-gray-500">
            <div>
                <label className="font-bold" htmlFor="categories">Categorias:</label>
                <select className="border p-2 rounded-xl border-gray-500 w-full my-3" name="" id="categories">
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
                id="activities"/>
            </div>

            <div>
                <label className="font-bold" htmlFor="calories">Calorias:</label>
                <input type="number" 
                placeholder="Ej. 500, 900"
                className="border p-2 rounded-xl border-gray-500 w-full my-3"
                id="calories"/>
            </div>

            <input type="submit" 
            className=" text-white font-bold bg-black p-2 mt-3 w-full hover:bg-gray-800 hover:cursor-pointer"
            value={"Enviar"} />
        </form>
    )
}
