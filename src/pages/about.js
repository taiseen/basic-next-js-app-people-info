import Head from 'next/head';
import Link from 'next/link';

const About = () => {

    // document.title = 'About';
    // this approach not work here... 

    return (
        <>
        <Head>
            <title>About</title>
            <meta name="keywords" content="SEO About Page | Google Bots"/>
        </Head>

        <div>
            <h1>About </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error harum, sunt voluptates, voluptate asperiores modi velit magnam, rem laudantium quis tenetur illum! Voluptas, quibusdam facilis atque velit impedit nulla tempora laudantium est. Praesentium maxime iusto omnis dicta harum saepe fugiat.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error harum, sunt voluptates, voluptate asperiores modi velit magnam, rem laudantium quis tenetur illum! Voluptas, quibusdam facilis atque velit impedit nulla tempora laudantium est. Praesentium maxime iusto omnis dicta harum saepe fugiat.</p>

            <Link href="/"><a>Back to home.</a></Link>
        </div>
        </>
    );
};

export default About;