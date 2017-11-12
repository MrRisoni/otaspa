import React from 'react';
import Adapter from 'enzyme-adapter-react-16'
import { configure } from 'enzyme';
configure({ adapter: new Adapter() });

import {shallow, mount, render} from 'enzyme';

import PassengerList from '../Booking/PassengerList';
import Passenger from '../Booking/Passenger';


describe('A suite', function () {
    it('should render without throwing an error', function () {
        expect(shallow(<PassengerList/>).contains("Fill the passenger data")).toBe(true);
    });


    it('should have  2 passengers', function () {
        const wrapper = mount(<PassengerList/>);
        expect(wrapper.find('.passengerCompo').length).toBe(2);
        expect(wrapper.find(Passenger).length).toBe(2);
    });



    it('should have  3 passengers', function () {
        const wrapper = mount(<PassengerList/>);
        expect(wrapper.find('.passengerCompo').length).toBe(2);
        expect(wrapper.find(Passenger).length).toBe(2);

        wrapper.find('.btnAddPassenger').simulate('click');
        expect(wrapper.find('.passengerCompo').length).toBe(3);

    });




});