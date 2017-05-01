import dispatcher from "../dispatcher";
import axios from 'axios';

const baseEndPoint = 'http://localhost:8000';

export function boughtUpsale(id) {
    dispatcher.dispatch({
        type: "BOUGHT_UPSALE",
        id
    });
}


export function getUpsalesFromDB() {

    axios.get(baseEndPoint + '/upsales').then(function (response) {
        console.log(response.data);
        let upsales = [];
        response.data.forEach(function (obj, index) {
            obj.selected = false;
            obj.price = parseFloat(obj.price);
            upsales.push(obj);
        });
        console.log('action getUpsalesFromDB ');
        dispatcher.dispatch({type: "GET_DB_UPSALES", upsales: upsales});


    }).catch(function (error) {
        console.log(error);
    });


}