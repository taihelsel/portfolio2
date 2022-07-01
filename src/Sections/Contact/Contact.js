import "./Contact.css";
import { contact } from "../../portfolioInfo";
const { firstname, lastname, email } = contact;
function Contact() {
    return (
        <section id="Contact">
            <div className="section-content">
                <div className="section-title">
                    <h1>Contact</h1>
                    <hr />
                </div>
            </div>
            <div id="contact-content">
                <form id="contact-form">
                    <div className="contact-form-row">
                        <div className="contact-form-input-wrapper">
                            <h3>Your Name</h3>
                            <input type="text" placeholder={`${firstname} ${lastname}`} />
                        </div>
                        <div className="contact-form-input-wrapper">
                            <h3>Email Address</h3>
                            <input type="text" placeholder={email} />
                        </div>
                    </div>
                    <div className="contact-form-row">
                        <div className="contact-form-input-wrapper">
                            <h3>Message</h3>
                            <textarea rows="10" type="text" placeholder="Do you have a question, or proposal ? Let's setup a time to chat." />
                        </div>
                    </div>
                    <button id="contact-form-submit">
                        SEND
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact;