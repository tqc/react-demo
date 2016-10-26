import React from "react";

class StartPage extends React.Component {

    render() {
        return (
            <div>
                <div className="topnav">
                    <h1>React Demo</h1>
                </div>
                <div className="content">
                    <p>This small demo app was developed by <a href="http://tqclarkson.com">Tom Clarkson</a> to fix a shortage of shareable React code in his <a href="http://tqclarkson.com/projects">portfolio</a> </p>
                </div>

                <div className="content">
                    <p>
                        See the code at <a href="https://github.com/tqc/react-demo">https://github.com/tqc/react-demo</a>
                    </p>
                </div>

                <div className="content">
                <p>Icons from <a href="https://linearicons.com/">https://linearicons.com/</a></p>
                </div>
            </div>
        );
    }
}

export default StartPage;