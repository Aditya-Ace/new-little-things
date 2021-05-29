import NewLittleThingsForm from "../../components/newLittleThings/NewLittleThingForm"

function AddNewThing() {
  const addNewData = (data) => {
    console.log(data)
  }
  return <NewLittleThingsForm onAddNewLittleThing={addNewData} />
}

export default AddNewThing
