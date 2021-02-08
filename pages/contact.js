import React, { useState, useEffect } from 'react';

import Contact from '../comps/Contact';

export default function ContactPage({ }) {
    return (
        <div className="contactPageMain">
            <div className="contactPage">
                <div className="contact">
                    <Contact />
                </div>
            </div>
        </div>
    )
}