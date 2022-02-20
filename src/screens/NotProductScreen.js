import './styles/PassedCriteriaScreen.css';
import LogoHeader from '../components/LogoHeader';

function NotProductScreen() {
    return (
        <div className="pc-container">
            <LogoHeader isSmall={true} />
            <div className="pc-maincontent">
                <SadLeaf />
                <div className="pc-text">
                    <div>
                        Hmm, this doesn’t seem like a product.
                    </div>
                    <div>
                        greenbeans currently only supports products!
                    </div>
                </div>
            </div>
        </div>
    );
}

function SadLeaf() {
    return (
        <svg width="30" height="39" viewBox="0 0 30 39" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9275 0.109812C8.49269 0.687048 5.79282 3.31956 4.95062 6.91269C4.7928 7.58607 4.70533 13.3303 4.84768 13.674C5.00647 14.0575 5.40293 14.1467 5.72344 13.8712L5.93322 13.6908L5.97426 10.4508L6.01531 7.21077L6.21447 6.5649C7.20866 3.34139 10.0817 1.11768 13.2523 1.11768C13.8264 1.11768 14.1155 0.528105 13.7224 0.158781C13.5164 -0.0347024 12.8894 -0.0517486 11.9275 0.109812ZM19.4527 1.37792C18.4538 1.55915 17.4845 1.9577 16.5772 2.56021L16.1564 2.83967L15.7922 2.68341C12.6055 1.31632 8.6642 3.02343 7.42868 6.30593L7.39308 6.40006C7.34917 6.51583 7.31039 6.6181 7.27613 6.72185C7.01692 7.50701 7.01695 8.37776 7.01725 15.8374V15.8375L7.01727 16.6356V25.4153H4.2842C1.11871 25.4153 1.01411 25.4296 0.512986 25.933C-0.323076 26.7727 -0.108733 28.0747 0.948549 28.5794L1.28954 28.7422L1.97495 32.5924C2.35198 34.71 2.7207 36.7774 2.79442 37.1865C2.89527 37.7464 2.97093 37.9729 3.10042 38.1023L3.27237 38.2743H7.6037C11.6783 38.2743 11.9449 38.2662 12.1027 38.1385C12.2552 38.015 12.3372 37.602 13.0043 33.5967C13.408 31.1734 13.7583 29.0812 13.7829 28.9473C13.8181 28.7554 13.8862 28.6794 14.1044 28.5883C15.5469 27.9857 15.3661 25.8384 13.8431 25.4848C13.6868 25.4485 12.3387 25.418 10.8473 25.4171L8.13578 25.4153L8.15589 16.4625L8.17608 7.50982L8.39528 6.88174C9.30969 4.26216 12.1762 2.73321 14.7281 3.50393L15.2991 3.6764L14.968 4.14987C13.1208 6.7924 13.2582 10.0958 15.3388 13.059C16.2806 14.4005 19.14 17.0169 20.1754 17.4848C22.2828 18.4371 23.4504 15.56 22.8248 10.9566L22.775 10.5906L23.1012 10.645C23.2807 10.6749 23.7303 10.7489 24.1003 10.8094C28.721 11.5652 31.0671 10.2409 29.5307 7.74427C26.6299 3.03068 22.9959 0.735046 19.4527 1.37792ZM8.91659 15.8535C8.77507 16.0099 8.64334 23.8985 8.77342 24.4266C8.93259 25.0726 9.77478 25.0153 9.89552 24.3502C10.0248 23.638 9.89702 16.0125 9.75318 15.8535C9.55954 15.6396 9.11022 15.6396 8.91659 15.8535ZM25.0223 26.4141C24.8483 24.9986 25.7007 22.718 27.3226 20.2596C27.4168 20.1168 27.4972 20 27.5012 20C27.5617 20 28.565 21.6876 28.8802 22.3195C30.1905 24.9465 30.3427 26.6717 29.3799 27.9831C27.9712 29.9018 25.3342 28.9524 25.0223 26.4141Z" fill="#3F3F3F"/>
        </svg> 
    );
}

export default NotProductScreen;