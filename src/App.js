import logo from "./logo.svg";
import "./App.css";
import { Header, Home, About, Skills } from "./components/index";
import { headersArray, homeData, aboutData } from "./constants";
function App() {
  return (
    <div className="App">
      <div className="bg-neutral-200 p-8 h-20 flex items-center justify-end">
        <Header headersArray={headersArray} />
      </div>
      <div className="mt-10">
        <Home homeData={homeData} />
      </div>
      <div className="mt-10">
        <About aboutData={aboutData} />
      </div>
      <div>
      <Skills className="mt-10"/>
      </div>
    </div>
  );
}

export default App;
