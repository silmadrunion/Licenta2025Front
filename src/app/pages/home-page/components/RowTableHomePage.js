import React, { useState, useEffect } from "react";
import RoweTablecommon from "../../../shared/RoweTablecommon"

export default function RowTableHomePage(props){

    let rowData = props.rowData



    return(
        <div>RowTableHomePage
        
        <RoweTablecommon rowData={rowData}/>
        </div>
    )
}