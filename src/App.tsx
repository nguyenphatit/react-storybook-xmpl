import "./App.css";
import { Header } from "./components/Header";

function App() {

  const onLogin = () => {}

  const onLogout = () => {}

  const onCreateAccount = () => {}

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl">Vite + React</h1>
      <div className="py-5">
        <Header onLogin={onLogin} onLogout={onLogout} onCreateAccount={onCreateAccount} />
      </div>
    </div>
  );
}

export default App;
