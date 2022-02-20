import './styles/MultipleAlternativesScreen.css';
import LogoHeader from '../components/LogoHeader';
import GeneralButton from '../components/GeneralButton';
import { useState } from 'react';

import ProductCard from '../components/ProductCard';
import productimage from './productimage.png';
import productimage2 from './productimage2.png';
import productimage3 from './productimage3.png';

function MultipleAlternativesScreen() {
    const [altItemsList, setAltItemsList] = useState([]);

    const currentItemName = "PrimaLoft Lightweight Hooded Puffer"
    // const currentItem={
    //     name: "fwee",
    //     price: 160,
    // }

    return (
        <div className="ma-container">
            <FullHeader />
            <div className="ma-content">
                <div className="currentitem-container">
                    <div className="currentitem-label">
                        CURRENT ITEM
                    </div>
                    <ProductCard isCurrentItem={true} name={currentItemName}
                                price={"160"} image={productimage}/>
                </div>

                <div className="altitems-container">
                    <div className="altitems-label">
                        <div className="small-leaf-container">
                            <SmallLeaf />
                        </div>
                        <span>Items related to {currentItemName}</span>
                    </div>
                    <div className="altitems-slideshow">
                        <ProductCard isCurrentItem={false} name={"Patagonia Nano PuffPatagonia Nano Puff"}
                                     price={"160"} image={productimage2} url={"https://www.patagonia.com/product/mens-nano-puff-jacket/84212.html"}/>
                        <ProductCard isCurrentItem={false} name={"Arc'teryx Atom LT"}
                                     price={"160"} image={productimage3} url={"https://arcteryx.com/us/en/shop/mens/atom-lt-hoody"}/>
                        {/* <Dots /> */}
                    </div>
                </div>
                <div className="right-btn-container">
                    <RightButton />
                </div>
            </div>
        </div>
    );
}

function FullHeader() {
    return (
        <div className="full-header">
            <LogoHeader isSmall={false}/>
            <div className="full-header-content">
                <span>Your Sustainable Alternatives</span>
                <GeneralButton text={"How we pick our products"} height={"40px"} width={"184px"}/>
            </div>
        </div>
    );
}

function SmallLeaf() {
    return (
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.40945 2.78535C0.509375 3.6859 0.00258682 4.90648 9.87546e-06 6.17994C-0.00256707 7.4534 0.499277 8.67602 1.3957 9.58021C2.40632 7.2419 4.20756 5.28872 6.45566 4.12644C4.51526 5.76888 3.20541 8.03457 2.75007 10.5362C4.53755 11.3821 6.73754 11.0726 8.21565 9.59397C10.6081 7.20063 11 0 11 0C11 0 3.80193 0.392012 1.40945 2.78535Z" fill="#3F3F3F"/>
        </svg>
    )
}

function RightButton() {
    return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" fill="#42AF86"/>
            <path d="M18.17 13C18.3194 12.9995 18.467 13.0325 18.6019 13.0965C18.7369 13.1606 18.8558 13.254 18.95 13.37L23.78 19.37C23.927 19.549 24.0074 19.7734 24.0074 20.005C24.0074 20.2367 23.927 20.4611 23.78 20.64L18.78 26.64C18.6102 26.8442 18.3663 26.9727 18.1019 26.997C17.8375 27.0214 17.5742 26.9398 17.37 26.77C17.1657 26.6003 17.0373 26.3564 17.0129 26.092C16.9886 25.8275 17.0702 25.5642 17.24 25.36L21.71 20L17.39 14.64C17.2677 14.4932 17.19 14.3145 17.1661 14.125C17.1422 13.9354 17.1732 13.743 17.2552 13.5705C17.3373 13.3979 17.467 13.2525 17.6291 13.1514C17.7913 13.0503 17.9789 12.9978 18.17 13Z" fill="white"/>
        </svg>
    );
}

export default MultipleAlternativesScreen;