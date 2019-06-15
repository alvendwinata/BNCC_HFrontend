import React from "react";
import { Menu, Icon } from "antd";
import { NavLink, withRouter } from "react-router-dom";

function NavItems({ collapsed, location }) {
    const menus = {
        home: {
            to: "/home",
            type: "home",
            name: "Home"
        },
        logout: {
            to: "/logout",
            type: "unlock",
            name: "Logout"
        }
    };

    const activeMenuClassName = "ant-menu-item-selected";

    return (
        <Menu mode="inline" theme="dark">
            {Object.keys(menus).map((menu, index) => (
                <Menu.Item
                    key={index}
                    className={
                        location.pathname === menus[menu].to
                            ? activeMenuClassName
                            : null
                    }
                >
                    <NavLink exact to={menus[menu].to}>
                        <Icon type={menus[menu].type} theme="twoTone" />
                        <span>{menus[menu].name}</span>
                    </NavLink>
                </Menu.Item>
            ))}
        </Menu>
    );
}

export default withRouter(NavItems);
