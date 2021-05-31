import { useRouter } from "next/router"
import NewLittleThingsForm from "../../components/newLittleThings/NewLittleThingForm"

function AddNewThing() {
  const router = useRouter()
  const addNewData = async (newLittleThingData) => {
    const response = await fetch("/api/add-new-little-thing", {
      method: "POST",
      body: JSON.stringify(newLittleThingData),
      headers: {
        "Content-Type": "application/json",
      },
    })
    const data = await response.json()
    console.log(data)
    if (data.message === "Added your new little thing") {
      return router.push("/")
    } else {
      window.alert(data.message)
    }
  }
  return <NewLittleThingsForm onAddNewLittleThing={addNewData} />
}

export default AddNewThing
