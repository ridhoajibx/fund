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
import { connect } from 'react-redux';

const IndexRoutes = (props) => {
    const { auth } = props;
    return (
        <Switch>
            <Route exact path="/">
                <MainLayouts
                    auth={auth}
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
                auth={auth}
            >
            </AuthRoutes>
            <AuthRoutes exact path="/auth/register"
                comp={AuthLayouts}
                child={Register}
                auth={auth}
            >
            </AuthRoutes>
            <AuthRoutes exact path="/auth/forgot-password"
                comp={AuthLayouts}
                child={ForgotPassword}
                auth={auth}
            >
            </AuthRoutes>
            <Redirect from='/auth' to="/auth/login" />

            <PrivateRoutes exact path="/dashboard"
                comp={AppLayouts}
                child={Dashboard}
                auth={auth}
            />

            <PrivateRoutes exact path="/expense"
                comp={AppLayouts}
                child={Expense}
                auth={auth}
            />

            <PrivateRoutes exact path="/budgets"
                comp={AppLayouts}
                child={Budgets}
                auth={auth}
            />

            <PrivateRoutes exact path="/settings"
                comp={AppLayouts}
                child={Settings}
                auth={auth}
            />

            <PrivateRoutes exact path="/tables"
                comp={AppLayouts}
                child={Tables}
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

const mapStateToProps = (state) => {
    return {
        auth: state,
    }
}

export default connect(mapStateToProps, null) (IndexRoutes);
