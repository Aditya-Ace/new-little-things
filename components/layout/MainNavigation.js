import classes from "./MainNavigation.module.css"

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>New Little Things</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Things</Link>
          </li>
          <li>
            <Link to="/new-little-thing">Add a thing</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation
