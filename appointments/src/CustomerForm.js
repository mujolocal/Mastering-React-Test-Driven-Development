import React from 'react';

export const CustomerForm = ({firstName}) => <form id="customer">
    <label htmlFor="firstName">Firstname</label>
    <input type="text" name="firstName" id="firstName" value={firstName} readOnly/>
</form>;