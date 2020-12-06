import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Each of these components will represent a page
import Home from "./Home";
import About from "./About";
import Error from "./Error";
import Player from "./Player";
import Players from "./Players";
// Navbar component
import NAvbar from "./Navbar";

const IndexRouter = () => {
    // The whole app must be wrapped inside the BrowserRouter.
    // Each page is wrapped inside a Route and assigned a path.
    // exact: only render of path exactly matches
    // Switch: once path is found, don't render anymore pages
    return (
        <Router>
            <NAvbar/>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/players">
                    <Players />
                </Route>
                {/* Child attribute allows use to create one reusable component
                to render each player.*/}
                <Route path="/player/:id" children={<Player/>}></Route>
                <Route path="/*">
                    <Error />
                </Route>
            </Switch>
        </Router>
    );
}

export default IndexRouter;