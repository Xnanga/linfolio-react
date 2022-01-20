import "./App.css";
import Desktop from "./UI/Desktop";
import TopBar from "./UI/Menus/TopBar/TopBar";
import VerticalMenu from "./UI/Menus/VerticalMenu/VerticalMenu";

function App() {
  return (
    <div className="App">
      <Desktop>
        <TopBar />
        <VerticalMenu />
      </Desktop>
    </div>
  );
}

export default App;
