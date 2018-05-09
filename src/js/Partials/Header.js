import React from "react";

class Header extends React.Component{
    render(){
        return(
            <div className="gameName">
                <GameName/>
            </div>
        )
    }
}

class GameName extends React.Component{
    render(){
        return(
                <div className="logo">
                    <span className="word1">React</span>
                    <span className="word2">ywuj swoją osadę</span>
                </div>
        )
    }
}

export {Header}