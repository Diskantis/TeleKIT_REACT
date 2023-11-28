// import React, {useContext, useEffect, useState} from 'react';
// import {Spinner} from "react-bootstrap";
// import {check} from "./http/userAPI";

import React, {useContext} from 'react';
import "./style/sass/App.scss";

import {BrowserRouter} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import AppRouter from "./router/AppRouter";
import HeadBar from "./components/layouts/HeadBar";
import FootBar from "./components/layouts/FootBar";

const App = observer(() => {
    const {user} = useContext(Context)
    // const [loading, setLoading] = useState(true)

    user.setIsAuth(false);
    localStorage.removeItem("token");

    // useEffect(() => {
    //     check().then(data => {
    //         user.setUser(true)
    //         user.setIsAuth(true)
    //     }).finally(() => setLoading(false))
    // })
    //
    // if (loading) {
    //     return <Spinner animation={"grow"}/>
    // }

    return (
        <BrowserRouter>
            <HeadBar />
            <AppRouter />
            <FootBar />
        </BrowserRouter>
    );
});

export default App;
