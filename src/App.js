import React, { Component } from "react";
import NarBar from "./components/layout/Nav.Bar";
import logo from "../src/assets/logo.png";
import title from "../src/assets/boostme.png";
import SideNavBar from "./components/layout/SideNavBar";
import BackDrop from "./components/layout/Backdrop";

class App extends Component {
    state = {
        sideBarOpen: false
    }

    handleOpen = () => {
        this.setState({
            sideBarOpen: true
        })
    }

    handleClose = () => {
        this.setState({
            sideBarOpen: false
        })
    }
    render() {
        return (
            <div>
                <NarBar open={this.handleOpen} />
                {this.state.sideBarOpen ? (<div><SideNavBar close={this.handleClose} />
                    <BackDrop /> </div>) : null}
                <div style={{ marginTop: "60px", marginLeft: "9px" }}>

                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <p>
                            <img src={title} className="Title"></img>
                        </p>
                    </header>
                </div>
            </div>
        );
    }
}

export default App;