import Head from 'next/head';

// How to get id from url?
export const getStaticPaths = async () => {

    const url = 'https://jsonplaceholder.typicode.com/users/';
    const res = await fetch(url);
    const data = await res.json();

    const paths = data.map(user => {
        return {
            params: { id: user.id.toString() }
        }
    })

    return {
        paths,
        fallback: false

    }
}

// its run multiple times... 
export const getStaticProps = async (context) => {

    const id = context.params.id;
    const url = 'https://jsonplaceholder.typicode.com/users/' + id;
    const res = await fetch(url);
    const data = await res.json();

    return {
        props: {
            userInfo: data
        }
    }
}

const Details = ({ userInfo }) => {

    const { name, email, website, address } = userInfo;

    return (

        <>
            <Head>
                <title>User Details</title>
                <meta name="description" content="SEO User Details | Google Robot" />
            </Head>

            <div>
                <h1>{name}</h1>
                <h3>{email}</h3>
                <h3>{website}</h3>
                <h3>{address.city}</h3>
            </div>
        </>
    );
};

export default Details;