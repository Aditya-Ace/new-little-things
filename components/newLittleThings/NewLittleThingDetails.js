import classes from "./NewLittleThingDetails.module.css"
function NewLittleThingDetails(props) {
  return (
    <section className={classes.details}>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <q>{props.punchLine}</q>
      <p>{props.description}</p>
    </section>
  )
}

export default NewLittleThingDetails
