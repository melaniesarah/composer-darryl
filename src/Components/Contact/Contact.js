import React from 'react';
import ContactForm from './ContactForm';
import contactDarrylJohnson from './contact_darryl_johnson.gif';
import darryl4 from './darryl4.jpg';
import contactFormText from './contact_form.gif';
import './Contact.css';

function Contact() {
    return (
        <div className="content">
            <div className="main-content">
                <table><tr><td>
                    <h1><img src={contactDarrylJohnson} alt="Contact Darryl Johnson II" /></h1>
                    </td><td rowspan="2">
                        &nbsp;&nbsp;&nbsp;&nbsp;<img src={darryl4} width="405" alt="Darryl Johnson II" style={{float: 'right'}} />
                    </td></tr>
                    <tr><td>
                        <div className="textblock black">
                            If you have questions about:<br /><br />
                            <ul>- Commissioning new works</ul>
                            <ul>- Purchasing existing works</ul>
                            <ul>- Schedule a guest appearance</ul>
                            <ul>- Original Film/Multimedia music</ul>
                            <ul>- Or anything else!</ul><br />
                            <span className="grey">Darryl Johnson II, Composer</span><br />
                            email  <a href="mailto:darryl@darryl2.com" className="grey">darryl@darryl2.com</a>
                        </div> 
                    </td></tr>
                </table>

                <span className="clear2"></span>

                <h2><img src={contactFormText} alt="Contact Form" /></h2>
                <br /><p style={{color: 'red'}}>Don't forget to check the Anti-Spam measure before sending</p>

                <ContactForm />
                
            </div>
        </div>
    );
}

export default Contact;
