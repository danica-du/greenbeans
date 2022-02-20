import logo from './logo.svg';
import './App.css';
import NotificationScreen from './screens/NotificationScreen';

function App() {

  let pageInView;

  wrgwar
  pageInView = <screens/>
  
  return (
    <div>
      <NotificationScreen onSetViewMore={setViewMore} />
      {pageInView}
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     {/* <img src={logo} className="App-logo" alt="logo" /> */}
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
