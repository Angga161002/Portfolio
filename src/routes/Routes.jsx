import React from "react";
import { HashRouter, Routes as Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";

export default function Routes() {
    return (
        <HashRouter>
            <Switch>
                {/* homepage */}
                <Route exact path="/" element={<HomePage />} />
            </Switch>
        </HashRouter>
    )
}