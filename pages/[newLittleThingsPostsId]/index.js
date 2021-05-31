import { MongoClient, ObjectId } from "mongodb"
import NewLittleThingDetails from "../../components/newLittleThings/NewLittleThingDetails"

function NewLittleThingsInDetails(props) {
  return (
    <NewLittleThingDetails
      id={props.newLittleThingData.id}
      image={props.newLittleThingData.image}
      title={props.newLittleThingData.title}
      punchLine={props.newLittleThingData.punchLine}
      description={props.newLittleThingData.description}
    />
  )
}

export async function getStaticPaths() {
  try {
    const client = await MongoClient.connect(
      "mongodb+srv://aditya711:WalkingDead@cluster0.mumkh.mongodb.net/new-little-things?retryWrites=true&w=majority"
    )
    const db = client.db()
    const newLittleThingsCollection = db.collection("new-little-things")
    const allNewLittleThingsData = await newLittleThingsCollection
      .find({}, { _id: 1 })
      .toArray()
    client.close()
    return {
      fallback: false,
      paths: allNewLittleThingsData.map((littleThing) => ({
        params: { newLittleThingsPostsId: littleThing._id.toString() },
      })),
    }
  } catch (error) {
    console.error(error)
  }
}

export async function getStaticProps(context) {
  const newLittleThingsPostsId = context.params.newLittleThingsPostsId
  //fetch some data from API
  try {
    const client = await MongoClient.connect(
      "mongodb+srv://aditya711:WalkingDead@cluster0.mumkh.mongodb.net/new-little-things?retryWrites=true&w=majority"
    )
    const db = client.db()
    const newLittleThingsCollection = db.collection("new-little-things")
    const thatLittleThing = await newLittleThingsCollection.findOne({
      _id: ObjectId(newLittleThingsPostsId),
    })
    client.close()
    return {
      props: {
        newLittleThingData: {
          id: thatLittleThing._id.toString(),
          title: thatLittleThing.title,
          image: thatLittleThing.image,
          punchLine: thatLittleThing.punchLine,
          description: thatLittleThing.description,
        },
      },
    }
  } catch (error) {
    console.error(error)
    return {
      props: {
        newLittleThingData: {},
      },
    }
  }
}
export default NewLittleThingsInDetails
