import NewLittleThingsItem from "./NewLittleThingsItem"
import classes from "./NewLittleThingsList.module.css"

function NewLittleThingsList(props) {
  return (
    <ul className={classes.list}>
      {props.newLittleThings.map((newLittleThing) => (
        <NewLittleThingsItem
          key={newLittleThing.id}
          id={newLittleThing.id}
          image={newLittleThing.image}
          title={newLittleThing.title}
          punchLine={newLittleThing.punchLine}
        />
      ))}
    </ul>
  )
}

export default NewLittleThingsList
