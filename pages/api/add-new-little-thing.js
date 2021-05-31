import { MongoClient } from "mongodb"

// /api/add-new-little-thing
// only POST req

async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const data = req.body
      if (
        data.title === "" ||
        data.image === "" ||
        data.punchLine === "" ||
        data.description === ""
      ) {
        return res.status(400).json({ message: "Hey, we need all the fields." })
      }
      const client = await MongoClient.connect(
        "mongodb+srv://aditya711:WalkingDead@cluster0.mumkh.mongodb.net/new-little-things?retryWrites=true&w=majority"
      )
      const db = client.db()
      const newLittleThingsCollection = db.collection("new-little-things")
      const result = await newLittleThingsCollection.insertOne(data)
      console.log(result)
      client.close()
      res.status(201).json({ message: "Added your new little thing" })
    } catch (error) {
      res.status(400).json({
        message:
          "Failed to add your new little thing, You can try again though!",
      })
      console.error(error)
    }
  }
}

export default handler
