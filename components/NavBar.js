import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router'

const NavBar = () => {

    const router = useRouter();

    const handleClick = () => {
        router.push('/');
    }

    return (
        <nav>
            <div className="logo" onClick={handleClick}>
                <h1>User List</h1>
                <Image src="/users.png" width={128} height={70} alt="UserLogo" />
            </div>

            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/users"><a>User List</a></Link>
        </nav>
    );
};

export default NavBar;