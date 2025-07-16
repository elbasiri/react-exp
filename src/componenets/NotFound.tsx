import { Link } from 'react-router-dom';

export function NotFound() {
    return (<>
        <h2>Nothing to be found here</h2>
        <Link to='/'>Home page</Link>
    </>)
}