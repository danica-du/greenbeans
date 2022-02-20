import './styles/ProductCard.css';
import GeneralButton from './GeneralButton';

function ProductCard(props) {
    console.log(props.url)
    function handleProductClick() {
        console.log("product card's handle clikc")
        window.open(props.url, "_blank");
    }

    return (
        <div>
        {props.isCurrentItem ?
            (        
            <div className="productcard-container">
                <div className="productname current-productname">
                    {props.name}
                </div>
                <div className="price-container">
                    <PriceTagLogo />
                    <span>${props.price}</span>
                </div>
                <div className="current-image-container">
                    <img src={props.image}
                        alt="product display">
                    </img>
                </div>
            </div>
            )
            :
            (        
                <div className="productcard-container">
                    <div className="productname alt-productname">
                        {props.name}
                    </div>
                    <div className="price-container">
                        <PriceTagLogo />
                        <span>${props.price}</span>
                    </div>
                    <div className="image-container">
                        <img src={props.image}
                            alt="product display">
                        </img>
                    </div>
                    <GeneralButton text={"View Item"} height={"36px"} width={"137px"} 
                                   handleClick={handleProductClick}/>
                </div>
        )}
        </div>
    );
}

function PriceTagLogo() {
    return (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.8">
            <path d="M1.23046 1.23594C1.34382 1.12127 1.47886 1.0303 1.62772 0.968338C1.77658 0.906371 1.93629 0.874643 2.09753 0.875003H5.4589C5.67939 0.875414 5.89083 0.962761 6.04733 1.11809L12.7671 7.83645C12.9963 8.06621 13.1251 8.37756 13.1251 8.70216C13.1251 9.02676 12.9963 9.3381 12.7671 9.56786L9.56784 12.7671C9.33802 12.9965 9.02657 13.1253 8.70186 13.1253C8.37715 13.1253 8.06571 12.9965 7.83589 12.7671L1.1189 6.05145C0.96326 5.8952 0.875603 5.68382 0.87499 5.46329V2.1C0.873996 1.9396 0.90491 1.78061 0.965936 1.63227C1.02696 1.48393 1.11688 1.34921 1.23046 1.23594ZM3.49999 4.375C3.67305 4.375 3.84222 4.32369 3.98611 4.22754C4.13001 4.13139 4.24216 3.99474 4.30838 3.83485C4.37461 3.67497 4.39194 3.49903 4.35818 3.3293C4.32441 3.15957 4.24108 3.00366 4.11871 2.88129C3.99634 2.75891 3.84043 2.67558 3.67069 2.64182C3.50096 2.60805 3.32503 2.62538 3.16514 2.69161C3.00526 2.75784 2.8686 2.86999 2.77245 3.01388C2.67631 3.15777 2.62499 3.32695 2.62499 3.5C2.62499 3.73207 2.71718 3.95463 2.88127 4.11872C3.04537 4.28282 3.26793 4.375 3.49999 4.375Z" fill="#747474"/>
            </g>
        </svg>
    );
}

export default ProductCard;