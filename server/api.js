import Data from "./data";

function getFeaturedCar(callback) {
    var car = Data.featuredCar;
    car.model = Data.models.find((m) => m.id == car.modelId);
    car.make = Data.makes.find((m) => m.id == car.model.makeId);
    callback(null, car);
}

function getMakes(callback) {
    callback(null, Data.makes);
}

function getModels(makeId, callback) {
    callback(null, Data.models.filter((m) => m.makeId == makeId));
}

function getModel(modelId, callback) {
    var model = Data.models.find((m) => m.id == modelId);
    model.make = Data.makes.find((m) => m.id == model.makeId);
    callback(null, model);
}

export default {getFeaturedCar, getMakes, getModels, getModel};
