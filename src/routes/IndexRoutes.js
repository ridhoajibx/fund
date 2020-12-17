import { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';
import MainLayouts from '../layouts/MainLayouts';
import AppLayouts from '../layouts/AppLayouts';
import AuthLayouts from '../layouts/AuthLayouts';
import Home from '../pages/Home/Home';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import Dashboard from '../pages/Apps/Dashboard';
import Settings from '../pages/Apps/Settings';
import NotFound from '../pages/Errors/NotFound';

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

            <PrivateRoutes exact path="/settings"
                comp={AppLayouts}
                child={Settings}
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
