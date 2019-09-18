import React from 'react';

export default function Delivery({address, companyName, contact}) {
    return (
        <div>
            <h1>{address}</h1>
            <h4>{companyName}</h4>
            <p>{contact}</p>
        </div>
    )
}