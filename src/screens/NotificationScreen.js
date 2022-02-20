/*global chrome*/
import './styles/SmallAlternative.css';
import LogoHeader from '../components/LogoHeader.js'
import GeneralButton from '../components/GeneralButton.js';
import {useEffect, useState} from "react";
import axios from "axios";

function SmallAlternativeScreen() {
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

    return (
        <div className="sa-container">
            <div className="logo-header">
                <LogoHeader isSmall={true}/>
            </div>
            <div className='leaf-block'>
                <LeafLogo />
                <div className='leaf-text'>
                    <div className='sustainable-text'>SUSTAINABLE ALTERNATIVES FOUND</div>
                    <div>For {websiteName}</div>
                </div>
            </div>
            <div className='product-container'>
                <div className='sa-imgcontainer'>
                    <img src={altimageURL} alt='description'>
                    </img>
                </div>
                <div className='text-and-button'>
                    <div className='product-text'>
                        <div>{altName}</div>
                    </div>
                    <div className='button'>
                        <GeneralButton text={"View More Items"} height={"36px"} width={"141px"}/>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

function LeafLogo() {
    return(
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.07517 6.07712C1.11136 8.04196 0.00564396 10.705 2.15465e-05 13.4835C-0.00560087 16.262 1.08933 18.9295 3.04517 20.9023C5.25016 15.8005 9.18012 11.539 14.0851 9.00314C9.85147 12.5866 6.99362 17.53 6.00015 22.988C9.90012 24.8337 14.7001 24.1584 17.9251 20.9323C23.145 15.7105 24 0 24 0C24 0 8.29513 0.855298 3.07517 6.07712Z" fill="#3F3F3F"/>
            </svg>
    );
}

export default SmallAlternativeScreen;