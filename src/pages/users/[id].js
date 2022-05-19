import Head from 'next/head';
import Link from 'next/link';
import apiCalling from '../../constants/apiCalling';
import styles from '../../styles/Home.module.css';


const Details = ({ userInfo }) => {

    const { name, email, website, address } = userInfo;

    return (

        <>
            <Head>
                <title>User Details</title>
                <meta name="description" content="SEO User Details | Google Robot" />
            </Head>

            <div>
                <h1>Name : {name}</h1>
                <h3>Email : {email}</h3>
                <h3>Website : {website}</h3>
                <h3>Address : {address?.city}</h3>
            </div>
            <div className={styles.btnBox}>
                <Link href="/users"><a className={styles.btn}>Back to list</a></Link>
                <Link href="/"><a className={styles.btn}>Back to Home</a></Link>
            </div>
        </>
    );
};

export default Details;



// its run multiple times... 
export const getStaticProps = async (context) => {

    const id = context.params.id;
    
    const data = await apiCalling(id);

    return {
        props: {
            userInfo: data
        }
    }
}


// How to get id from url?
export const getStaticPaths = async () => {

    const data = await apiCalling();

    const paths = data.map(user => ({ params: { id: user.id.toString() } }));

    return {
        paths,
        fallback: false
    }
}