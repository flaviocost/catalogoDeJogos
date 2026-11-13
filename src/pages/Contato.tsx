import { useState } from 'react'
import type { FormEvent } from 'react'
import Button from '../components/Button'

export default function Contato() {
  const [enviado, setEnviado] = useState(false)

  function aoEnviar(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault()
    setEnviado(true)
  }

  return (
    <section className="texto">
      <h1>Contato</h1>
      <form className="form" onSubmit={aoEnviar}>
        <label htmlFor="nome">Nome</label>
        <input id="nome" name="nome" type="text" placeholder="Seu nome" required />

        <label htmlFor="email">E-mail</label>
        <input id="email" name="email" type="email" placeholder="voce@email.com" required />

        <label htmlFor="mensagem">Mensagem</label>
        <textarea id="mensagem" name="mensagem" rows={5} placeholder="Escreva sua mensagem" required />

        <Button texto="Enviar mensagem" tipo="submit" />
        {enviado && <p className="aviso">Mensagem enviada! (formulário apenas visual)</p>}
      </form>
    </section>
  )
}
