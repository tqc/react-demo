import React from "react";
import { connect } from 'react-redux';

class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.makeChanged = this.makeChanged.bind(this);
        this.modelChanged = this.modelChanged.bind(this);
        this.goClicked = this.goClicked.bind(this);
    }
    componentWillMount() {
        this.context.store.dispatch({
            type: "FETCH_MAKES"
        });
    }
    render() {
        return (
            <div>
            <div className="topnav">
                    <h1>Search</h1>
            </div>

            <div className="formrow">
                <label htmlFor="ddMake">Select Make</label>
                <select value={this.props.selectedMake} id="ddMake" onChange={this.makeChanged}>
                    <option></option>
                    {this.props.makes.map((m) => (<option key={m.id} value={m.id}>{m.name}</option>))}
                </select>
            </div>

            <div className="formrow">
                <label htmlFor="ddModel">Select Model</label>
                <select value={this.props.selectedModel} id="ddModel" onChange={this.modelChanged}>
                    <option></option>
                    {this.props.models.map((m) => (<option key={m.id} value={m.id}>{m.name}</option>))}
                </select>
            </div>
            <div className="formrow">
                <label></label>
                <button className="searchbutton" disabled={!this.props.selectedModel} onClick={this.goClicked}>Go</button>
            </div>
            </div>
            );
    }
    goClicked() {
        this.context.router.push('/make/model/' + this.props.selectedModel);
    }
    makeChanged(event) {
        this.props.onMakeChanged(event.target.value || undefined);
    }
    modelChanged(event) {
        this.props.onModelChanged(event.target.value || undefined);
    }
}

SearchPage.propTypes = {
    car: React.PropTypes.object.isRequired,
    //  onTodoClick: React.PropTypes.func.isRequired
};

SearchPage.contextTypes = {
    router: React.PropTypes.object,
    store: React.PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    var make = state.entities.make[state.selectedMake];
    var models = make && make.models ? make.models.map((m) => state.entities.model[m]) : [];
    return {
        car: state.featuredCar,
        selectedMake: state.selectedMake,
        selectedModel: state.selectedModel,
        makes: state.makes.map((m) => state.entities.make[m]),
        models: models,
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        onMakeChanged: (id) => {
            dispatch({
                type: 'MAKE_CHANGED',
                id
            });
        },
        onModelChanged: (id) => {
            dispatch({
                type: 'MODEL_CHANGED',
                id
            });
        } };
};


export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);