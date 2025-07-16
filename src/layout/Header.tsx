import { Link } from 'react-router-dom';

export function Header() {
    return (<header className='bg-red-500'>
        <Link to='/'>Home page</Link>
        <Link to='/list-exp'>List hotels</Link>
    </header>)
}