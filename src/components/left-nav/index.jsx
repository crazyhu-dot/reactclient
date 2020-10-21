import React, {Component} from 'react';
import './index.less';
import logo from "../../assets/favicon.ico";
import {Link} from 'react-router-dom';
import {Menu,Icon,} from "antd";

import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
} from '@ant-design/icons';
const { SubMenu } = Menu;
class LeftNav extends Component {
    state = {
        collapsed: false,
    };

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <div>
                <div  className="left-nav">
                    <Link to='/admin' className="left-nav-header">
                        <img src={logo} alt=""/>
                        <h1>影像树</h1>
                    </Link>
                </div>
                <div style={{ width: 200 }}>
                    <Menu
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        theme="dark"
                        inlineCollapsed={this.state.collapsed}
                    >
                        <Menu.Item key="1" icon={<PieChartOutlined />}>
                            影像树列表
                        </Menu.Item>
                        <SubMenu key="sub1" icon={<MailOutlined />} title="测试">
                            <Menu.Item key="5">测试1</Menu.Item>
                            <Menu.Item key="6">测试2</Menu.Item>
                            <Menu.Item key="7">测试3</Menu.Item>
                            <Menu.Item key="8">测试四</Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
            </div>

        );
    }
}

export default LeftNav;
