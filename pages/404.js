import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {

    const router = useRouter();

    // redirect user from this page to Home page after landing 3 second.
    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000);
    }, [router]);

    return (
        <div className="not-found">
            <h1>Oooops.....</h1>
            <h2>This page cannot be found</h2>
            <p>Go to home page <Link href="/"><a>Home Page</a></Link></p>
        </div>
    );
};

export default NotFound;