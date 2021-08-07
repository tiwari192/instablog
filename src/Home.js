//npx json-server --watch data/db.json --port 8000

import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

    return(
        <div className="home">

            {error && <div>{error}</div>}

            {/* Blogs is initially null till it fetches data from db.json so we are doing a conditional check */}
            {isPending && <div>Loading..</div>}
            { blogs && <BlogList blogs = {blogs} title = "All Blogs"/>}
            
        </div>
    )

}

export default Home;