import Head from 'next/head'
import Link from 'next/link';
import styles from '../../styles/User.module.css';

// 10-Jun-2021
// inside the function we fetch the data 
// this function Runs at build time as our app build at component rendered 
// this time we add a fetch request inside it for any data we need for our component template 
// this function never runs in browser 
// only runs at build time 
// so don't run any code here that expect to run in browser. 

// this runs before the component is rendered... 
export const getStaticProps = async () => {

    const url = 'https://jsonplaceholder.typicode.com/users';
    const res = await fetch(url);
    const data = await res.json();

    // Now, How do we use this "array of object" ==> data inside our component?
    return {
        props: { users: data }
        // now this data is available inside our component through props
    }
}


// 10-Jun-2021 
// components are all pre-render by the tome when they reach the browser
// ideally fetch the data --> before they rendered 
// so the rendered components have the data in template 
// & so we do that by a special function that provided by Next.js 
const AllUsers = (props) => {

    const { users } = props;

    //console.log(users);

    // document.title = 'User List';
    // this approach not work here...

    return (

        <>
            <Head>
                <title>All Users</title>
                <meta name="description" content="SEO People Page | Google Robot" />
            </Head>

            <div>
                <h1>All Users...</h1>

                {
                    users?.map(user => {

                        const { id, name } = user;

                        return (
                            <Link href={'/users/' + id} key={id}>
                                <a className={styles.single}>
                                    <h3>{name}</h3>
                                </a>
                            </Link>
                        )
                    })
                }
            </div>
        </>

    );
};

export default AllUsers;