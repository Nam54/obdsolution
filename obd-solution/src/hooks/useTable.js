import React from "react";
import { useEffect, useState } from "react";


// Calculate the number of rows
const calculateRange=(data, rowPerPage)=>{
    const range =[];
    const rows = Math.ceil(data.length/rowPerPage);

    for(let i=1;i<=rows;i++){
        range.push(i);
    }
    return range;
}

// Slice data 
const sliceData=(data, page, rowPerPage)=>{
    return data.slice((page-1)*rowPerPage,page*rowPerPage);
}

const useTable=(data, page, rowPerPage)=>{
    const [tableRange, setTableRange]=useState([]);
    const [slice, setSlice]= useState([]);

    useEffect(()=>{

        const range = calculateRange(data, rowPerPage);
        setTableRange([...range]);

        const slice = sliceData(data, page, rowPerPage);
        setSlice([...slice]);
    }, [data, setTableRange,page, setSlice]);

    return{slice, range: tableRange};
};

export default useTable;