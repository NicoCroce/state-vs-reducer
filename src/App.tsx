import "./App.css";
import { ContextStateProvider } from "./context/state/StateContext";
import Card from "./components/Card/Card";
import { StoreReducerContextProvider } from "./context/store/StoreReducerContext";
import CardStore from "./components/Card/CardStore";
import Header from "./components/Header/Header";
import RenderStore from "./components/RenderData/RenderStore";
import RenderState from "./components/RenderData/RenderState";

/**
 * The entire application is wrapped with two providers. ContextStateProvider & StoreReducerContextProvider
 * Now, can access to Global State and Store.
 */

function App() {
  return (
    <>
      <ContextStateProvider>
        <StoreReducerContextProvider>
          <Header />
          <main>
            <section>
              <h2>Using State</h2>
              <div>
                <Card />
                <RenderState />
              </div>
            </section>
            <hr />
            <section>
              <h2>Using reducer</h2>
              <div>
                <CardStore />
                <RenderStore />
              </div>
            </section>
          </main>
        </StoreReducerContextProvider>
      </ContextStateProvider>
    </>
  );
}

export default App;
