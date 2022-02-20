import './styles/SmallAlternative.css';
import LogoHeader from '../components/LogoHeader.js'
import GeneralButton from '../components/GeneralButton.js';

function SmallAlternativeScreen() {

    return (
        <div className="sa-container">
            <div className="logo-header">
                <LogoHeader isSmall={true}/>
            </div>
            <div className='leaf-block'> {/* this is for the leaf line */}
                <LeafLogo />
                <div className='leaf-text'>
                    <div className='sustainable-text'>SUSTAINABLE ALTERNATIVES FOUND</div>
                    <div> For Abercrombie Hooded Puffer</div>
                </div>
            </div>
            <div className='product-container'> {/* this is for the alt item preview thing*/}
                <div className='sa-imgcontainer'>
                    <img src='https://www.patagonia.com/dw/image/v2/BDJB_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw6673193d/images/hi-res/84212_FGE.jpg?sw=1600&sh=1600&sfrm=png&q=80&bgcolor=f5f5f5&fbclid=IwAR1HfKotkJgN5jHQy10RbLK00eC2Nt492VukbLkFeDwF3rppgFrbppjHCwc' alt='description'>
                    </img>
                </div>
                <div className='text-and-button'>
                    <div className='product-text'>
                        <div>PATAGONIA NANO PUFF</div>
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