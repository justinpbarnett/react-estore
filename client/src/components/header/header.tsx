import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { NavLink } from "react-router-dom";
import ModeToggle from "./mode-toggle";

const midLinks = [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

const rightLinks = [
    { name: "Login", href: "/login" },
    { name: "Register", href: "/register" },
];

function Header() {
    return (
        <NavigationMenu className="p-4 flex items-center justify-between">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                    >
                        <NavLink to="/">
                            <NavigationMenuLink>Home</NavigationMenuLink>
                        </NavLink>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                    >
                        <ModeToggle />
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuList>
                {midLinks.map((link) => (
                    <NavigationMenuItem key={link.name}>
                        <NavLink to={link.href}>
                            <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                            >
                                {link.name}
                            </NavigationMenuLink>
                        </NavLink>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
            <NavigationMenuList>
                {rightLinks.map((link) => (
                    <NavigationMenuItem key={link.name}>
                        <NavLink to={link.href}>
                            <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                            >
                                {link.name}
                            </NavigationMenuLink>
                        </NavLink>
                    </NavigationMenuItem>
                ))}
                <NavigationMenuItem>
                    <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                    >
                        <NavLink to="/cart">
                            <svg
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </NavLink>

                        {/*<span className="absolute top-0 left-0 p-1 text-xs text-white bg-blue-500 rounded-full"></span>*/}
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

export default Header;
