import Link from "next/link"
import classes from "./MainNavigation.module.css"

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>New Little Things</div>
      <nav>
        <ul>
          <li>
            <Link href="/">Things</Link>
          </li>
          <li>
            <Link href="/new-little-things">Add a thing</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation
