import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
    const counter = useSelector(state=> state.countReducer.count);

    const navItems = [
        {label: "Home", to:'/'},
        {label: "About", to:'/about'},
        {label: "Services", to:'/services'},
        {label: "Features", to:'/features'},
        {label: "Contact", to:'/contact'},
        {label: "Todo", to:'/todo'},
    ]
    return <nav className="flex justify-between left-none top-none fixed w-full items-center">
        <div className="logo text-lg bold">
            logo ({counter})
        </div>
        <div className="nav-items flex">
            {navItems.map((v,key)=>(
                <NavLink to={v.to} className="nav-item px-sm py-md" key={key}>{v.label}</NavLink>
            ))}
        </div>
    </nav>
}