import React from "react";
import { Layout } from "antd";

import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import HeaderPage from "../../components/HeaderPage/HeaderPage";

const { Header, Footer, Content } = Layout;

function LayoutPage(WrappedComponenta, pageName) {
    return props => {
        return (
            <Layout style={{ minHeight: "100vh" }}>
                <SideDrawer />
                <Layout>
                    <Header style={{ padding: 0 }}>
                        <HeaderPage name={pageName} />
                    </Header>
                    <Content>
                        <WrappedComponenta {...props} />
                    </Content>
                    <Footer style={{ textAlign: "center" }}>
                        My ~ Spotify
                    </Footer>
                </Layout>
            </Layout>
        );
    };
}

export default LayoutPage;
