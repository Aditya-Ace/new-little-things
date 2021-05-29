import { useState } from "react"

import Card from "../ui/Card"
import classes from "./NewLittleThingForm.module.css"

function NewLittleThingsForm(props) {
  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [punchLine, setPunchLine] = useState("")
  const [description, setDescription] = useState("")

  function submitHandler(event) {
    event.preventDefault()
    const NewLittleThingData = {
      title,
      image,
      punchLine,
      description,
    }
    props.onAddNewLittleThing(NewLittleThingData)
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Give a title to your new little thing</label>
          <input
            type="text"
            required
            id="title"
            value={title}
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Your new little thing need an Image</label>
          <input
            type="url"
            required
            id="image"
            value={image}
            name="image"
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="punchLine">Punch Line Time</label>
          <input
            type="text"
            required
            id="punchLine"
            value={punchLine}
            name="punchLine"
            onChange={(e) => setPunchLine(e.target.value)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            value={description}
            name="description"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  )
}

export default NewLittleThingsForm
