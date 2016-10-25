import React from "react";
import ReactDOM from "react-dom";
import {Router, IndexRoute, Route} from 'react-router';
import {store} from "./store";
import { Provider } from 'react-redux';
import Pages from "./ui";

class Logo extends React.Component {
    render() {
        return <img className = "center" {...this.props }
        />;
    }
}

Logo.propTypes = {
    src: React.PropTypes.string.isRequired
};

class Label extends React.Component {
    render() {
        return <p className = "default-label" {...this.props } > Hello World < span className = "name" > {
            this.props.name
        } </span> </p>;
    }
}

Label.propTypes = {
    name: React.PropTypes.string
};

ReactDOM.render((
  <Provider store={store}>
		<Router>
            <Route path="/" component={Pages.StartSection}>
                <IndexRoute component={Pages.Home} />
                <Route path="search" component={Pages.Search}></Route>
                <Route path="make/model/:id" component={Pages.Details}></Route>
                <Route path="about" component={Pages.About}/>
            </Route>
        </Router>
        </Provider>
	), document.getElementById('app'));

console.log("Anon 2");
