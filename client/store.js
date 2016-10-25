import { createStore } from 'redux';
import { normalize, Schema, arrayOf } from 'normalizr';
import merge from 'lodash/merge';

import API from "./api";

const initialState = {
    makes: [],
    selectedMake: undefined,
    models: [],
    featuredCar: undefined,
    entities: {
        make: {},
        model: {}
    },

};

const schema = {
    make: new Schema('make'),
    model: new Schema('model'),
    car: new Schema('car')
};

schema.car.define({
    make: schema.make,
    model: schema.model
});

schema.model.define({
    make: schema.make,
});

let store;

function demoReducer(state, action) {
    if (typeof state === 'undefined') {
        return initialState;
    }
    switch (action.type) {
    case 'MAKE_CHANGED':
        if (action.id) {
            API.getModels(action.id, function(err, models) {
                if (err) {
                    alert("Something went wrong");
                    return;
                }
                store.dispatch({
                    type: "RECEIVE_MODELS",
                    make: action.id,
                    models
                });
            });
        }
        return Object.assign({}, state, {
            selectedMake: action.id,
            selectedModel: undefined,
            models: action.id ? state.entities.make[action.id].models : []
        });
    case 'MODEL_CHANGED':
        return Object.assign({}, state, {
            selectedModel: action.id
        });
    case 'FETCH_FEATURED':
        API.getFeaturedCar(function(err, car) {
            if (err) {
                alert("Something went wrong");
                return;
            }
            store.dispatch({
                type: "RECEIVE_FEATURED",
                car
            });
        });
        return state;
    case "RECEIVE_FEATURED": {
        action.car.id = 1;
        let updates = normalize(action.car, schema.car);
        updates.featuredCar = updates.entities.car[1];
        delete updates.entities.car;

        return merge({}, state, updates);
    }
    case 'FETCH_MAKES':
        API.getMakes(function(err, makes) {
            if (err) {
                alert("Something went wrong");
                return;
            }
            store.dispatch({
                type: "RECEIVE_MAKES",
                makes
            });
        });
        return state;
    case "RECEIVE_MAKES": {
        let updates = normalize(action.makes, arrayOf(schema.make));
        updates.makes = updates.result;
        delete updates.result;

        return merge({}, state, updates);
    }
    case 'FETCH_MODEL':
        API.getModel(action.id, function(err, model) {
            if (err) {
                alert("Something went wrong");
                return;
            }
            store.dispatch({
                type: "RECEIVE_MODEL",
                model
            });
        });
        return state;
    case "RECEIVE_MODEL": {
        let make = Object.assign({}, state.entities.make[action.make]);
        console.log(make);
        console.log(action);
        let updates = normalize(action.model, schema.model);


        delete updates.result;

        console.log(updates);


        return merge({}, state, updates);
    }
    case "RECEIVE_MODELS": {
        let make = Object.assign({}, state.entities.make[action.make]);
        console.log(make);
        console.log(action);
        let updates = normalize(action.models, arrayOf(schema.model));
        updates.entities.make = {};
        updates.entities.make[action.make] = Object.assign({}, state.entities.make[action.make], {
            models: updates.result
        });
        delete updates.result;

        console.log(updates);


        return merge({}, state, updates);
    }
    default:
        return state;
    }
}

store = createStore(demoReducer, initialState);

export {store};