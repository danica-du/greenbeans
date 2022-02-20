/*global chrome*/
import './styles/NotificationScreen.css';
import LogoHeader from '../components/LogoHeader';
import {useEffect, useState} from "react";
import axios from "axios";
import series from 'async/series';

function NotificationScreen() {
  const [url, setURL] = useState('');
  const [websiteName, setWebsiteName] = useState('');
  const [altURL, setaltURL] = useState('');
  const [altimageURL, setaltImageURL] = useState(''); 
  const [altName, setaltName] = useState('');
  

  async function getWebsiteInfo(productURL) {
    console.log("hi")
    console.log(productURL)
    const response = await axios.get("https://greenbeans.bubbleapps.io/version-test/api/1.1/obj/Product")
    const productList = response.data.response.results
    const filteredList = productList.filter(product => product.WebsiteURL === productURL)
    if(filteredList.length > 0) {
      const product = filteredList[0]
      setWebsiteName(product.ProductName)
    }else{
      setWebsiteName("No website found")
    }
  }

  async function getAlternatives(productURL){
    const response = await axios.get("https://greenbeans.bubbleapps.io/version-test/api/1.1/obj/Product")
    const productList = response.data.response.results
    const filteredList = productList.filter(product => product.WebsiteURL === productURL)
    const product = filteredList[0]
    const alternatives = product["AlternativeProducts"]
    //console.log(alternatives)
    for(const id of alternatives) {
      const alt = await axios.get("https://greenbeans.bubbleapps.io/version-test/api/1.1/obj/AlternativeProduct/" + id)
      // console.log("asdf")
      // console.log(alt.data)
      // console.log(alt.data.response.url)
      // console.log(alt.data.response.name)
      setaltURL(alt.data.response.WebsiteURL)
      setaltImageURL(alt.data.response.PhotoURL)
      setaltName(alt.data.response.ProductName)
      break
    }
  }

  // series([getWebsiteInfo, ])

  // async function startingInfo() {
    
  // }

  useEffect(() => {
    const startingInfo = async() => { await chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
      setURL(tabs[0].url);
      // setWebsiteName(url)
      //console.log(tabs[0].url)
    })}
    startingInfo();

  }, [])

  useEffect(() => {
    if(url === '') {
      return
    }
    console.log("here")
    console.log(url)
    getWebsiteInfo(url)
  }, [url])

  useEffect(() => {
    getAlternatives(url)
  }, [url]) 

  //console.log(url)
    return (
        <div className="pc-container">
            <LogoHeader isSmall={true} />
            <div className="pc-maincontent">
                <BigLeaf />
                <div className="pc-text">
                    <div>
                        SUSTAINABLE ALTERNATIVES FOUND
                    </div>
                    <div>
                        For {websiteName} {altURL} <br></br> {altimageURL} <br></br> {altName}
                    </div>
                </div>
            </div>
        </div>
    );
  }

function BigLeaf() {
  return (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.61276 9.11568C1.66705 12.0629 0.00846594 16.0576 3.23197e-05 20.2253C-0.0084013 24.393 1.634 28.3943 4.56776 31.3534C7.87523 23.7008 13.7702 17.3085 21.1276 13.5047C14.7772 18.88 10.4904 26.295 9.00022 34.482C14.8502 37.2505 22.0501 36.2376 26.8876 31.3984C34.7175 23.5657 36 0 36 0C36 0 12.4427 1.28295 4.61276 9.11568Z" fill="#3F3F3F"/>
      </svg>
  );
}

export default NotificationScreen;  