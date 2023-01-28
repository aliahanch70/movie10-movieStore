import Detail from "../../components/Detail";
import Navbar from "../../components/Navbar";

const Post = ({data}) => {

    console.log(data);
    return( <>
            <Navbar/>
            <div className="items-center flex flex-col sm:flex">

                <Detail
                    movieDetail={data}
                />

            </div>
    </>
    )
}
export async function getServerSideProps(x) {
    const options = {
        method: 'GET'
    };

    const { ttid } = x.query
    const res = await fetch('https://www.omdbapi.com/?i=' + ttid+"&apikey=221cf49a",options)
    const data = await res.json()
    console.log("1")

    return { props: { data } }
}

export default Post;