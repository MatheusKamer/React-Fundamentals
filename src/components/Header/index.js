import React, { useContext } from "react";
import PropTypes from "prop-types";

import Button from "../Button";
import { ThemeContext } from "../../context/ThemeContext";

import Title from "../Title";

function Header(props) {
    const { onToogleTheme } = useContext(ThemeContext);

    return (
        <>
            <Title>{props.title}</Title>
            <Button onClick={onToogleTheme}>
                Mudar tema
            </Button>
            {props.children}
        </>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
}

Header.defaultProps = {
    title: `JStack's Blog`,
}

export default Header;