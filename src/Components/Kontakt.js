import React, { useState } from 'react';
import emailjs from 'emailjs-com'; 
import "../css/kontakt.css";
import { useNavigate } from 'react-router-dom';


const Kontakt = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    consent: false
  });
   function GoToPolityka(){
    navigate('/polityka-prywatnosci');
  }
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, subject, message, consent } = formData;

    if (!name || !email || !phone || !subject || !message || !consent) {
      alert("Proszę wypełnić wszystkie pola i zaznaczyć zgodę.");
      return;
    }
    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      formData,
      process.env.REACT_APP_EMAILJS_USER_ID
    ).then((response) => {
      alert('Wiadomość wysłana!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        consent: false
      });
    }).catch((error) => {
      console.error('Błąd wysyłania:', error);
      alert('Nie udało się wysłać wiadomości.');
    });
  };
  return (
    <div className='kontakt-container'>
      <div className='kontakt-info-container'>
        <div className='kontakt-info'>
          <img src='photos/Clock.png' alt='clock' />
          <div className='block'>
            <p>Godziny otwarcia:</p>
            <p>Pon-Sob.: 8:00-18:00</p>
          </div>
        </div>
        <div className='kontakt-info'>
          <img src='photos/Phone.png' alt='phone' />
          <div className='block'>
            <p>Tel:</p>
            <p>+48 691-839-928</p>
          </div>
        </div>
        <div className='kontakt-info'>
          <img src='photos/Mail.png' alt='mail' />
          <div className='block'>
            <p>E-mail:</p>
            <p>marpro.kontakt@gmail.com</p>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='kontakt-send-msg'>
          <div className='kontakt-header'>
            <p>Wyślij wiadomość</p>
          </div>
          <div className='kontakt-row-info-client'>
            <input
              className='placeholder-details'
              name='name'
              placeholder='Imię i Nazwisko'
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              className='placeholder-details'
              name='email'
              placeholder='E-mail'
              type='email'
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              className='placeholder-details'
              name='phone'
              placeholder='Telefon'
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className='kontakt-row-theme'>
            <input
              className='placeholder-theme'
              name='subject'
              placeholder='Temat'
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className='kontakt-row-message'>
            <textarea
              className='placeholder-msg'
              name='message'
              placeholder='Treść wiadomości'
              value={formData.message}
              onChange={handleChange}
              required
            />          </div>
          <div className='checkox-test'>
            <label className='checkbox-container'>
              <input
                type='checkbox'
                name='consent'
                checked={formData.consent}
                onChange={handleChange}
                required
              />
              <span className='PolitykaPrywatnośći'>Wysyłając Formularz Kontaktowy dobrowolnie wyrażasz zgodę na przetwarzanie swoich danych osobowych w celu dokonywania kontaktu. Masz prawo cofnięcia zgody w dowolnym momencie bez wpływu na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej cofnięciem. Masz prawo dostępu do treści swoich danych i ich sprostowania, usunięcia, ograniczenia przetwarzania, oraz prawo do przenoszenia danych na zasadach zawartych w <a onClick={GoToPolityka} className='link-polityka'>polityce prywatności</a>.</span>
            </label>
          </div>
          <div className='kontakt-row-zgody-send'>
            <button type='submit'>Wyślij wiadomość</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Kontakt;