import Dashboard from "./Dashboard";
import DateSeclect from "./DateSeclect";
import { ContextProvider } from "./context/Context";

function App() {
  return (
    <ContextProvider>
      <div className="container">
        <DateSeclect />
        <Dashboard />
      </div>
    </ContextProvider>
  );
}

export default App;
