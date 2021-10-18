import React from "react";
import ReactDOM from "react-dom";


export const  AppointmentDetailView = ({customer})=>{

    return(
    <div id="appointmentDetailView">

        <table id='appointmentDetailViewTable'>
        <tbody>
            <tr>
                <th>Item</th>
                <th>Details</th>
            </tr>
            <tr>
                <td>Customer</td>
                <td id='customer'>{customer.firstName} {customer.lastName}</td>
            </tr>
            <tr>
                <td>Phone Number</td>
                <td id='phone_number'>{customer.phoneNumber}</td>
            </tr>
            <tr>
                <td>Stylist</td>
                <td id='stylist'>{customer.stylist}</td>
            </tr>
            <tr>
                <td>Service</td>
                <td id='service'>{customer.service}</td>
            </tr>
            <tr>
                <td>notes</td>
                <td id='notes'>{customer.notes}</td>
            </tr>
            </tbody>
        </table>
        
    </div>
)
}