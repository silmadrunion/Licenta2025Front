export default function RowTablecommon(props){

    let rowData = props.rowData

    return(
        <div className="grow flex justify-between">
            <img></img>
            <div className="flex pl-4">
                <div className="flex pl-4 flex-col">
                    <h4 className="font-bold">{rowData.gameName}</h4>
                    <p>{rowData.gameDetails.gameDescription}</p>
                </div>
                <div className="flex pl-4">
                    <div>
                        <p className="font-bold">Players</p>
                        <p>{rowData.gameDetails.gamePlayerNo}</p>
                    </div>
                    <div className="pl-4">
                        <p className="font-bold">Recommended Age</p>
                        <p>{rowData.gameDetails.gameReccommandedAge}</p>
                    </div>
                    <div className="pl-4">
                        <p className="font-bold">Playing Time</p>
                        <p>{rowData.gameDetails.gamePlayTime}+</p>
                    </div>
                    <div className="pl-4">
                        <p className="font-bold">Complexity</p>
                        <p>{rowData.gameDetails.gameComplexity} / 5</p>
                    </div>
                </div>
            </div>
            <div className="pl-4">
                <p className="font-bold">Board Game Geek rating </p>
                <i>
                    <p className="font-bold">{rowData.gameDetails.gameBGGRating}</p>
                </i>
            </div>

        </div>
    )
}