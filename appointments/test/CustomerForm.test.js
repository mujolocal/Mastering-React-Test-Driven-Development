import React from "react";
import { createContainer } from "./domManipulator";
import {CustomerForm} from '../src/CustomerForm';



describe('CustomerForm', ()=>{
    let render, container;

    beforeEach(()=>{({render, container} = createContainer())});
    const form = (id)=>container.querySelector(`form[id="${id}"]`);

    const expectToBeInputFieldOfTypeText = formElement =>{
    expect(formElement).not.toBeNull();
        expect(formElement.tagName).toEqual('INPUT');
        expect(formElement.type).toEqual('text');
}
    const firstNameField = () => form('customer').elements.firstName;
     
    it('renders a form', ()=>{
        render(<CustomerForm />);
        expect(
            form('customer')
        ).not.toBeNull();
    });
    it('render the first name field as a text box', ()=>{
        render(<CustomerForm/>);
        expectToBeInputFieldOfTypeText(firstNameField());
    });
    it('includes the existing value for the first name', ()=>{
        render(<CustomerForm firstName="Ashley"/>);
        expect(firstNameField().value).toEqual("Ashley");

    });

    const labelFor = formElement => container.querySelector(`label[for="${formElement}"]`);
    it('renders a label for the first name field', () => {
        render(<CustomerForm label="whatever"/>);
        expect(labelFor('firstName')).not.toBeNull();
        expect(labelFor('firstName').textContent).toEqual('Firstname');
    });
})