/*global chrome*/
import logo from './logo.svg';
import {useEffect, useState} from "react";
import axios from "axios";
import MultipleAlternativesScreen from './screens/MultipleAlternativesScreen'
import NotProductScreen from './screens/NotProductScreen'
import PassedCriteriaScreen from './screens/PassedCriteriaScreen';
import NotificationScreen from './screens/NotificationScreen';


function App() {
  const [url, setURL] = useState('');
  const [isProduct, setisProduct] = useState(false);
  const [isAlternative, setisAlternative] = useState(false);
  const [page, setPage] = useState(<NotProductScreen/>);

  async function checkProduct(productURL) {
    const response = await axios.get("https://greenbeans.bubbleapps.io/version-test/api/1.1/obj/Product")
    const productList = response.data.response.results
    const tempList = productList.filter(product => product.WebsiteURL === productURL)
    if(tempList.length > 0) {
      setisProduct(true)
    }
  }

  async function checkAlternative(productURL) {
    const response = await axios.get("https://greenbeans.bubbleapps.io/version-test/api/1.1/obj/AlternativeProduct")
    const productList = response.data.response.results
    const tempList = productList.filter(product => product.WebsiteURL === productURL)
    if(tempList.length > 0) {
      setisAlternative(true)
    }
  }

  async function changeScreen() {
    if(isProduct) {
      setPage(<NotificationScreen/>)
    }else if(isAlternative) {
      setPage(<PassedCriteriaScreen/>)
    }else {
      setPage(<NotProductScreen/>)
    }
  }


  useEffect(() => {
    const startingInfo = async() => { await chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
      setURL(tabs[0].url);
    })}
    startingInfo();
  }, [])

  useEffect(() => {
    if(url === '') {
      return
    }
    console.log("here")
    console.log(url)
    checkProduct(url)
    checkAlternative(url)
  }, [url])

  useEffect(() => {
    if(!isProduct && !isAlternative) {
      return
    }
    changeScreen()
  }, [isProduct, isAlternative])

  console.log(isAlternative)
  console.log(isProduct)
  return (
    <div>
      {page}
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
