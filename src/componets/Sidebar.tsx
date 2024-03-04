import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, theme } from "antd";
import { VscBell } from "react-icons/vsc";
import { Input } from "antd";
import { MdOutlinePercent } from "react-icons/md";
import {
  RiBarChart2Line,
  RiBarChartBoxLine,
  RiHandbagLine,
  RiSearchLine,
  RiUserLine,
} from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { PiChats } from "react-icons/pi";
import { TbHexagonMinus } from "react-icons/tb";
import { useSelector } from "react-redux";
const { Header, Content, Sider } = Layout;

type childrenProps = {
  children: React.ReactNode;
};

const Sidebar = ({ children }: childrenProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const userData = useSelector((state: any) => state.user.currentUser);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    window.location.href = "/login";
  };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="flex mt-6 gap-4 items-center p-5">
          <img
            className="w-[60px] h-[50px] rounded-xl"
            src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg"
            alt=""
          />
          <div className={collapsed ? "hidden" : "block"}>
            <p className="font-bold text-base">
              {" "}
              {userData.retrievedUser.name}
            </p>
            <p className="text-sm text-gray-400">
              {" "}
              {userData.retrievedUser.email}
            </p>
          </div>
        </div>
        <div className="demo-logo-vertical flex flex-col justify-between h-[80vh] overflow-y-auto py-5">
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={["1"]}
            style={{
              backgroundColor: "transparent",
            }}
          >
            <Menu.Item key="1" icon={<RxDashboard />}>
              <Link to="/">Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<MdOutlinePercent />}>
              <Link to="/sale">Sales</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<RiHandbagLine />}>
              <Link to="/product">Products</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<RiBarChartBoxLine />}>
              <Link to="/report">Reports</Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<RiUserLine />}>
              <Link to="/customer">Customers</Link>
            </Menu.Item>
            <Menu.Item key="6" icon={<RiBarChart2Line />}>
              <Link to="/statistic">Statistics</Link>
            </Menu.Item>
          </Menu>
          <Menu theme="light" mode="inline" className="bg-[#f6f6f9]">
            <Menu.Item icon={<TbHexagonMinus />}>
              <Link to="/settings">Settings</Link>
            </Menu.Item>
            <Menu.Item icon={<PiChats />}>
              <Link to="/supports">Supports</Link>
            </Menu.Item>
            <Menu.Item
              onClick={handleLogout}
              className="flex items-center justify-center rounded-lg border-2 text-white bg-blue-950 p-2"
            >
              <p className="text-white text-center">Logout</p>
            </Menu.Item>
          </Menu>
        </div>
      </Sider>
      <Layout>
        <Header className="flex justify-between w-full bg-[#f6f6f9] items-center p-8">
          <div className="font-bold text-3xl p-5 mt-12">
            <p>Welcome</p>
            <p className="text-slate-700">
              Back {userData.retrievedUser.name}!
            </p>
          </div>
          <div className="flex items-center gap-4 p-5 mt-12">
            <div className="flex items-center justify-center p-2 rounded-lg border-2 border-gray-300">
              <RiSearchLine className="text-gray-900 text-2xl" />
              <Input
                variant="borderless"
                type="text"
                placeholder="Search"
                className="border-none outline-none text-black text-md"
              />
            </div>
            <div className="flex items-center gap-2 p-3 rounded-xl border-2 border-gray-300">
              <VscBell className="text-xl" />
            </div>
          </div>
        </Header>
        <Content className="p-5">{children}</Content>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
