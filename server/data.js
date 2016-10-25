const makes = [{
    "id": 10,
    "name": "Porsche"
}, {
    "id": 20,
    "name": "Nissan"
}, {
    "id": 30,
    "name": "BMW"
}, {
    "id": 40,
    "name": "Audi"
}, {
    "id": 50,
    "name": "Mazda"
}];

const models = [{
    "id": 100,
    "makeId": 10,
    "name": "911 Carrera 4s",
    "price": 297130,
    "imageUrl": "http://files1.porsche.com/filestore/image/multimedia/none/991-2nd-c4s-modelimage-sideshot/model/15bd09cf-553b-11e5-8c32-0019999cd470;s25/porsche-model.png"
}, {
    "id": 110,
    "makeId": 10,
    "name": "Cayenne GTS",
    "price": 171605,
    "imageUrl": "http://files3.porsche.com/filestore/image/multimedia/none/rd-2013-9pa-e2-2nd-gts-modelimage-sideshot/model/c287d350-5920-11e4-99aa-001a64c55f5c;s25/porsche-model.png"
}, {
    "id": 120,
    "makeId": 10,
    "name": "Panamera 4S",
    "price": 328160,
    "imageUrl": "http://files1.porsche.com/filestore/image/multimedia/none/970-g2-4s-modelimage-sideshot/model/a23b6da0-33b9-11e6-9225-0019999cd470;s25/porsche-model.png"
}, {
    "id": 210,
    "makeId": 20,
    "name": "Leaf",
    "price": 50000,
    "imageUrl": "http://o.aolcdn.com/commerce/autodata/images/USC10NIC161B021001.jpg"
}, {
    "id": 220,
    "makeId": 20,
    "name": "GT-R",
    "price": 180000,
    "imageUrl": "http://o.aolcdn.com/dims-shared/dims3/GLOB/crop/1280x720+0+104/resize/800x450!/format/jpg/quality/85/http://o.aolcdn.com/hss/storage/midas/55737528ce8b83620a84bfa35c05e152/201537017/2009-nissan-gtr.jpg"
}, {
    "id": 300,
    "makeId": 30,
    "name": "1",
    "price": 83000,
    "imageUrl": "http://www.bmw.com.au/content/dam/bmw/common/all-models/1-series/5-door/2015/at-a-glance/design-fw-exterieur-01.jpg/jcr:content/renditions/cq5dam.resized.img.585.low.time1447923462248.jpg"
}, {
    "id": 310,
    "makeId": 30,
    "name": "2",
    "price": 125000,
    "imageUrl": "http://www.bmw.com.au/content/dam/bmw/common/all-models/2-series/coupe/2013/at-a-glance/Exterieur-design-03.jpg/jcr:content/renditions/cq5dam.resized.img.585.low.time1470324214485.jpg"
}, {
    "id": 320,
    "makeId": 30,
    "name": "3",
    "price": 150000,
    "imageUrl": "http://www.bmw.com.au/content/dam/bmw/common/all-models/3-series/sedan/2015/at-a-glance/3-series-sedan-design.jpg/jcr:content/renditions/cq5dam.resized.img.585.low.time1447942773188.jpg"
}, {
    "id": 400,
    "makeId": 40,
    "name": "S5",
    "price": 165000,
    "imageUrl": "http://media.caranddriver.com/images/media/267365/2008-audi-s5-photo-105022-s-450x274.jpg"
}, {
    "id": 510,
    "makeId": 50,
    "name": "TT",
    "price": 40000,
    "imageUrl": "http://media.caranddriver.com/images/media/3124/2007-nissan-350z-photo-3786-s-429x262.jpg"
}, {
    "id": 520,
    "makeId": 50,
    "name": "MX-5",
    "price": 90000,
    "imageUrl": "http://www.mazda.com.au/assets/cars/allnewmx5/overview/standard-feature-panel/overview-roadster-gt.jpg"
}];

const featuredCar = {
    "modelId": 520,
    "review": "The Mazda MX-5 is a traditional two-seat sports car, with a lightweight body and rear-wheel drive. It has a folding, fabric roof and is among the least expensive convertibles. This fourth-generation MX-5 is fantastic fun to drive. Motoring magazine Wheels named it Car of the Year for 2016."
};

export default {makes, models, featuredCar};
