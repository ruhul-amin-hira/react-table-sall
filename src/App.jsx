import DateSeclect from "./DateSeclect";
import { ContextProvider } from "./context/Context";

function App() {
  return (
    <ContextProvider>
      <div className="container">
        <DateSeclect />
        <h1>hello</h1>
      </div>
    </ContextProvider>
  );
}

export default App;
