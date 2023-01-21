const Contact = () => {
    return ( 
    
    <div className="contact-page">
    <div className="blurred-bg"></div>
        <div className="contact-section container">
            <h1>Date de contact</h1>
            <div className="date">
                <p>Email: fake.email@gmail.com</p>
                <p>Mobil: 0712345678</p>
            </div>
                <div className="socials">
                
                    <a className="socials-btn" href="facebook.com"><div id='facebook-btn' ></div></a>
                    <a className="socials-btn" href="instagram.com"><div id='instagram-btn' ></div></a>
                </div>
        </div>
        <form className="container">
            <h1 className="mb-5 mt-5">Formular de contact</h1>
            <div className="mb-3">
                <label for='email' className="form-label">Adresa de email</label>
                <input type={'email'} className="form-control" id="email"></input>
            </div>
            <div className="mb-3">
                <label for='name' className="form-label">Nume</label>
                <input type={'text'} className="form-control" id="name"></input>
            </div>
            <div className="mb-3">
                <label for='name' className="form-label">Nume</label>
                <input type={'text'} className="form-control" id="name"></input>
            </div>
            <div className="mb-3">
                <label for='name' className="form-label">Mesaj</label>
                <textarea class="form-control" aria-label="Mesajul tau..."></textarea>
            </div>
                
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
    
    );
}
 
export default Contact;