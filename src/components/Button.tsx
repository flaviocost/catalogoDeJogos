type ButtonProps = {
  texto: string
  tipo?: 'button' | 'submit'
  onClick?: () => void
}

export default function Button({ texto, tipo = 'button', onClick }: ButtonProps) {
  return (
    <button className="btn" type={tipo} onClick={onClick}>
      {texto}
    </button>
  )
}