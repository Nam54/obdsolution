import React from "react";
const DateContext=React.createContext({
    value:{
        startDate: new Date(),
    endDate: new Date().setMonth(11),
    }
})