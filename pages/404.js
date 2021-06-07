import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>Oooops.....</h1>
            <h2>This page cannot be found</h2>
            <p>Go to home page <Link href="/"><a>Home Page</a></Link></p>
        </div>
    );
};

export default NotFound;