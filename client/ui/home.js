import React from "react";
import { connect } from 'react-redux';

class StartPage extends React.Component {
    componentWillMount() {
        this.context.store.dispatch({
            type: "FETCH_FEATURED"
        });
    }
    render() {
        let content;
        if (this.props.car) content = (
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
            <div className="review">
                <p>{ this.props.car.review }</p>
            </div>
            </div>
            );

        return (
            <div>
            <div className="topnav">
            <h1>React Demo</h1>
            </div>
                {content}
            </div>
        );
    }
}

StartPage.propTypes = {
    car: React.PropTypes.object,
    //  onTodoClick: React.PropTypes.func.isRequired
};

StartPage.contextTypes = {
    router: React.PropTypes.object,
    store: React.PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    if (!state.featuredCar) return {};
    return {
        car: state.featuredCar,
        make: state.entities.make[state.featuredCar.make],
        model: state.entities.model[state.featuredCar.model],
    };
};



const mapDispatchToProps = (dispatch) => {
    return {
    };
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StartPage);
