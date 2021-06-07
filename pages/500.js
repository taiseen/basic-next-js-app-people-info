import Link from 'next/link';

const ServerNotFound = () => {
    return (
        <div className="not-found">
            <h1>Oooops.....</h1>
            <h2>500 - Server-side error occurred</h2>
            <p>Go to home page <Link href="/"> <a>Home Page</a></Link></p>
        </div>
    );
};

export default ServerNotFound;