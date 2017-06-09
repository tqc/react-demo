import React from "react";
import {Link} from 'react-router';
import { connect } from 'react-redux';

class DetailPage extends React.Component {
    componentWillMount() {
        this.context.store.dispatch({
            type: "FETCH_MODEL",
            id: this.props.params.id
        });
    }
    render() {
        var title = "Loading Car Details";
        var content;
        if (this.props.make && this.props.model) {
            title = this.props.make.name + " " + this.props.model.name;

            content = (
            <div>
            <img className="mainimg" src={this.props.model.imageUrl} />
            <table className="detailtable">
                <tr>
                    <th>Make</th>
                    <td>{this.props.make.name}</td>
                </tr>
                <tr>
                    <th>Model</th>
                    <td>{this.props.model.name}</td>
                </tr>
                <tr>
                    <th>Price</th>
                    <td>{this.props.model.price}</td>
                </tr>
            </table>
            </div>
            );
        }
        return (
            <div>
            <div className="topnav">
                <Link className="backlink" to="/search">
                    <span className="lnr lnr-chevron-left"></span>
                    <span className="caption">Back</span>
                </Link>
                    <h1>{title}</h1>
            </div>
            {content}
            </div>
        );
    }
}

DetailPage.propTypes = {
    make: React.PropTypes.object,
    model: React.PropTypes.object,
};

DetailPage.contextTypes = {
    router: React.PropTypes.object,
    store: React.PropTypes.object.isRequired
};

const mapStateToProps = (state, props) => {
    var model = state.entities.model[props.params.id];
    var make = model ? state.entities.make[model.make] : undefined;
    return {
        make,
        model,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch({
                type: 'TOGGLE_TODO',
                id
            });
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailPage);
