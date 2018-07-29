import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

//Implement Routing at App entry point
class App extends Component{

    render(){
        return(
            <Router history = {hashHistory}>
                <Route path='/' component={Container}>
                    <IndexRoute component={Home} />
                    <Route path='/address' component={Address} />
                    <Route path='*' component={NotFound} />
                </Route>
            </Router>
        );
    }
}
//Dummy Componenets
const Home = () => <h1>Hello from Home!</h1>
const Address = () => <h1>We are located at 555 Jackson St.</h1>
const NotFound = () => <h1>Not Found</h1>

//Navigation Component - IndexRoute will create navigation to child component
const Nav = () => (
    <div>
        <Link to='/'>Home</Link>&nbsp;
        <Link to='/address'>Address</Link>
    </div>
)

//Any nested elements will have the routes passed down via props.children
const Container = (props) => <div>
    <Nav />
    {props.children}
</div>

export default App
