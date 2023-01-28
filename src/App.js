import logo from './logo.svg';
import './App.scss';
import Layout from './conpoments/layout';

function App() {
  if (document.addEventListener) {
    document.addEventListener('contextmenu', function(e) {
      e.preventDefault();
    }, false);
  } else {
    document.attachEvent('oncontextmenu', function() {
      window.event.returnValue = false;
    });
  }
  
  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
