import Button from './Button'

type CardProps = {
  title: string
  image: string
  description: string
  preco: number
  categoria: string
  onAdicionar?: () => void
}

export default function Card({
  title,
  image,
  description,
  preco,
  categoria,
  onAdicionar,
}: CardProps) {
  return (
    <article className="card">
      <img className="card-img" src={image} alt={`Capa do jogo ${title}`} loading="lazy" />
      <div className="card-body">
        <span className="card-tag">{categoria}</span>
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <div className="card-footer">
          <strong className="card-price">
            {preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </strong>
          <Button texto="Adicionar" onClick={onAdicionar} />
        </div>
      </div>
    </article>
  )
}
