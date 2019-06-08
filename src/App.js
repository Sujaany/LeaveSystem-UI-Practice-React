import React, { Component } from "react";
import "./App.css";
import {
  Header,
  Navigation,
  Content,
  Drawer,
  Layout,
  Tabs,
  Tab
} from "react-mdl";
// import { ReactComponent } from "*.svg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 2 };
  }
  render() {
    return (
      <div>
        <Layout fixedDrawer>
          <Header
            title={
              <span>
                <span style={{ color: "#ddd" }}>Invicta / </span>
                <strong>Leave System</strong>
              </span>
            }
          >
            <Navigation>
              <a href="#">Log Out</a>
            </Navigation>
          </Header>
          <Drawer title="Home">
            <Navigation>
              <a href="#">Leave Management System</a>
            </Navigation>
          </Drawer>
          <Content>
            <div className="demo-tabs">
              <Tabs>
                <Tab>View Leave Request</Tab>
                <Tab>Leave History</Tab>
                <Tab>Leave Cancel Request</Tab>
                <Tab>Apply Leave</Tab>
                <Tab>Calander</Tab>
                <Tab>CarryForward</Tab>
              </Tabs>
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
