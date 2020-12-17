import { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AppLayouts from '../layouts/AppLayouts';
import AuthLayouts from '../layouts/AuthLayouts';
import MainLayouts from '../layouts/MainLayouts';
import Dashboard from '../pages/Apps/Dashboard';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import NotFound from '../pages/Errors/NotFound';
import Home from '../pages/Home/Home';
import PrivateRoutes from './PrivateRoutes';

const IndexRoutes = () => {
    const [auth, setAuth] = useState(false);
    return (
        <Switch>
            <Route exact path="/">
                <MainLayouts
                    auth={auth}
                    setAuth={setAuth}
                >
                    <Home auth={auth} />
                </MainLayouts>
            </Route>
            {!auth ?
                <>
                    <Route exact path="/auth/login">
                        <AuthLayouts>
                            <Login setAuth={setAuth} />
                        </AuthLayouts>
                    </Route>

                    <Route exact path="/auth/register">
                        <AuthLayouts>
                            <Register setAuth={setAuth} />
                        </AuthLayouts>
                    </Route>
                    <Redirect from='/auth' to="/auth/login" />
                </>:
                    <Redirect from='/auth' to='/' />
            }

            <PrivateRoutes exact path="/dashboard"
                comp={AppLayouts}
                child={Dashboard}
                setAuth={setAuth}
                auth={auth}
            />

            <Route path="*" render={() => {
                return (
                    <NotFound />
                )
            }} />
        </Switch>
    );
}

export default IndexRoutes;
