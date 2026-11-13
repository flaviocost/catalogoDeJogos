
type contatoProps ={
    nome: String
    email: String
    mensagem: String
}

export default function Contato({nome, email, mensagem}: contatoProps){
    return(
        <>
        <h1 className="nome">{nome}</h1>
        <p className="email">{email}</p>
        <p className="mensagem">{mensagem}</p>
        </>
    )
}    