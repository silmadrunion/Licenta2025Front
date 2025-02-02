import React, { useState, useEffect } from "react";
import RowTablecommon from "../../../shared/Table/RowTablecommon"
import ProposeTrade from "../../../features/propose-trade/ProposeTrade"
import ViewGame from "../../../features/view-game/ViewGame"


export default function RowTableHomePage(props){

    let rowData = props.rowData

    return(
        <div className="flex row_table px-8 py-8" >
            <RowTablecommon rowData={rowData}/>
            <ProposeTrade />
            <ViewGame />
        </div>
    )
}