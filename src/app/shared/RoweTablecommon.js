export default function RoweTablecommon(props){

    return(
        <div>
            <img></img>
            <div>
                <h4>{props.gameTitle}</h4>
                <p>{props.gameDescription}</p>

                <div>
                    <div>
                        <p>Players</p>
                        <p>{props.gamePlayerNr}</p>
                    </div>
                    <div>
                        <p>Recommended Age</p>
                        <p>{props.gameRecommendedAge}+</p>
                    </div>
                    <div>
                        <p>Playing Time</p>
                        <p>{props.gamePlayTime}+</p>
                    </div>
                    <div>
                        <p>Complexity</p>
                        <p>{props.gameComplexity} / 5</p>
                    </div>
                </div>
            </div>
            <div>
                <p>Board Game Geek rating </p>
                <i>
                    <p>{props.gameBGGRating}</p>
                </i>
            </div>

        </div>
    )
}