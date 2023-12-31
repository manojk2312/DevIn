import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


const PrivateRoute = ({ component: Component, auth: { isAuthenticated, loading }, ...rest }) => {


    if (!isAuthenticated && !loading) {
        return <Redirect to='/login' />;
    } else {
        return <Component />;
    }
}



// (
//     <Route {...rest} render={props => !isAuthenticated && !loading ? (<Navigate to='/login' />)
//         : (<Component {...props} />)} />
// )

PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    auth: state.auth
})


export default connect(mapStateToProps)(PrivateRoute);