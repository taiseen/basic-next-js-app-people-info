import Link from 'next/link';
import Image from 'next/image';
//import user from '../public/users.png';

const NavBar = () => {

    return (
        <nav>
            <div className="logo">
                <h1>User List</h1>
                <Image src="/users.png" width={128} height={70} />
            </div>

            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/users"><a>User List</a></Link>

        </nav>
    );
};

export default NavBar;