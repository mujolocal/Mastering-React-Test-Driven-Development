import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import {AppointmentDetailView} from "../src/AppointmentDetailView";

describe('AppointmentDetailView', () => {
    let container;
    const dummyCustomer =  {firstName: 'Charlie', lastName: "Nash", phoneNumber:'(554) 338-2121', stylist:"Maggie", service:"Beard Trim", notes:"yo no necesito el notes para yo tengo la tareia"};

    beforeEach(()=>{
        container = document.createElement('div');
    })
    it('render div ',
    ()=>{
        ReactDOM.render(<AppointmentDetailView />, container);
        expect(container.querySelector('div#appointmentDetailView')).not.toBeNull();
    }
    )
    it("make sure table exists, has 2 columns and 5 rows",()=>{
        const tableQuery = 'table#appointmentDetailViewTable';
        ReactDOM.render(<AppointmentDetailView />, container);
        expect(container.querySelector(tableQuery)).not.toBeNull();
        expect(container.querySelectorAll('th')).toHaveLength(2);
        expect(container.querySelectorAll('tr')).toHaveLength(6);
    })
    it("make sure customer data is filling up appropriate place on table ", ()=>{
            
        console.log(dummyCustomer.firstName);
        ReactDOM.render(<AppointmentDetailView customer={dummyCustomer}/>, container);
        expect(container.querySelector("td#customer")).toBe(`${dummyCustomer.firstName} ${dummyCustomer.lastName}`);
        expect(container.querySelector("td#phone_number")).toBe(dummyCustomer.phoneNumber);
        expect(container.querySelector("td#stylist")).toBe(dummyCustomer.stylist);
        expect(container.querySelector('td#service')).toBe(dummyCustomer.service);
        expect(container.querySelector('td#notes')).toBe(dummyCustomer.notes);
    })

})