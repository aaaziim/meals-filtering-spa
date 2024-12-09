import { NavLink } from "react-router";

const Header = () => {

    const styles = {
        display: "flex",
        gap: "40px",
        listStyle: 'none'
    };
    return (
        <nav>
            <ul style={styles}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/meals">Meals</NavLink></li>
            </ul>
        </nav>
    );
};

export default Header;