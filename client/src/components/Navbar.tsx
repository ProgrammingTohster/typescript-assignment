import { Link } from 'react-router-dom';
import {style} from './Styles';

export function NavBar({ listOfLinks, selected }: { listOfLinks: Array<String>, selected: String }) {
    const listRender = () => {
        const listOfStuff = []
        for (let link in listOfLinks) {
            let routerLink = link == "1" ?"/":`/${listOfLinks[link].toLowerCase()}`
            if (link === "0") {
                listOfStuff.push(<p key={link} style={{ ...style.NavBar.Link, ...style.NavBar.Header }}>{listOfLinks[link]}</p>)
                continue
            }
            if (listOfLinks[link] === selected) {
                listOfStuff.push(<Link to= {routerLink} key={link} style={style.NavBar.ActiveLink}>{listOfLinks[link]}</Link>)
                continue
            }
            listOfStuff.push(<Link to= {routerLink} key={link} style={style.NavBar.Link}>{listOfLinks[link]}</Link>)
        }
        listOfStuff.push(<p key={listOfLinks.length} style={{  ...style.NavBar.Link ,...{ flexGrow: 1, color: "rgba(0, 0, 0, 0)" },}}>0</p>)
        return listOfStuff
    }
    return (
        <div style={style.NavBar.Container}>
            {listRender()}
        </div>
    )
}