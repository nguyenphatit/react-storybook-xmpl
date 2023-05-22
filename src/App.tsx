import "./App.css";
import { TextField } from "./components/TextField";

function App() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl">Vite + React</h1>
      <div className="w-[300px]">
        <TextField placeholder="Text Input" label="Text Input" value="Hello world!" />
      </div>
    </div>
  );
}

export default App;
