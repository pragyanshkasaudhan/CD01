import './App.css';
import Card from './card';
import Header from './header';

function App() {
  return (
    <><div className='header'><Header /></div>
    <div className='card-wrapper'>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
    </>
  );
}

export default App;
