import Link from "next/link"
import classes from "./MainNavigation.module.css"
import Image from "next/image"

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>New Little Things</div>

      <Image
        src="/balance.png"
        alt="Picture of the author"
        width={50}
        height={50}
        fixed="true"
      />

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
