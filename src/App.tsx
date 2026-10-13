import './App.css'
import PokemonCard from './components/PokemonCard';

function App() {
  return (
    <div>
      <PokemonCard />
    </div>
  );
}

function SayHello() {
  const message = "Hello !";

  return <p>{message}</p>
}
export default App;