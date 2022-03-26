import './App.css';
import Header from './components/Header/Header'
import Products from './components/Products/Products';
import Questions from './components/Questions/Questions';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Products></Products>
      <Questions></Questions>
    </div>
  );
}

export default App;
