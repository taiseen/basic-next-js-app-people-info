// How to get id from url?
export const getStaticPaths = async () => {

    const url = 'https://jsonplaceholder.typicode.com/users/' + id;
    const res = await fetch(url);
    const data = await res.json();

    const paths = data.map(user => {
        return {
            params: { id: user.id.toString() }
        }
    })

    return {
        props: {
            paths,
            fallback: false
        }
    }
}

const Details = () => {

    return (
        <div>
            <h1>Details Page</h1>
        </div>
    );
};

export default Details;