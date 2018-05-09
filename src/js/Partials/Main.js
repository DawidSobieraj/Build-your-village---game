import React from "react";
import {
    HashRouter,
    Route,
    Switch,
    NavLink
} from 'react-router-dom';
class Main extends React.Component{
    render(){
        return <NavigationPanel/>
    }
}

class NavigationPanel extends React.Component {
    constructor(props) {
        super(props);
        let storage = JSON.parse(localStorage.getItem("data"));
        if (storage === null || storage.length === 0) {
            this.state = {
                wydobycieDrewna: 10,
                wydobycieGliny: 10,
                wydobycieZelaza: 10,
                drewnoMagazyn: 50,
                glinaMagazyn: 40,
                zelazoMagazyn: 20,
                levelMagazyn: 1,
                pojemnosc: 1000,
                drewnoTartak: 64,
                glinaTartak: 36,
                zelazoTartak: 20,
                levelTartak: 1,
                drewnoGlina: 46,
                glinaGlina: 75,
                zelazoGlina: 39,
                levelGlina: 1,
                drewnoZelazo: 46,
                glinaZelazo: 22,
                zelazoZelazo: 76,
                levelZelazo: 1,
                levelSiedziba: 1,
                drewnoSiedziba: 50,
                glinaSiedziba: 40,
                zelazoSiedziba: 20,
                levelOsiedle: 1,
                drewnoOsiedle: 1023,
                glinaOsiedle: 563,
                zelazoOsiedle: 856,
                mieszkancyOsiedle: 10,
                levelPomnik: 0,
                drewnoPomnik: 10000,
                glinaPomnik: 10000,
                zelazoPomnik: 10000,
                levelMur: 0,
                drewnoMur: 126,
                glinaMur: 46,
                zelazoMur: 85,
                levelPalac: 0,
                drewnoPalac: 400000,
                glinaPalac: 400000,
                zelazoPalac: 400000
            }
        } else {
            this.state = {
                wydobycieDrewna: storage.wydobycieDrewna,
                wydobycieGliny: storage.wydobycieGliny,
                wydobycieZelaza: storage.wydobycieZelaza,
                levelMagazyn: storage.levelMagazyn,
                pojemnosc: storage.pojemnosc,
                drewnoMagazyn: storage.drewnoMagazyn,
                glinaMagazyn: storage.glinaMagazyn,
                zelazoMagazyn: storage.zelazoMagazyn,
                levelTartak: storage.levelTartak,
                drewnoGlina: storage.drewnoGlina,
                glinaGlina: storage.glinaGlina,
                zelazoGlina: storage.zelazoGlina,
                levelGlina: storage.levelGlina,
                drewnoZelazo: storage.drewnoZelazo,
                glinaZelazo: storage.glinaZelazo,
                zelazoZelazo: storage.zelazoZelazo,
                levelZelazo: storage.levelZelazo,
                drewnoTartak: storage.resourcesTartakdrewno,
                glinaTartak: storage.resourcesTartakglina,
                zelazoTartak: storage.resourcesTartakzelazo,
                levelSiedziba: storage.levelSiedziba,
                drewnoSiedziba: storage.resourcesSiedzibadrewno,
                glinaSiedziba: storage.resourcesSiedzibaglina,
                zelazoSiedziba: storage.resourcesSiedzibazelazo,
                levelOsiedle: storage.levelOsiedle,
                drewnoOsiedle: storage.resourcesOsiedledrewno,
                glinaOsiedle: storage.resourcesOsiedleglina,
                zelazoOsiedle: storage.resourcesOsiedlezelazo,
                mieszkancyOsiedle: storage.resourcesOsiedlemieszkancy,
                levelPomnik: storage.levelPomnik,
                drewnoPomnik: storage.resourcesPomnikdrewno,
                glinaPomnik: storage.resourcesPomnikglina,
                zelazoPomnik: storage.resourcesPomnikzelazo,
                levelMur: storage.levelMur,
                drewnoMur: storage.resourcesMurdrewno,
                glinaMur: storage.resourcesMurglina,
                zelazoMur: storage.resourcesMurzelazo,
                levelPalac: storage.levelPalac,
                drewnoPalac: storage.resourcesPalacdrewno,
                glinaPalac: storage.resourcesPalacglina,
                zelazoPalac: storage.resourcesPalaczelazo
            }
        }
    }
    setWydobycieDrewna = (wydobycieDrewna) => {
        this.setState({
            wydobycieDrewna: wydobycieDrewna
        })
    };
    setWydobycieGliny = (wydobycieGliny) => {
        this.setState({
            wydobycieGliny: wydobycieGliny
        })
    };
    setWydobycieZelaza = (wydobycieZelaza) => {
        this.setState({
            wydobycieZelaza: wydobycieZelaza
        })
    };
    setMagazynResources = (drewnoMagazyn, glinaMagazyn, zelazoMagazyn, levelMagazyn, pojemnosc) => {
        this.setState({
            drewnoMagazyn: drewnoMagazyn,
            glinaMagazyn: glinaMagazyn,
            zelazoMagazyn: zelazoMagazyn,
            levelMagazyn: levelMagazyn,
            pojemnosc: pojemnosc,
        })
    };
    setTartakResources = (drewnoTartak, glinaTartak, zelazoTartak) => {
        this.setState({
            drewnoTartak: drewnoTartak,
            glinaTartak: glinaTartak,
            zelazoTartak: zelazoTartak
        })
    };
    setLevelTartak = (levelTartak) => {
        this.setState({
            levelTartak: levelTartak
        })
    };
    setGlinaResources = (drewnoGlina, glinaGlina, zelazoGlina) => {
        this.setState({
            drewnoGlina: drewnoGlina,
            glinaGlina: glinaGlina,
            zelazoGlina: zelazoGlina
        })
    };
    setLevelGlina = (levelGlina) => {
        this.setState({
            levelGlina: levelGlina
        })
    };
    setZelazoResources = (drewnoZelazo, glinaZelazo, zelazoZelazo) => {
        this.setState({
            drewnoZelazo: drewnoZelazo,
            glinaZelazo: glinaZelazo,
            zelazoZelazo: zelazoZelazo
        })
    };
    setLevelZelazo = (levelZelazo) => {
        this.setState({
            levelZelazo: levelZelazo
        })
    };
    setSiedzibaResources = (drewnoSiedziba, glinaSiedziba, zelazoSiedziba, levelSiedziba) => {
        this.setState({
            drewnoSiedziba: drewnoSiedziba,
            glinaSiedziba: glinaSiedziba,
            zelazoSiedziba: zelazoSiedziba,
            levelSiedziba: levelSiedziba,
        })
    };
    setOsiedleResources = (drewnoOsiedle, glinaOsiedle, zelazoOsiedle, levelOsiedle, mieszkancyOsiedle) => {
        this.setState({
            drewnoOsiedle: drewnoOsiedle,
            glinaOsiedle: glinaOsiedle,
            zelazoOsiedle: zelazoOsiedle,
            levelOsiedle: levelOsiedle,
            mieszkancyOsiedle: mieszkancyOsiedle
        })
    };
    setPomnikResources = (drewnoPomnik, glinaPomnik, zelazoPomnik, levelPomnik) => {
        this.setState({
            drewnoPomnik: drewnoPomnik,
            glinaPomnik: glinaPomnik,
            zelazoPomnik: zelazoPomnik,
            levelPomnik: levelPomnik,
        })
    };
    setMurResources = (drewnoMur, glinaMur, zelazoMur, levelMur) => {
        this.setState({
            drewnoMur: drewnoMur,
            glinaMur: glinaMur,
            zelazoMur: zelazoMur,
            levelMur: levelMur,
        })
    };
    setPalacResources = (drewnoPalac, glinaPalac, zelazoPalac, levelPalac) => {
        this.setState({
            drewnoPalac: drewnoPalac,
            glinaPalac: glinaPalac,
            zelazoPalac: zelazoPalac,
            levelPalac: levelPalac,
        })
    };
    /*setResultResources = (resultDrewno, resultGlina, resultZelazo) => {
        this.setState({
            resultDrewno: resultDrewno,
            resultGlina: resultGlina,
            resultZelazo: resultZelazo
        })
    };*/
    render(){
        return(
            <HashRouter>
                <div>
                    <NavigationBar/>
                    <ResourcesPanel wydobycieDrewna={this.state.wydobycieDrewna}
                                    wydobycieGliny={this.state.wydobycieGliny}
                                    wydobycieZelaza={this.state.wydobycieZelaza}
                                    resourcesMagazyn={[this.state.drewnoMagazyn,
                                                    this.state.glinaMagazyn,
                                                    this.state.zelazoMagazyn,
                                                    this.state.levelMagazyn,
                                                    this.state.pojemnosc]}
                                    resourcesTartak={[this.state.drewnoTartak,
                                                    this.state.glinaTartak,
                                                    this.state.zelazoTartak]}
                                    levelTartak={this.state.levelTartak}
                                    resourcesGlina={[this.state.drewnoGlina,
                                                    this.state.glinaGlina,
                                                    this.state.zelazoGlina]}
                                    levelGlina={this.state.levelGlina}
                                    resourcesZelazo={[this.state.drewnoZelazo,
                                                    this.state.glinaZelazo,
                                                    this.state.zelazoZelazo]}
                                    levelZelazo={this.state.levelZelazo}
                                    resourcesSiedziba={[this.state.drewnoSiedziba,
                                                        this.state.glinaSiedziba,
                                                        this.state.zelazoSiedziba,
                                                        this.state.levelSiedziba]}
                                    resourcesOsiedle={[this.state.drewnoOsiedle,
                                                        this.state.glinaOsiedle,
                                                        this.state.zelazoOsiedle,
                                                        this.state.levelOsiedle,
                                                        this.state.mieszkancyOsiedle]}
                                    resourcesPomnik={[this.state.drewnoPomnik,
                                                        this.state.glinaPomnik,
                                                        this.state.zelazoPomnik,
                                                        this.state.levelPomnik]}
                                    resourcesMur={[this.state.drewnoMur,
                                                        this.state.glinaMur,
                                                        this.state.zelazoMur,
                                                        this.state.levelMur]}
                                    resourcesPalac={[this.state.drewnoPalac,
                                                        this.state.glinaPalac,
                                                        this.state.zelazoPalac,
                                                        this.state.levelPalac]}
                                    /*resourcesResult={[this.state.resultDrewno,
                                                        this.state.resultGlina,
                                                        this.state.resultZelazo]}*//>
                    <Switch>
                        <Route exact path="/" component={Tutorial}/>
                        <Route path="/siedziba" render={ props => <Siedziba resourcesSiedziba={this.setSiedzibaResources}
                                                                            /*resourcesResult={this.setResultResources}*/ {...props} /> }/>
                        <Route path="/tartak" render={ props => <Tartak wood={this.setWydobycieDrewna}
                                                                        resourcesTartak={this.setTartakResources}
                                                                        levelTartak={this.setLevelTartak} {...props}/> }/>
                        <Route path="/kopalnia_gliny" render={ props => <KopalniaGliny glina={this.setWydobycieGliny}
                                                                                       resourcesGlina={this.setGlinaResources}
                                                                                       levelGlina={this.setLevelGlina} {...props}/> }/>
                        <Route path="/huta_zelaza" render={ props => <HutaZelaza iron={this.setWydobycieZelaza}
                                                                                 resourcesZelazo={this.setZelazoResources}
                                                                                 levelZelazo={this.setLevelZelazo} {...props}/> }/>
                        <Route path="/magazyn" render={ props => <Magazyn resourcesMagazyn={this.setMagazynResources} {...props}/> }/>
                        <Route path="/osiedle" render={ props => <Osiedle resourcesOsiedle={this.setOsiedleResources} {...props} /> }/>
                        <Route path="/pomnik" render={ props => <Pomnik resourcesPomnik={this.setPomnikResources} {...props} /> }/>
                        <Route path="/mur" render={ props => <Mur resourcesMur={this.setMurResources} {...props} /> }/>
                        <Route path="/palac" render={ props => <Palac resourcesPalac={this.setPalacResources} {...props} /> }/>
                    </Switch>
                </div>
            </HashRouter>
        )
    }
}
class NavigationBar extends React.Component{
    render(){
        const activeStyle = {
            fontWeight: "bold"
        };
        return(
            <nav>
                <div className="buildingsBar">
                    <div><NavLink activeStyle={activeStyle} to="/siedziba">Siedziba</NavLink></div>
                    <div><NavLink activeStyle={activeStyle} to="/tartak">Tartak</NavLink></div>
                    <div><NavLink activeStyle={activeStyle} to="/kopalnia_gliny">Kopalnia gliny</NavLink></div>
                    <div><NavLink activeStyle={activeStyle} to="/huta_zelaza">Huta żelaza</NavLink></div>
                    <div><NavLink activeStyle={activeStyle} to="/osiedle">Osiedle</NavLink></div>
                    <div><NavLink activeStyle={activeStyle} to="/magazyn">Magazyn</NavLink></div>
                    <div><NavLink activeStyle={activeStyle} to="/pomnik">Pomnik</NavLink></div>
                    <div><NavLink activeStyle={activeStyle} to="/mur">Mur</NavLink></div>
                    <div><NavLink activeStyle={activeStyle} to="/palac">Pałac</NavLink></div>
                </div>
            </nav>
        )
    }
}
class Tutorial extends React.Component{
    render(){
        return(
            <div className="tutorial">
                    <div>React'ywuj swoją osadę.</div>
                    <div>Wciel się w rolę zarządcy nowo powstałej wioski. Nie popełniaj błędów swoich poprzedników i poprowadź swój lud do świetlanej przyszłości.</div>
                    <div>Zadbaj o ekonomię i rozwiń swoją osadę jak najszybciej to możliwe.</div>
            </div>
        )
    }
}
class ResourcesPanel extends React.Component{
    constructor(props){
        super(props);
        let storage = JSON.parse(localStorage.getItem("data"));
        if (storage === null || storage.length === 0) {
        this.state= {
            resultDrewno: 500,
            resultGlina: 500,
            resultZelazo: 500,
            pojemnosc: this.props.resourcesMagazyn[4],
            levelTartak: this.props.levelTartak,
            levelGlina: this.props.levelGlina,
            levelZelazo: this.props.levelZelazo,
            levelSiedziba: this.props.resourcesSiedziba[3],
            levelOsiedle: this.props.resourcesOsiedle[3],
            levelPomnik: this.props.resourcesPomnik[3],
            levelMagazyn:this.props.resourcesMagazyn[3],
            levelMur: this.props.resourcesMur[3],
            levelPalac: this.props.resourcesPalac[3]
        }
        } else {
            this.state = {
                resultDrewno: storage.resultDrewno,
                resultGlina: storage.resultGlina,
                resultZelazo: storage.resultZelazo,
                wydobycieDrewna: storage.wydobycieDrewna,
                wydobycieGliny: storage.wydobycieGliny,
                wydobycieZelaza: storage.wydobycieZelaza,
                pojemnosc: storage.pojemnosc,
                levelTartak: storage.levelTartak,
                drewnoGlina: storage.drewnoGlina,
                glinaGlina: storage.glinaGlina,
                zelazoGlina: storage.zelazoGlina,
                levelGlina: storage.levelGlina,
                drewnoZelazo: storage.drewnoZelazo,
                glinaZelazo: storage.glinaZelazo,
                zelazoZelazo: storage.zelazoZelazo,
                levelZelazo: storage.levelZelazo,
                levelSiedziba: storage.levelSiedziba,
                levelOsiedle: storage.levelOsiedle,
                levelPomnik: storage.levelPomnik,
                levelMagazyn: storage.levelMagazyn,
                levelMur: storage.levelMur,
                levelPalac: storage.levelPalac
            }
        }
    }
    saveToLocalStorage = (state) => {
        localStorage.setItem("data", JSON.stringify(state));
    };
    componentDidMount(){
        this.interval = setInterval(() => {
            this.setState({
                wydobycieDrewna: this.props.wydobycieDrewna,
                wydobycieGliny: this.props.wydobycieGliny,
                wydobycieZelaza: this.props.wydobycieZelaza,
                resultDrewno: (this.state.resultDrewno) + this.props.wydobycieDrewna,
                resultGlina: this.state.resultGlina + this.props.wydobycieGliny,
                resultZelazo: this.state.resultZelazo + this.props.wydobycieZelaza,
                resourcesMagazyndrewno: this.props.resourcesMagazyn[0],
                resourcesMagazynglina: this.props.resourcesMagazyn[1],
                resourcesMagazynzelazo: this.props.resourcesMagazyn[2],
                pojemnosc: this.props.resourcesMagazyn[4],
                resourcesTartakdrewno: this.props.resourcesTartak[0],
                resourcesTartakglina: this.props.resourcesTartak[1],
                resourcesTartakzelazo: this.props.resourcesTartak[2],
                resourcesGlinadrewno: this.props.resourcesGlina[0],
                resourcesGlinaglina: this.props.resourcesGlina[1],
                resourcesGlinazelazo: this.props.resourcesGlina[2],
                resourcesZelazodrewno: this.props.resourcesZelazo[0],
                resourcesZelazoglina: this.props.resourcesZelazo[1],
                resourcesZelazozelazo: this.props.resourcesZelazo[2],
                resourcesSiedzibadrewno: this.props.resourcesSiedziba[0],
                resourcesSiedzibaglina: this.props.resourcesSiedziba[1],
                resourcesSiedzibazelazo: this.props.resourcesSiedziba[2],
                resourcesOsiedledrewno: this.props.resourcesOsiedle[0],
                resourcesOsiedleglina: this.props.resourcesOsiedle[1],
                resourcesOsiedlezelazo: this.props.resourcesOsiedle[2],
                resourcesOsiedlemieszkancy: this.props.resourcesOsiedle[4],
                resourcesPomnikdrewno: this.props.resourcesPomnik[0],
                resourcesPomnikglina: this.props.resourcesPomnik[1],
                resourcesPomnikzelazo: this.props.resourcesPomnik[2],
                resourcesMurdrewno: this.props.resourcesMur[0],
                resourcesMurglina: this.props.resourcesMur[1],
                resourcesMurzelazo: this.props.resourcesMur[2],
                resourcesPalacdrewno: this.props.resourcesPalac[0],
                resourcesPalacglina: this.props.resourcesPalac[1],
                resourcesPalaczelazo: this.props.resourcesPalac[2]
            });
            if (this.state.resultDrewno >= this.state.pojemnosc){
                this.setState({
                    resultDrewno: this.state.pojemnosc
                })
            }
            if (this.state.resultGlina >= this.state.pojemnosc){
                this.setState({
                    resultGlina: this.state.pojemnosc
                })
            }
            if (this.state.resultZelazo >= this.state.pojemnosc){
                this.setState({
                    resultZelazo: this.state.pojemnosc
                })
            }
            if (!(this.state.levelTartak  === this.props.levelTartak)){
                this.setState({
                    resultDrewno: this.state.resultDrewno - this.props.resourcesTartak[0],
                    resultGlina: this.state.resultGlina - this.props.resourcesTartak[1],
                    resultZelazo: this.state.resultZelazo - this.props.resourcesTartak[2],
                    levelTartak: this.props.levelTartak
                })
            }
            if (!(this.state.levelGlina  === this.props.levelGlina)){
                this.setState({
                    resultDrewno: this.state.resultDrewno - this.props.resourcesGlina[0],
                    resultGlina: this.state.resultGlina - this.props.resourcesGlina[1],
                    resultZelazo: this.state.resultZelazo - this.props.resourcesGlina[2],
                    levelGlina: this.props.levelGlina
                })
            }
            if (!(this.state.levelZelazo  === this.props.levelZelazo)){
                this.setState({
                    resultDrewno: this.state.resultDrewno - this.props.resourcesZelazo[0],
                    resultGlina: this.state.resultGlina - this.props.resourcesZelazo[1],
                    resultZelazo: this.state.resultZelazo - this.props.resourcesZelazo[2],
                    levelZelazo: this.props.levelZelazo
                })
            }
            if (!(this.state.levelSiedziba  === this.props.resourcesSiedziba[3])){
                this.setState({
                    resultDrewno: this.state.resultDrewno - this.props.resourcesSiedziba[0],
                    resultGlina: this.state.resultGlina - this.props.resourcesSiedziba[1],
                    resultZelazo: this.state.resultZelazo - this.props.resourcesSiedziba[2],
                    levelSiedziba: this.props.resourcesSiedziba[3]
                })
            }
            if (!(this.state.levelOsiedle  === this.props.resourcesOsiedle[3])){
                this.setState({
                    resultDrewno: this.state.resultDrewno - this.props.resourcesOsiedle[0],
                    resultGlina: this.state.resultGlina - this.props.resourcesOsiedle[1],
                    resultZelazo: this.state.resultZelazo - this.props.resourcesOsiedle[2],
                    levelOsiedle: this.props.resourcesOsiedle[3],
                    mieszkancyOsiedle: this.props.resourcesOsiedle[4]
                })
            }
            if (!(this.state.levelPomnik  === this.props.resourcesPomnik[3])){
                this.setState({
                    resultDrewno: this.state.resultDrewno - this.props.resourcesPomnik[0],
                    resultGlina: this.state.resultGlina - this.props.resourcesPomnik[1],
                    resultZelazo: this.state.resultZelazo - this.props.resourcesPomnik[2],
                    levelPomnik: this.props.resourcesPomnik[3]
                })
            }
            if (!(this.state.levelMagazyn  === this.props.resourcesMagazyn[3])){
                this.setState({
                    resultDrewno: this.state.resultDrewno - this.props.resourcesMagazyn[0],
                    resultGlina: this.state.resultGlina - this.props.resourcesMagazyn[1],
                    resultZelazo: this.state.resultZelazo - this.props.resourcesMagazyn[2],
                    levelMagazyn: this.props.resourcesMagazyn[3]
                })
            }
            if (!(this.state.levelMur  === this.props.resourcesMur[3])){
                this.setState({
                    resultDrewno: this.state.resultDrewno - this.props.resourcesMur[0],
                    resultGlina: this.state.resultGlina - this.props.resourcesMur[1],
                    resultZelazo: this.state.resultZelazo - this.props.resourcesMur[2],
                    levelMur: this.props.resourcesMur[3]
                })
            }
            if (!(this.state.levelPalac  === this.props.resourcesPalac[3])){
                this.setState({
                    resultDrewno: this.state.resultDrewno - this.props.resourcesPalac[0],
                    resultGlina: this.state.resultGlina - this.props.resourcesPalac[1],
                    resultZelazo: this.state.resultZelazo - this.props.resourcesPalac[2],
                    levelPalac: this.props.resourcesPalac[3]
                })
            }
            this.saveToLocalStorage(this.state);
        }, 1000);
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
    render(){
        return (
                <div className="resourcesContainer">
                    <div className="resources">
                        <div className="resourcesPage">Pojemność magazynu: {this.state.pojemnosc}</div>
                        <div className="resourcesPage">Drewno: {this.state.resultDrewno}</div>
                        <div className="resourcesPage">Glina: {this.state.resultGlina}</div>
                        <div className="resourcesPage">Żelazo: {this.state.resultZelazo}</div>
                    </div>
                </div>
            )
    }
}
class Siedziba extends React.Component{
    constructor(props){
        super(props);
        let storage = JSON.parse(localStorage.getItem("data"));
        if (storage === null || storage.length === 0) {
            this.state = {
                level: 1,
                drewnoSiedziba: 50,
                glinaSiedziba: 40,
                zelazoSiedziba: 20,
                text: "Wybuduj",
                /*resultDrewno: 500,
                resultGlina: 500,
                resultZelazo: 500,*/
            }
        } else {
            this.state = {
                level: storage.levelSiedziba,
                drewnoSiedziba: storage.resourcesSiedzibadrewno,
                glinaSiedziba: storage.resourcesSiedzibaglina,
                zelazoSiedziba: storage.resourcesSiedzibazelazo,
                text: "Wybuduj",
                /*resultDrewno: storage.resultDrewno,
                resultGlina: storage.resultGlina,
                resultZelazo: storage.resultZelazo,*/
            }
        }
    }
    componentDidMount(){
        this.props.resourcesSiedziba(this.state.drewnoSiedziba, this.state.glinaSiedziba, this.state.zelazoSiedziba, this.state.level)
        /*this.props.resourcesResult(this.state.resultDrewno, this.state.resultGlina, this.state.resultZelazo)*/
    }
    handleInputChange = () => {
        if (this.state.level < 30) /*&& (this.state.resultDrewno > this.state.drewnoSiedziba) && (this.state.resultGlina > this.state.glinaSiedziba) && (this.state.resultZelazo > this.state.zelazoSiedziba))*/{
            this.setState({
                level: this.state.level + 1,
                drewnoSiedziba: Math.round(this.state.drewnoSiedziba + (this.state.drewnoSiedziba * 0.4)),
                glinaSiedziba: Math.round(this.state.glinaSiedziba + (this.state.glinaSiedziba * 0.4)),
                zelazoSiedziba: Math.round(this.state.zelazoSiedziba + (this.state.zelazoSiedziba * 0.4))
            }, ()=>{
                this.props.resourcesSiedziba(this.state.drewnoSiedziba, this.state.glinaSiedziba, this.state.zelazoSiedziba, this.state.level)
                /*this.props.resourcesResult(this.state.resultDrewno, this.state.resultGlina, this.state.resultZelazo)*/
            })
        } else if (this.state.level = 30) /*&& (this.state.resultDrewno > this.state.drewnoSiedziba) && (this.state.resultGlina > this.state.glinaSiedziba) && (this.state.resultZelazo > this.state.zelazoSiedziba))*/ {
            this.setState({
                level: "Max",
                drewnoSiedziba: "-",
                glinaSiedziba: "-",
                zelazoSiedziba: "-",
                text: "Brak"
            })
        }
    };
    render(){
        return(
            <div className="buildingsInfo">
                <h1>Siedziba</h1>
                <p>Jest to budynek w którym przebywa rada twojej osady. Obradują tutaj nad rozbudową już istniejących lub wznoszeniem nowych budynków. Jednak ostateczna decyzja zależy wyłącznie od Ciebie.</p>
                <table>
                    <tbody>
                    <tr>
                        <th>Budynek</th>
                        <th>Poziom</th>
                        <th>Surowce</th>
                        <th>Akcja</th>
                    </tr>
                    <tr>
                        <td>Siedziba</td>
                        <td>
                            {this.state.level}
                        </td>
                        <td>
                            {this.state.drewnoSiedziba} | {this.state.glinaSiedziba} | {this.state.zelazoSiedziba}
                        </td>
                        <td>
                            <button onClick={this.handleInputChange}>{this.state.text}</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
class Tartak extends React.Component{
    constructor(props) {
        super(props);
        let storage = JSON.parse(localStorage.getItem("data"));
        if (storage === null || storage.length === 0) {
            this.state = {
                level: 1,
                drewnoTartak: 64,
                glinaTartak: 36,
                zelazoTartak: 20,
                wydobycieDrewna: 10,
                text: "Wybuduj"
            }
        } else {
            this.state = {
                level: storage.levelTartak,
                drewnoTartak: storage.resourcesTartakdrewno,
                glinaTartak: storage.resourcesTartakglina,
                zelazoTartak: storage.resourcesTartakzelazo,
                wydobycieDrewna: storage.wydobycieDrewna,
                text: "Wybuduj"
            }
        }
    }
    componentDidMount(){
        this.props.wood(Math.round(this.state.wydobycieDrewna))
        this.props.resourcesTartak(this.state.drewnoTartak, this.state.glinaTartak, this.state.zelazoTartak)
        this.props.levelTartak(this.state.level)
    }
    handleInputChange = () => {
        if (this.state.level < 30) {
            this.setState({
                level: this.state.level + 1,
                drewnoTartak: Math.round(this.state.drewnoTartak + (this.state.drewnoTartak * 0.4)),
                glinaTartak: Math.round(this.state.glinaTartak + (this.state.glinaTartak * 0.4)),
                zelazoTartak: Math.round(this.state.zelazoTartak + (this.state.zelazoTartak * 0.4)),
                wydobycieDrewna: Math.round(this.state.wydobycieDrewna + (this.state.wydobycieDrewna * 0.2))
            }, ()=>{
                this.props.wood(Math.round(this.state.wydobycieDrewna));
                this.props.resourcesTartak(this.state.drewnoTartak, this.state.glinaTartak, this.state.zelazoTartak);
                this.props.levelTartak(this.state.level)
            })
        } else if (this.state.level = 30) {
            this.setState({
                level: "Max",
                drewnoTartak: "-",
                glinaTartak: "-",
                zelazoTartak: "-",
                text: "Brak"
            })
        }
    };
    render(){
        return(
            <div className="buildingsInfo">
                <h1>Tartak</h1>
                <p>Do budowy niezbędna jest obróbka drewna ścinanego w okolicznych lasach. Im lepiej rozudowany jest budynek, tym szybciej pracownicy tartaku są w stanie pozyskiwać drewno. </p>
                <div>
                    <div>Aktualne wydobycie surowców na godzinę: <span>{this.state.wydobycieDrewna}</span></div>
                </div>
                <table>
                    <tbody>
                    <tr>
                        <th>Budynek</th>
                        <th>Poziom</th>
                        <th>Surowce</th>
                        <th>Akcja</th>
                    </tr>
                    <tr>
                        <td>Tartak</td>
                        <td>
                            {this.state.level}
                        </td>
                        <td>
                            {this.state.drewnoTartak} | {this.state.glinaTartak} | {this.state.zelazoTartak}
                        </td>
                        <td>
                            <button onClick={this.handleInputChange}>{this.state.text}</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
class KopalniaGliny extends React.Component{
    constructor(props){
        super(props);
        let storage = JSON.parse(localStorage.getItem("data"));
        if (storage === null || storage.length === 0) {
            this.state = {
                level: 1,
                drewnoGlina: 46,
                glinaGlina: 75,
                zelazoGlina: 39,
                wydobycieGliny: 10,
                text: "Wybuduj"
            }
        } else {
            this.state = {
                level: storage.levelGlina,
                drewnoGlina: storage.resourcesGlinadrewno,
                glinaGlina: storage.resourcesGlinaglina,
                zelazoGlina: storage.resourcesGlinazelazo,
                wydobycieGliny: storage.wydobycieGliny,
                text: "Wybuduj"
            }
        }
    }
    componentDidMount(){
        this.props.glina(Math.round(this.state.wydobycieGliny))
        this.props.resourcesGlina(this.state.drewnoGlina, this.state.glinaGlina, this.state.zelazoGlina)
        this.props.levelGlina(this.state.level)
    }
    handleInputChange = () => {
        if (this.state.level < 30) {
            this.setState({
                level: this.state.level + 1,
                drewnoGlina: Math.round(this.state.drewnoGlina + (this.state.drewnoGlina * 0.4)),
                glinaGlina: Math.round(this.state.glinaGlina + (this.state.glinaGlina * 0.4)),
                zelazoGlina: Math.round(this.state.zelazoGlina + (this.state.zelazoGlina * 0.4)),
                wydobycieGliny: Math.round(this.state.wydobycieGliny + (this.state.wydobycieGliny * 0.2))
            }, ()=>{
                this.props.glina(Math.round(this.state.wydobycieGliny));
                this.props.resourcesGlina(this.state.drewnoGlina, this.state.glinaGlina, this.state.zelazoGlina);
                this.props.levelGlina(this.state.level)
            })
        } else if (this.state.level = 30) {
            this.setState({
                level: "Max",
                drewnoGlina: "-",
                glinaGlina: "-",
                zelazoGlina: "-",
                text: "Brak"
            })
        }
    };
    render(){
        return(
            <div className="buildingsInfo">
                <h1>Kopalnia gliny</h1>
                <p>Glina to także ważny składnik budynków w czasach średniowiecza. Odpowiedni poziom budynku zapewni wystarczający jej zapas.</p>
                <div>
                    <div>Aktualne wydobycie surowców na godzinę: <span>{this.state.wydobycieGliny}</span></div>
                </div>
                <table>
                    <tbody>
                    <tr>
                        <th>Budynek</th>
                        <th>Poziom</th>
                        <th>Surowce</th>
                        <th>Akcja</th>
                    </tr>
                    <tr>
                        <td>Kopalnia gliny</td>
                        <td>
                            {this.state.level}
                        </td>
                        <td>
                            {this.state.drewnoGlina} | {this.state.glinaGlina} | {this.state.zelazoGlina}
                        </td>
                        <td>
                            <button onClick={this.handleInputChange}>{this.state.text}</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
class HutaZelaza extends React.Component{
    constructor(props){
        super(props);
        let storage = JSON.parse(localStorage.getItem("data"));
        if (storage === null || storage.length === 0) {
            this.state = {
                level: 1,
                drewnoZelazo: 46,
                glinaZelazo: 22,
                zelazoZelazo: 76,
                wydobycieZelaza: 10,
                text: "Wybuduj"
            }
        } else {
            this.state = {
                level: storage.levelZelazo,
                drewnoZelazo: storage.resourcesZelazodrewno,
                glinaZelazo: storage.resourcesZelazoglina,
                zelazoZelazo: storage.resourcesZelazozelazo,
                wydobycieZelaza: storage.wydobycieZelaza,
                text: "Wybuduj"
            }
        }
    }
    componentDidMount(){
        this.props.iron(Math.round(this.state.wydobycieZelaza))
        this.props.resourcesZelazo(this.state.drewnoZelazo, this.state.glinaZelazo, this.state.zelazoZelazo)
        this.props.levelZelazo(this.state.level)
    }
    handleInputChange = () => {
        if (this.state.level < 30) {
            this.setState({
                level: this.state.level + 1,
                drewnoZelazo: Math.round(this.state.drewnoZelazo + (this.state.drewnoZelazo * 0.4)),
                glinaZelazo: Math.round(this.state.glinaZelazo + (this.state.glinaZelazo * 0.4)),
                zelazoZelazo: Math.round(this.state.zelazoZelazo + (this.state.zelazoZelazo * 0.4)),
                wydobycieZelaza: Math.round(this.state.wydobycieZelaza + (this.state.wydobycieZelaza * 0.2))
            },()=>{
                this.props.iron(Math.round(this.state.wydobycieZelaza));
                this.props.resourcesZelazo(this.state.drewnoZelazo, this.state.glinaZelazo, this.state.zelazoZelazo);
                this.props.levelZelazo(this.state.level)
            })
        } else if (this.state.level = 30) {
            this.setState({
                levelZelazo: "Max",
                drewnoZelazo: "-",
                glinaZelazo: "-",
                zelazoZelazo: "-",
                text: "Brak"
            })
        }
    };
    render(){
        return(
            <div className="buildingsInfo">
                <h1>Huta żelaza</h1>
                <p>Wytopione i obrobione żelazo wspomoże Twoje wojska w obronie granic terytorium.</p>
                <div>
                    <div>Aktualne wydobycie surowców na godzinę: <span>{this.state.wydobycieZelaza}</span></div>
                </div>
                <table>
                    <tbody>
                    <tr>
                        <th>Budynek</th>
                        <th>Poziom</th>
                        <th>Surowce</th>
                        <th>Akcja</th>
                    </tr>
                    <tr>
                        <td>Kopalnia gliny</td>
                        <td>
                            {this.state.level}
                        </td>
                        <td>
                            {this.state.drewnoZelazo} | {this.state.glinaZelazo} | {this.state.zelazoZelazo}
                        </td>
                        <td>
                            <button onClick={this.handleInputChange}>{this.state.text}</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
class Osiedle extends React.Component{
    constructor(props) {
        super(props);
        let storage = JSON.parse(localStorage.getItem("data"));
        if (storage === null || storage.length === 0) {
            this.state = {
                level: 1,
                drewnoOsiedle: 1023,
                glinaOsiedle: 563,
                zelazoOsiedle: 856,
                text: "Wybuduj",
                mieszkancyOsiedle: 10
            }
        } else {
            this.state = {
                level: storage.levelOsiedle,
                drewnoOsiedle: storage.resourcesOsiedledrewno,
                glinaOsiedle: storage.resourcesOsiedleglina,
                zelazoOsiedle: storage.resourcesOsiedlezelazo,
                text: "Wybuduj",
                mieszkancyOsiedle: storage.resourcesOsiedlemieszkancy
            }
        }
    }
    componentDidMount(){
        this.props.resourcesOsiedle(this.state.drewnoOsiedle, this.state.glinaOsiedle, this.state.zelazoOsiedle, this.state.level, this.state.mieszkancyOsiedle)
    }
    handleInputChange = () => {
        if (this.state.level < 30) {
            this.setState({
                level: this.state.level + 1,
                drewnoOsiedle: Math.round(this.state.drewnoOsiedle + (this.state.drewnoOsiedle * 0.4)),
                glinaOsiedle: Math.round(this.state.glinaOsiedle + (this.state.glinaOsiedle * 0.4)),
                zelazoOsiedle: Math.round(this.state.zelazoOsiedle + (this.state.zelazoOsiedle * 0.4)),
                mieszkancyOsiedle: Math.round(this.state.mieszkancyOsiedle + (this.state.mieszkancyOsiedle * 0.4))
            }, ()=>{
                this.props.resourcesOsiedle(this.state.drewnoOsiedle, this.state.glinaOsiedle, this.state.zelazoOsiedle, this.state.level, this.state.mieszkancyOsiedle)
            })
        } else if (this.state.level = 30) {
            this.setState({
                level: "Max",
                drewnoOsiedle: "-",
                glinaOsiedle: "-",
                zelazoOsiedle: "-",
                text: "Brak"
            })
        }
    };
    render(){
        return(
            <div className="buildingsInfo">
                <h1>Osiedle</h1>
                <p>Aby osada mogła się rozrastać potrzebni są jej ludzie. Zajmują się oni zarządzaniem, produkowaniem dóbr, obsługą budynków i obroną Twojej krainy</p>
                <div>Aktualna ilość mieszkańców: <span>{this.state.mieszkancyOsiedle}</span></div>
                <table>
                    <tbody>
                    <tr>
                        <th>Budynek</th>
                        <th>Poziom</th>
                        <th>Surowce</th>
                        <th>Akcja</th>
                    </tr>
                    <tr>
                        <td>Osiedle</td>
                        <td>
                            {this.state.level}
                        </td>
                        <td>
                            {this.state.drewnoOsiedle} | {this.state.glinaOsiedle} | {this.state.zelazoOsiedle}
                        </td>
                        <td>
                            <button onClick={this.handleInputChange}>{this.state.text}</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
class Pomnik extends React.Component{
    constructor(props){
        super(props);
        let storage = JSON.parse(localStorage.getItem("data"));
        if (storage === null || storage.length === 0) {
            this.state = {
                level: 0,
                drewnoPomnik: 10000,
                glinaPomnik: 10000,
                zelazoPomnik: 10000,
                text: "Wybuduj"
            }
        } else {
            this.state = {
                level: storage.levelPomnik,
                drewnoPomnik: storage.resourcesPomnikdrewno,
                glinaPomnik: storage.resourcesPomnikglina,
                zelazoPomnik: storage.resourcesPomnikzelazo,
                text: "Wybuduj"
            }
        }
    }
    componentDidMount(){
        this.props.resourcesPomnik(this.state.drewnoPomnik, this.state.glinaPomnik, this.state.zelazoPomnik, this.state.level)
    }
    handleInputChange = () => {
        if (this.state.level < 1) {
            this.setState({
                level: this.state.level + 1
            }, ()=>{
                this.props.resourcesPomnik(this.state.drewnoPomnik, this.state.glinaPomnik, this.state.zelazoPomnik, this.state.level)
            })
        } else if (this.state.level = 1) {
            this.setState({
                level: "Max",
                drewnoPomnik: "-",
                glinaPomnik: "-",
                zelazoPomnik: "-",
                text: "Brak"
            })
        }
    };
    render(){
        return(
            <div className="buildingsInfo">
                <h1>Pomnik</h1>
                <p>Walory estetyczne są ważne dla utrzymania morale. Kto wie, może w drodze na wojnę Twoi wojacy poczują się jak herosi myśląc, że kiedyś społeczeństwo postawi pomnik im?</p>
                <table>
                    <tbody>
                    <tr>
                        <th>Budynek</th>
                        <th>Poziom</th>
                        <th>Surowce</th>
                        <th>Akcja</th>
                    </tr>
                    <tr>
                        <td>Pomnik</td>
                        <td>
                            {this.state.level}
                        </td>
                        <td>
                            {this.state.drewnoPomnik} | {this.state.glinaPomnik} | {this.state.zelazoPomnik}
                        </td>
                        <td>
                            <button onClick={this.handleInputChange}>{this.state.text}</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

class Mur extends React.Component{
    constructor(props){
        super(props);
        let storage = JSON.parse(localStorage.getItem("data"));
        if (storage === null || storage.length === 0) {
            this.state= {
                level: 0,
                drewnoMur: 126,
                glinaMur: 46,
                zelazoMur: 85,
                text: "Wybuduj"
            }
        } else {
            this.state = {
                level: storage.levelMur,
                drewnoMur: storage.resourcesMurdrewno,
                glinaMur: storage.resourcesMurglina,
                zelazoMur: storage.resourcesMurzelazo,
                text: "Wybuduj"
            }
        }
    }
    componentDidMount(){
        this.props.resourcesMur(this.state.drewnoMur, this.state.glinaMur, this.state.zelazoMur, this.state.level)
    }
    handleInputChange = () => {
        if (this.state.level < 20) {
            this.setState({
                level: this.state.level + 1,
                drewnoMur: Math.round(this.state.drewnoMur + (this.state.drewnoMur * 0.4)),
                glinaMur: Math.round(this.state.glinaMur + (this.state.glinaMur * 0.4)),
                zelazoMur: Math.round(this.state.zelazoMur + (this.state.zelazoMur * 0.4))
            }, ()=>{
                this.props.resourcesMur(this.state.drewnoMur, this.state.glinaMur, this.state.zelazoMur, this.state.level)
            })
        } else if (this.state.level = 20) {
            this.setState({
                level: "Max",
                drewnoMur: "-",
                glinaMur: "-",
                zelazoMur: "-",
                text: "Brak"
            })
        }
    };
    render(){
        return(
            <div className="buildingsInfo">
                <h1>Mur</h1>
                <p>Im wyższy i bardziej ufortyfikowany mur tym mniejsze prawdopodobieństwo, że ktoś choćby pomyśli o próbie splądrowania wioski.</p>
                <table>
                    <tbody>
                    <tr>
                        <th>Budynek</th>
                        <th>Poziom</th>
                        <th>Surowce</th>
                        <th>Akcja</th>
                    </tr>
                    <tr>
                        <td>Mur</td>
                        <td>
                            {this.state.level}
                        </td>
                        <td>
                            {this.state.drewnoMur} | {this.state.glinaMur} | {this.state.zelazoMur}
                        </td>
                        <td>
                            <button onClick={this.handleInputChange}>{this.state.text}</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

class Palac extends React.Component{
    constructor(props){
        super(props);
        let storage = JSON.parse(localStorage.getItem("data"));
        if (storage === null || storage.length === 0) {
            this.state= {
                level: 0,
                drewnoPalac: 400000,
                glinaPalac: 400000,
                zelazoPalac: 400000,
                text: "Wybuduj"
            }
        } else {
            this.state = {
                level: storage.levelPalac,
                drewnoPalac: storage.resourcesPalacdrewno,
                glinaPalac: storage.resourcesPalacglina,
                zelazoPalac: storage.resourcesPalaczelazo,
                text: "Wybuduj"
            }
        }
    }
    componentDidMount(){
        this.props.resourcesPalac(this.state.drewnoPalac, this.state.glinaPalac, this.state.zelazoPalac, this.state.level)
    }
    handleInputChange = () => {
        if (this.state.level < 1) {
            this.setState({
                level: this.state.level + 1,
                drewnoPalac: 400000,
                glinaPalac: 400000,
                zelazoPalac: 400000,
            }, ()=>{
                this.props.resourcesPalac(this.state.drewnoPalac, this.state.glinaPalac, this.state.zelazoPalac, this.state.level)
            })
        } else if (this.state.level = 1) {
            this.setState({
                level: "Max",
                drewnoPalac: "-",
                glinaPalac: "-",
                zelazoPalac: "-",
                text: "Brak"
            })
        }
    };
    render(){
        return(
            <div className="buildingsInfo">
                <h1>Pałac</h1>
                <p>Budowa pałacu oznacza, że prężnie rozwijająca się osada zyskała prawa miasta. A Ty otrzymałeś tytuł szlachecki i sporą posiadłość.</p>
                <table>
                    <tbody>
                    <tr>
                        <th>Budynek</th>
                        <th>Poziom</th>
                        <th>Surowce</th>
                        <th>Akcja</th>
                    </tr>
                    <tr>
                        <td>Pałac</td>
                        <td>
                            {this.state.level}
                        </td>
                        <td>
                            {this.state.drewnoPalac} | {this.state.glinaPalac} | {this.state.zelazoPalac}
                        </td>
                        <td>
                            <button onClick={this.handleInputChange}>{this.state.text}</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
class Magazyn extends React.Component{
    constructor(props){
        super(props);
        let storage = JSON.parse(localStorage.getItem("data"));
        if (storage === null || storage.length === 0) {
            this.state= {
                level: 1,
                drewnoMagazyn: 50,
                glinaMagazyn: 40,
                zelazoMagazyn: 20,
                pojemnosc: 1000,
                text: "Wybuduj"
            }
        } else {
            this.state = {
                level: storage.levelMagazyn,
                drewnoMagazyn: storage.resourcesMagazyndrewno,
                glinaMagazyn: storage.resourcesMagazynglina,
                zelazoMagazyn: storage.resourcesMagazynzelazo,
                text: "Wybuduj",
                pojemnosc: storage.pojemnosc
            }
        }

    }
    componentDidMount(){
        this.props.resourcesMagazyn(this.state.drewnoMagazyn, this.state.glinaMagazyn, this.state.zelazoMagazyn, this.state.level, (Math.round(this.state.pojemnosc)))
    }
    handleInputChange = () => {
        if (this.state.level < 30) {
            this.setState({
                level: this.state.level + 1,
                drewnoMagazyn: Math.round(this.state.drewnoMagazyn + (this.state.drewnoMagazyn * 0.4)),
                glinaMagazyn: Math.round(this.state.glinaMagazyn + (this.state.glinaMagazyn * 0.4)),
                zelazoMagazyn: Math.round(this.state.zelazoMagazyn + (this.state.zelazoMagazyn * 0.4)),
                pojemnosc: Math.round(this.state.pojemnosc + (this.state.pojemnosc * 0.5))
            }, ()=>{
                this.props.resourcesMagazyn(this.state.drewnoMagazyn, this.state.glinaMagazyn, this.state.zelazoMagazyn, this.state.level, (Math.round(this.state.pojemnosc)))
            })
        } else if (this.state.level = 30) {
            this.setState({
                level: "Max",
                drewnoMagazyn: "-",
                glinaMagazyn: "-",
                zelazoMagazyn: "-",
                text: "Brak"
            })
        }
    };
    render(){
        return(
            <div className="buildingsInfo">
                <h1>Magazyn</h1>
                <p>Im większa produkcja tym więcej miejsca potrzeba na przechowywanie zasobów. Zadbaj o odpowiednią rozbudowę magazynu, aby nie spowalniać rozwoju swojej osady.</p>
                <p>Aktualna pojemność magazynu: {this.state.pojemnosc}</p>
                <table>
                    <tbody>
                    <tr>
                        <th>Budynek</th>
                        <th>Poziom</th>
                        <th>Surowce</th>
                        <th>Akcja</th>
                    </tr>
                    <tr>
                        <td>Siedziba</td>
                        <td>
                            {this.state.level}
                        </td>
                        <td>
                            {this.state.drewnoMagazyn} | {this.state.glinaMagazyn} | {this.state.zelazoMagazyn}
                        </td>
                        <td>
                            <button onClick={this.handleInputChange}>{this.state.text}</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export {Main}