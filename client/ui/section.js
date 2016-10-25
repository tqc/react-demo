import React from "react";
import {Link} from 'react-router';

class StartSection extends React.Component {

    render() {
        return (
            <div className="appsection">
                <div className="mainpanel">

                {this.props.children}
                <div className="bottomtabs">
                    <Link to="/">
                        <span className="lnr lnr-home"></span>
                        <span className="caption">Main</span>
                    </Link>
                    <Link to="/search">
                        <span className="lnr lnr-magnifier"></span>
                        <span className="caption">Search</span>
                    </Link>
                    <Link to="/about">
                        <span className="lnr lnr-question-circle"></span>
                        <span className="caption">About</span>
                    </Link>
                </div>
            </div>
            </div>
        );
    }
}

export default StartSection;