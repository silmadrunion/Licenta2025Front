import Navigation from "./components/Navigation"
import ProfileIcon from "./components/ProfileIcon"


export default function Header() {
    return (
        <div className=" flex header flex-row flex-nowrap ">
            <span className="img_header_container">
            <img src={require('../../../assets/images/Untitled.png')} className="img_header"/>
            </span>
            <Navigation />
            <ProfileIcon />
        </div>
    )
}


