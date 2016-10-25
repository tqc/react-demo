
function handleResponse(callback) {
    return function(response) {
        if (response.status >= 200 && response.status < 300) {
            response.json().then((json) => callback(null, json));
        } else {
            var error = new Error(response.statusText);
            error.response = response;
            callback(error);
        }
    };
}

function getFeaturedCar(callback) {
    window.fetch("/api/featured")
        .then(handleResponse(callback));
}

function getMakes(callback) {
    window.fetch("/api/makes")
        .then(handleResponse(callback));
}

function getModels(makeId, callback) {
    window.fetch("/api/make/" + makeId + "/models")
        .then(handleResponse(callback));
}

function getModel(modelId, callback) {
    window.fetch("/api/model/" + modelId)
        .then(handleResponse(callback));
}

export default { getFeaturedCar, getMakes, getModels, getModel };
