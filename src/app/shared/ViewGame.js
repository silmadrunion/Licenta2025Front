export default function ViewGame(props){


    return (
        <div className="modal">
            <div>
                <div>
                    <img></img>
                    <button>Left</button>
                    <button>Right</button>
                </div>
                <div>
                    <div>
                        <h4>{props.gameTitle}</h4>
                        <p>{props.gameDescription}</p>
                    </div>
                    <div>
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
                        <div>
                            <div>
                                <p>Designers</p>
                                <p>{props.gameDesigners}+</p>
                            </div>
                            <div>
                                <p>Artists</p>
                                <p>{props.gameArtists}</p>
                            </div>
                            <div>
                                <p>Board Game Geek rating </p>
                                <i>
                                    <p>{props.gameBGGRating}</p>
                                </i>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

            <div>
                <div>
                    <p>Mechanisms</p>
                    <p>{props.gameMechanisms}+</p>
                </div>
                <div>
                    <p>Categories</p>
                    <p>{props.gameCategories}</p>
                </div>    
                <div className="seller-container">
                    <div className="left">
                        <h4>Game Condition</h4>
                        <div>                        
                            <p>Description : </p>
                            <p>{props.gameOwnerDescription}</p>
                        </div>
                        <div>
                            <span>Pictures of the game provided:</span>
                            <span>{props.gameOwnerPicturesProvided}</span>
                        </div>
                    </div>
                    <div className="right">
                        <div>
                            <p>Seller</p>
                            <img></img>
                        </div>
                        <div>
                            <p>{props.sellerName}</p>
                            <p>Rating: {props.sellerRating}</p>
                        </div>
                    </div>
                </div>            
            </div>


        </div>
    )
}