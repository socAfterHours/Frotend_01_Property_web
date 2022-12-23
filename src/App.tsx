import "./App.css";
import Body from "./components/Body/Body";
import ContentTable from "./components/ContentTable/ContentTable";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Body>
        <Navbar />
        <Hero />
        {/* <ContentTable/> */}
      </Body>
    </div>
  );
}

export default App;
