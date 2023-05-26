import { useEffect } from "react";
import { useState } from "react";

function useGetData(url,defaultValue) {
    const [data, setData] = useState(defaultValue);

    useEffect(()=>{
        fetchData(setData,url);
    },[])
    return [data,setData];
}

async function fetchData(setData,url) {
    
    const options = {
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': '488f437511msh2d3854838388c55p13692cjsn135921cfebdf',
		'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
	}
    };

    try {
	const response = await fetch(url, options);
	const result = await response.json();
	setData(result.data);
    } catch (error) {
	console.error(error);
    }
}

export default useGetData;