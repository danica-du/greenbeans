import './styles/PassedCriteria.css';
import SmallLogoHeader from '../components/SmallLogoHeader';

function PassedCriteriaScreen() {
    return (
        <div className="pc-container">
            <SmallLogoHeader />
            <div className="pc-maincontent">
                <BigLeaf />
                <div className="pc-text">
                    <div>
                        This is a sustainable item!
                    </div>
                    <div>
                        This product passes our sustainability criteria.
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

export default PassedCriteriaScreen;