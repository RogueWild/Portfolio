import React, { useState, useEffect } from 'react';

import Contact from '../comps/Contact';

export default function ContactPage({ onFormSubmit }) {
    return (
        <div className="contactPageMain">
            <div className="contactPage">
                <div className="contact">
                    <Contact
                    onFormSubmit={onFormSubmit}
                    />
                </div>
            </div>
        </div>
    )
}