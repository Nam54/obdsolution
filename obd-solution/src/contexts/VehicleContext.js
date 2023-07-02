import React from "react";

const IdContext=React.createContext({
    veh: {
        id:'',
        name:'',
        datecf:'',
        data:[]
    },
    setVeh:()=>{}
});
export default IdContext;