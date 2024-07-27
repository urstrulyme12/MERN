import React,{useEffect, useState} from "react";

export default function Myapp(){

    const [data,setData] = useState('');

    // const handleApi = ()=>{
    //     const res = fetch('https://fakestoreapi.com/products')
    //                 .then(response=>response.json())
    //                 .then(data=>console.log(data))
    //         // console.log(res.data);
    //         // setData(res.data);

    // }
    useEffect(()=>{
        const res = fetch('https://fakestoreapi.com/products')
        .then(response=>response.json())
        .then(data=>console.log(data))
    },[])

    return(
        <>
                {/* <div>Display api data</div>
                <p onClick={handleApi}>{data}</p> */}
                <form>
                    <input></input>
                </form>
        </>
    )

};