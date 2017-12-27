import React from 'react';
import Adapter from 'enzyme-adapter-react-16'
import { configure } from 'enzyme';
configure({ adapter: new Adapter() });

import {shallow, mount, render} from 'enzyme';

import jsdom from 'jsdom'
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.document = doc;
global.window = doc.defaultView;

import PassengerList from '../Booking/Passengers/PassengerList';
import Passenger from '../Booking/Passengers/Passenger';


describe('A suite', function () {

    let testStore = {};

    beforeEach( () => {
        testStore = {
            passengers: [
                {
                    id: 0,
                    name:'',
                    surname:'',
                    humanID: 1,
                    active: true,
                    type: 'ADT',
                    insuranceInfo :0,
                    totalBags: 0
                },
                {
                    id: 1,
                    name:'',
                    surname:'',
                    humanID: 2,
                    active: true,
                    insuranceInfo :0,
                    totalBags: 0,
                    type: 'ADT'
                }]
        }
    });


/*
    it('should render without throwing an error', function () {
        console.log('the store');
        console.log(testStore);
        expect(shallow(<PassengerList otastore={testStore} />).contains("Fill the passenger data")).toBe(true);
    });
*/


    it('should have  2 passengers', function () {
        const wrapper = mount(<PassengerList otastore={testStore}/>);
        expect(wrapper.find('.passengerCompo').length).toBe(2);
        expect(wrapper.find(Passenger).length).toBe(2);
    });



    it('should have  3 passengers', function () {
        const wrapper = mount(<PassengerList otastore={testStore}/>);
        expect(wrapper.find('.passengerCompo').length).toBe(2);
        expect(wrapper.find(Passenger).length).toBe(2);

        wrapper.find('.btnAddPassenger').simulate('click');
        expect(wrapper.find('.passengerCompo').length).toBe(3);

    });




});