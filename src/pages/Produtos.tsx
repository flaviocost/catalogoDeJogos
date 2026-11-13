import Card from "../components/Card";

export const jogos = [
  { id: 1, titulo: 'Starfall Odyssey', categoria: 'RPG', preco: 129.9,
    imagem: '/starfall.jpg',
    descricao: 'Explore galáxias inteiras' },
  { id: 2, titulo: 'Neon Drift', categoria: 'Corrida', preco: 79.9,
    imagem: '/neondrift.jpg',
    descricao: 'Corridas noturnas em cidades futuristas' },
  { id: 3, titulo: 'Crypt of the NecroDancer', categoria: 'Roguelike', preco: 49.9,
    imagem: '/cryptofnecrodancer.jpg',
    descricao: 'Explore masmorras que mudam a cada partida' },
  { id: 4, titulo: 'Harvest Moon Valley', categoria: 'Simulação', preco: 59.9,
    imagem: '/havestmoon.jpg',
    descricao: 'Plante, crie animais e reconstrua a fazenda' },
  { id: 5, titulo: 'Iron Siege', categoria: 'Estratégia', preco: 99.9,
    imagem: '/ironsiege.jpg',
    descricao: 'Comande exércitos, construa fortalezas e domine o campo de batalha' },
  { id: 6, titulo: 'Pocket Kingdoms', categoria: 'Aventura', preco: 39.9,
    imagem: '/pocketkingdoms.jpg',
    descricao: 'aventurinha' },
];

export default function Produtos() {
  return (
    <>
      {jogos.map((jogo) => (
        <Card
          key={jogo.id}
          title={jogo.titulo}
          image={jogo.imagem}
          description={jogo.descricao}
          preco={jogo.preco}
          categoria={jogo.categoria}
        />
      ))}
    </>
  );
}