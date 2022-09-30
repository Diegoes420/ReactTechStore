import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <NavBar/>
                <ItemListContainer greeting= "Hola Mundo! , se centrar un div ;)"/>
            </header>
        </div>
    )
}

export default App;