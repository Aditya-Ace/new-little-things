import Card from "../ui/Card"
import classes from "./NewLittleThingsItem.module.css"

function MeetupItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <blockquote>{props.punchLine}</blockquote>
        </div>
        <div className={classes.actions}>
          <button>Show Details</button>
        </div>
      </Card>
    </li>
  )
}

export default MeetupItem
