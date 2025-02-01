import Navigation from "./components/Navigation"
import ProfileIcon from "./components/ProfileIcon"


export default function Header() {
    return (
        <div className="flex bg-[#6D435A] pt-2 pr-4 pb-0 pl-4 flex-row flex-nowrap">
            <span className="">
            <img src={require('../../../assets/images/Untitled.png')} className="mb-4 img_header"/>
            </span>
            <Navigation />
            <ProfileIcon />
        </div>
    )
}


