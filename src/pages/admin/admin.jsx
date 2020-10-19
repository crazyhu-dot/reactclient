import React, {Component} from 'react';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
class Admin extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Sider>Sider</Sider>
                    <Layout>
                        <Header>Header</Header>
                        <Content>Content</Content>
                        <Footer>Footer</Footer>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

export default Admin;
