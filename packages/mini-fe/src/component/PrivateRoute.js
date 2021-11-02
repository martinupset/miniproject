const React = require("react");
const { Route, Redirect } = require("react-router-dom");
const {fakeAuth} = require("./fakeAuth")


const PrivateRoute = (({component: Component, auth, ...rest}) => {
    console.log(rest)
    return (
        <Route
            {...rest}
            render = {
                props => {           
                    return( auth ? (<Component />) 
                    : (<Redirect to = {{pathname:'/login',state:{from:props.location.pathname}}}/>))
                }
            }
        />
    )
})

export default PrivateRoute