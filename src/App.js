import "./App.css";
import { Header, Home, About, Skills, Education, Contact } from "./components/index";
import { headersArray, homeData, aboutData, educationData } from "./constants";
function App() {
  return (
    <div className="App">
      <div className="bg-neutral-200 p-8 h-20 flex items-center justify-end sticky" style={{ top:0, right:0,width:'99.2vw'}}>
        <Header headersArray={headersArray} />
      </div>
      <div className="mt-10">
        <Home homeData={homeData} />
      </div>
      <div className="mt-10">
        <About aboutData={aboutData} />
      </div>
      <div className="mt-10">
      <Education educationData = {educationData}/>
      </div>
      <div className="mt-20">
      <Skills />
      </div>
      <div className="mt-20">
      <Contact educationData = {educationData} />
      </div>
    </div>
  );
}

export default App;
