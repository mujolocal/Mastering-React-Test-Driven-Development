import React from "react";
import { createContainer } from "./domManipulator";
import {CustomerForm} from '../src/CustomerForm';
import ReactTestUtils from 'react-dom/test-utils';



describe('CustomerForm', ()=>{
    const labelFor = formElement => container.querySelector(`label[for="${formElement}"]`);
    const field = name => form('customer').elements[name];
    it('renders a form', ()=>{
            render(<CustomerForm />);
            expect(
                form('customer')
            ).not.toBeNull();
        });
    const itRednersAsATextBox = (fieldName)=>{it(`render the ${fieldName} field as a text box`, ()=>{
                render(<CustomerForm/>);
                expectToBeInputFieldOfTypeText(field(fieldName));
            });
        }
    const itIncludesTheExistingValue = (fieldName) =>{ it(`includes the existing value for ${fieldName}`, ()=>{
                render(<CustomerForm {...{[fieldName]:'value'}}/>);
                expect(field(fieldName).value).toEqual('value');
            });
        }
    const itRendersLabel = (fieldName) =>{
            
            it('renders a label for the first name field', () => {
                render(<CustomerForm label="whatever"/>);
                expect(labelFor(fieldName)).not.toBeNull();
                expect(labelFor(fieldName).textContent).toEqual(fieldName);
            });
        }
    const itSavesExitingValue = (fieldName) =>{
            it.only('saves existing first name when submitted; here we are basically testing that the button works runs the function so if it runs the function we should get back a thing... but lets change it so that the', async () =>{
                render(
                    <CustomerForm
                    {...{[fieldName]:'value'}}
                    onSubmit={({fieldName})=>expect(firstName).toEqual('value')}/>
                )
                expect.hasAssertions();
                await ReactTestUtils.Simulate.submit(form('customer'))
            });
        }   
    describe('first name field',()=>{
        itRednersAsATextBox('firstName')
        itIncludesTheExistingValue('firstName')
        itRendersLabel('firstName')
        itSavesExitingValue('firstName')


        it('saves new first name when submitted', async ()=>{
            expect.hasAssertions();
            render(<CustomerForm
                firstName="Ashley"
                onSubmit={({ firstName })=> expect(firstName).toEqual('Jamie')}/>);
            await ReactTestUtils.Simulate.change(field('firstName'),{
                target: {value: 'Jamie'}
            });
            await ReactTestUtils.Simulate.submit(form('customer'));
        });

    });
    describe('last name field', ()=>{});
    describe('Phone number field',()=>{});
    let render, container;

    beforeEach(()=>{({render, container} = createContainer())});
    const form = (id)=>container.querySelector(`form[id="${id}"]`);

    const expectToBeInputFieldOfTypeText = formElement =>{
    expect(formElement).not.toBeNull();
        expect(formElement.tagName).toEqual('INPUT');
        expect(formElement.type).toEqual('text');
    }
    

     
    
});