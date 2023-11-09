import MainContainer from "./components/MainContainer";
import Headers from "./components/Header";

function App() {
  // const [theme, setTheme] = useState('light');

  return (
    <div>
      <div className="flex flex-col w-screen h-screen bg-slate-50 text-black" style={{backgroundImage: 'linear-gradient(336deg, red, transparent)'}}>
        <Headers/>
        <MainContainer />
      </div>
    </div>
  );
}

export default App;
