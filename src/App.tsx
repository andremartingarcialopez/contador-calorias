
import { useReducer } from "react"
import { Form } from "./components/Form"
import { activityReducers, initialStade } from "./useReducer/activityReducer"
import { ActivityList } from "./components/ActivityList";
function App() {


  const [state, dispatch] = useReducer(activityReducers, initialStade);
  console.log(state)
  
  return (
    <>
      <header className="bg-lime-600 p-5">
        <div className="mx-auto max-w-4xl flex justify-between">
          <h1 className=" text-white text-3xl font-bold">
            Contador de Calorias Test
          </h1>

          <button className="border border-white px-4 rounded-xl text-white font-bold hover:cursor-pointer hover:bg-white hover:text-lime-500">
            Reiniciar
          </button>
        </div>
      </header>

      <section className="bg-lime-500 p-10">
        <div className="mx-auto max-w-4xl">
          <Form
            dispatch={dispatch}
            state={state}
            
           />
        </div>
      </section>

      <section className="p-10">
        <div className="mx-auto max-w-4xl">
          <ActivityList
          activities = {state?.activities} 
          dispatch = {dispatch}
          />
          
        </div>
      </section>

    </>
  )
}

export default App
