import { Link } from 'react-router-dom'
import Menu from './Menu'

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        LukSteam.com
      </Link>
      <Menu />
    </header>
  )
}
