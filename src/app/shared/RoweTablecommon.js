export default function RoweTablecommon(props){

    let rowData = props.rowData

    return(
        <div>
            <img></img>
            <div>
                <h4>{rowData.gameName}</h4>
                <p>{rowData.gameDetails.gameDescription}</p>

                <div>
                    <div>
                        <p>Players</p>
                        <p>{rowData.gameDetails.gamePlayerNo}</p>
                    </div>
                    <div>
                        <p>Recommended Age</p>
                        <p>{rowData.gameDetails.gameReccommandedAge}</p>
                    </div>
                    <div>
                        <p>Playing Time</p>
                        <p>{rowData.gameDetails.gamePlayTime}+</p>
                    </div>
                    <div>
                        <p>Complexity</p>
                        <p>{rowData.gameDetails.gameComplexity} / 5</p>
                    </div>
                </div>
            </div>
            <div>
                <p>Board Game Geek rating </p>
                <i>
                    <p>{rowData.gameDetails.gameBGGRating}</p>
                </i>
            </div>

        </div>
    )
}