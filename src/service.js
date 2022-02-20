import {useEffect, useState} from "react";
import axios from "axios";

 
 function Service(){
 

 //const response = axios.get("https://greenbeans.bubbleapps.io/version-test/api/1.1/obj/Product").then(r => r.data)
 console.log("hello");
 // console.log(response);

 const [post, setPost] = useState(null);
 const [altList, setaltList] = useState([]);
 //const alk = await axios.get("https://greenbeans.bubbleapps.io/version-test/api/1.1/obj/Product")
 const [isLocal, setLocal] = useState(false);

 // useEffect(() => {
 //   axios.get("https://greenbeans.bubbleapps.io/version-test/api/1.1/obj/Product").then((response) => {
 //     setPost(response.data.response.results[0].ProductName);
 //     console.log(post)
 //   });
 // }, []);
 //console.log(response)


 function getAlternatives(count, productURL) {
   const alternativeList = [];
   axios.get("https://greenbeans.bubbleapps.io/version-test/api/1.1/obj/Product").then((response) => {
     const productList = response.data.response.results
     const filteredList = productList.filter(product => product.WebsiteURL === productURL)
     const product = filteredList[0]
     const alternatives = product["AlternativeProducts"]
     //console.log(alternatives)
     for(const id of alternatives) {
       axios.get("https://greenbeans.bubbleapps.io/version-test/api/1.1/obj/AlternativeProduct/" + id).then((response) => {
         alternativeList.push(response.data.response)
       })
     }
     console.log(alternativeList)
   });
   setaltList(alternativeList.slice(0, count));
 }

 function isAlternativeProduct(productURL){
   //var productList = []
   const filteredList = []
   axios.get("https://greenbeans.bubbleapps.io/version-test/api/1.1/obj/AlternativeProduct").then((response) => {
     const productList = response.data.response.results
     const tempList = productList.filter(product => product.WebsiteURL === productURL)
     if(tempList.length > 0) {
       setLocal(true)
       filteredList.push(tempList[0])
       console.log("pushed")
     }
     console.log('get')
     console.log(filteredList)
     
   }).finally(() => {
     console.log("final")
     return isLocal ? true : false
   });
   // if(isLocal) {
   //   setLocal(false)
   //   return true
   // }
   // return isLocal
   // console.log("hi")
   // console.log(filteredList[0])
   // console.log(filteredList.length)
   // return filteredList.length > 0 ? true : false
   // if(filteredList.length >= 1) {
   //   return true
   // }else{
   //   return false;
   // }
 }
 useEffect(() => {
   getAlternatives(2, "https://www.amazon.com/Pantene-Shampoo-Sulfate-Conditioner-Moisture/dp/B01LZG17UO")
   console.log("flag")
   //console.log(alts)
   //const first = isAlternativeProduct("https://www.amazon.com/Pantene-Shampoo-Sulfate-Conditioner-Moisture/dp/B01LZG17UO")
   //console.log(first)
   isAlternativeProduct("https://www.thedetoxmarket.com/products/copy-of-herbal-citrus-peppermint-toothpaste?variant=31942041206859")
   console.log("second")
 }, [])

 useEffect(() => {
   console.log("islocal")
   console.log(isLocal)
 }, [isLocal]);

 useEffect(() => {
   console.log("altlist")
   console.log(altList)
 }, [altList]);

}