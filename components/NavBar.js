import Link from 'next/link';

const NavBar = () => {
    return (
        <nav>
            <div className="navLogo">
                <h1>User List</h1>
            </div>

            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/users"><a>User List</a></Link>
            
        </nav>
    );
};

export default NavBar;