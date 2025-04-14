export default function RowTablecommon(props){

    let rowData = props.rowData

    if(rowData.gameDetails !== undefined){
        return(
            <div className=" flex grow justify-start">
                <img  style={{width:" 6rem"}} className='px-4 h-32  border-2 border-[#B1EDE8]'></img>
            
                <div className="flex px-4">
                    <div className="flex pl-4 flex-col">
                        <h4 className="font-bold">{rowData.gameName}</h4>
                        <p>{rowData.gameDetails.gameDescription}</p>
                    </div>
                    <div className="flex flex-row pl-4">
                        <div className="flex flex-col pl-4">
                            <div className="pl-2">
                                <p className="font-bold">Players</p>
                                <p className="text-left">{rowData.gameDetails.gamePlayerNo}</p>
                            </div>
                            <div className="pl-2">
                                <p className="font-bold">Recommended Age</p>
                                <p className="text-left">{rowData.gameDetails.gameReccommandedAge}</p>
                            </div>
                        </div>
                        <div className="flex flex-col pl-4">
                            <div className="pl-2 flex flex-col justify-end">
                                <p className="font-bold">Playing Time</p>
                                <p className="text-left">{rowData.gameDetails.gamePlayTime}+</p>
                            </div>
                            <div className="pl-2 flex flex-col justify-end">
                                <p className="font-bold">Complexity</p>
                                <p className="text-left">{rowData.gameDetails.gameComplexity} / 5</p>
                            </div>
                        </div>

                    </div>
                </div>
                
                <div className="px-4 px-4">
                    <p className="font-bold">Board Game Geek rating </p>
                    <i>
                        <p className="font-bold">{rowData.gameDetails.gameBGGRating}</p>
                    </i>
                </div>

            </div>
        )
    } 
}