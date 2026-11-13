import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="hero">
      <h1>LukSteam</h1>
      <p>
        A LukSteam reúne os melhores títulos de ação, terror, esportes e clássicos indies, com preços acessíveis e ativação rápida para você jogar na hora.
      </p>
      <Link to="/produtos" className="btn">
        Ver os jogos
      </Link>
    </section>
  )
}
