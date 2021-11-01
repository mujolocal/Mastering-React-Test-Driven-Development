import React, {useState} from 'react';

export const CustomerForm = ({firstName, onSubmit}) => {
    console.log(firstName)
    const [customer, SetCustomer] = useState({ firstName });
    const handleChangeFirstName = ({target}) => SetCustomer(customer =>({
        ...customer,
        firstName: target.value
    }));
    return <form id="customer" onSubmit={
        ()=>onSubmit(customer)}>
        
        <label htmlFor="firstName">firstName</label>
        <input type="text" name="firstName" id="firstName" value={firstName} onChange={handleChangeFirstName} />
    </form>
    };