import React, {useEffect , useState} from 'react';

function Card (props){
    const [detail , setDetail] = useState([]);

    return  (
        <div className="flex flex-auto  w-[250px] m-4 bg-blue-800 h-[450] overflow-hidden h-auto rounded shadow">
            {props.movieDetail.Title}
        </div>

    );
}

export default Card;