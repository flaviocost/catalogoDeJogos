import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', texto: 'Início' },
  { to: '/produtos', texto: 'Produtos' },
  { to: '/sobre', texto: 'Sobre' },
  { to: '/contato', texto: 'Contato' },
]

export default function Menu() {
  return (
    <nav className="menu" aria-label="Navegação principal">
      {links.map((link) => (
        <NavLink key={link.to} to={link.to} end={link.to === '/'}>
          {link.texto}
        </NavLink>
      ))}
    </nav>
  )
}
