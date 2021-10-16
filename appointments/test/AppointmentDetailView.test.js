import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import {AppointmentDetailView} from "../src/AppointmentDetailView";

describe('AppointmentDetailView', () => {
    let container;
    beforeEach(()=>{
        container = document.createElement('div');
    })
    it('render div ',
    ()=>{
        ReactDOM.render(<AppointmentDetailView />, container);
        expect(container.querySelector('div#appointmentDetailView')).not.toBeNull();
    }
    )

})