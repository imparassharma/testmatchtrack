import React from "react";


function Main(){

    return(
        <div className="mainSection">
            <div className="leftSection">
                <div className="teamName">
                    <h1>TEAM A</h1>
                </div>
                <div className="scoreSection">
                    <button id="addRuns">+</button>
                    <div className="scoreCard">
                        <div className="score">
                            <h1>76/1</h1>
                        </div>
                    </div>
                    <button id="addWicket">+</button>
                </div>
                <div className="overSection">
                    <div className="overs">
                        <button id="addOvers">+</button>
                        <h2>OVERS: 5.0</h2>
                        <button id="minusOvers">-</button>
                    </div>
                    <p>TOSS WON BY TEAM A AND DECIDED TO BAT FIRST!</p>
                </div>
            </div>


            <div className="rightSection">
                <h1>Summary</h1>
                <div className="inningsSection">
                    <div className="day1 day">
                        <h2>DAY1 <span>0/0</span></h2>
                    </div>
                    <div className="day2 day">
                        <h2>DAY2 <span>0/0</span></h2>
                    </div>
                    <div className="day3 day">
                        <h2>DAY3 <span>0/0</span></h2>
                    </div>
                    <div className="day4 day">
                        <h2>DAY4 <span>0/0</span></h2>
                    </div>
                    <div className="day5 day">
                        <h2>DAY5 <span>0/0</span></h2>
                    </div>
                </div>
                <button id="btn">CONTINUE</button>
            </div>
        </div>
    );
}

export default Main;