import Head from "next/head"
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
    if (data.message === "Added your new little thing") {
      return router.push("/")
    } else {
      window.alert(data.message)
    }
  }
  return (
    <>
      <Head>
        <title>Add your little thing</title>
        <meta
          name="description"
          content="My New little project designed using in love with Javascript React Next Node & MongoDB"
        />
      </Head>
      <NewLittleThingsForm onAddNewLittleThing={addNewData} />
    </>
  )
}

export default AddNewThing
