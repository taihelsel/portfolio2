import "./Contact.css";
import { useState } from "react";
import { contact } from "../../portfolioInfo";
const { firstname, lastname, email, emailType } = contact;
function Contact() {
    const [nameInput, setNameInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [messageInput, setMessageInput] = useState("");
    const handleFormSubmit = e => {
        e.preventDefault();
        const subject = `${nameInput} has sent you a message from your portfolio`;
        const body = `Email:%0D%0A${emailInput}%0D%0A%0D%0AMesssage:%0D%0A${messageInput}%0D%0A%0D%0A`;
        if (emailType === "local") {
            window.open(`mailto:${email}?subject=${subject}&body=${body}`);
        }
    }
    return (
        <section id="Contact">
            <div className="section-content">
                <div className="section-title">
                    <h1>Contact</h1>
                    <hr />
                </div>
            </div>
            <div id="contact-content">
                <form id="contact-form" onSubmit={handleFormSubmit}>
                    <div className="contact-form-row">
                        <div className="contact-form-input-wrapper">
                            <h3>Your Name</h3>
                            <input onChange={(e) => { setNameInput(e.currentTarget.value) }} value={nameInput} type="text" placeholder={`${firstname} ${lastname}`} />
                        </div>
                        <div className="contact-form-input-wrapper">
                            <h3>Email Address</h3>
                            <input onChange={(e) => { setEmailInput(e.currentTarget.value) }} value={emailInput} type="text" placeholder={email} />
                        </div>
                    </div>
                    <div className="contact-form-row">
                        <div className="contact-form-input-wrapper">
                            <h3>Message</h3>
                            <textarea onChange={(e) => { setMessageInput(e.currentTarget.value) }} value={messageInput} rows="10" type="text" placeholder="Do you have a question, or proposal ? Let's setup a time to chat." />
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