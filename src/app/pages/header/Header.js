import Navigation from "./components/Navigation"
import ProfileIcon from "./components/ProfileIcon"


export default function Header() {
    return (
        <div>
            <span>
            <img src={require('../../../assets/images/logo.png')} />
            </span>
            <Navigation />
            <ProfileIcon />
        </div>
    )
}


