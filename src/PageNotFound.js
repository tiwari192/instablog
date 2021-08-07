import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className="page-not-found">
            <h2 style = {{ marginBottom: "20px"}}>404 Page Not Found!</h2>
            <Link to='/'>Back to Home Page</Link>
        </div>
    );
}
 
export default PageNotFound;