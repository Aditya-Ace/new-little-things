import { MongoClient } from "mongodb"
import NewLittleThingsList from "../components/newLittleThings/NewLittleThingsList"

function HomePage(props) {
  return <NewLittleThingsList newLittleThings={props.littleThings} />
}

export async function getStaticProps() {
  //make API calls, fetch data
  try {
    const client = await MongoClient.connect(
      "mongodb+srv://aditya711:WalkingDead@cluster0.mumkh.mongodb.net/new-little-things?retryWrites=true&w=majority"
    )
    const db = client.db()
    const newLittleThingsCollection = db.collection("new-little-things")
    const allNewLittleThingsData = await newLittleThingsCollection
      .find()
      .toArray()
    client.close()
    return {
      props: {
        littleThings: allNewLittleThingsData.map((littlething) => ({
          title: littlething.title,
          id: littlething._id.toString(),
          punchLine: littlething.punchLine,
          image: littlething.image,
        })),
      },
      revalidate: 1,
    }
  } catch (error) {
    console.error(error)
    return {
      props: {
        littleThings: [],
      },
    }
  }
}

export default HomePage
