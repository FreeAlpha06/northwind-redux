import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import 'bootstrap';


function App() {
  return (
    <div className="container mt-5">
      <Navi />
      <Dashboard />
    </div>
  );
}

export default App;
