import {
    Router,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import { useDispatch, useSelector } from 'react-redux';

import { history } from './_helpers';
import { alertActions } from './_actions';
import { PrivateRoute } from './_components';
import { Home } from './pages/home';
import { Login } from './pages/login';
import { useEffect } from 'react';

function App() {
    const alert = useSelector(state => state.alert);
    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }, []);

    return (
        <Container>
            {alert.message &&
                <div className={`alert ${alert.type}`}>{alert.message}</div>
            }
            <Router history={history}>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <PrivateRoute exact path="/" component={Home} />
                    <Redirect from="*" to="/" />
                </Switch>
            </Router>
        </Container>
    );
}

export default App;
