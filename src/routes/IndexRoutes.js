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
import AuthRoutes from './AuthRoutes';
import Tables from '../pages/Apps/Tables';
import Expense from '../pages/Apps/Expense';
import Budgets from '../pages/Apps/Budgets';
import Loading from '../pages/Loading/Loading';
import ForgotPassword from '../pages/Auth/ForgorPassword';

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

            <Route exact path="/loading">
                <Loading />
            </Route>

            <AuthRoutes exact path="/auth/login"
                comp={AuthLayouts}
                child={Login}
                setAuth={setAuth}
                auth={auth}
            >
            </AuthRoutes>
            <AuthRoutes exact path="/auth/register"
                comp={AuthLayouts}
                child={Register}
                setAuth={setAuth}
                auth={auth}
            >
            </AuthRoutes>
            <AuthRoutes exact path="/auth/forgot-password"
                comp={AuthLayouts}
                child={ForgotPassword}
                setAuth={setAuth}
                auth={auth}
            >
            </AuthRoutes>
            <Redirect from='/auth' to="/auth/login" />

            <PrivateRoutes exact path="/dashboard"
                comp={AppLayouts}
                child={Dashboard}
                setAuth={setAuth}
                auth={auth}
            />

            <PrivateRoutes exact path="/expense"
                comp={AppLayouts}
                child={Expense}
                setAuth={setAuth}
                auth={auth}
            />

            <PrivateRoutes exact path="/budgets"
                comp={AppLayouts}
                child={Budgets}
                setAuth={setAuth}
                auth={auth}
            />

            <PrivateRoutes exact path="/settings"
                comp={AppLayouts}
                child={Settings}
                setAuth={setAuth}
                auth={auth}
            />

            <PrivateRoutes exact path="/tables"
                comp={AppLayouts}
                child={Tables}
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
