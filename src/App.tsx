import "./App.css";
import { Logo } from "./components/Logo";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-blue-600">
        Hello World
      </h1>
      <Logo
        size={40}
        color="#ff5733"
        strokeWidth={3}
        className="hover:scale-110 transition-transform"
      />
    </>
  );
}
export default App;
