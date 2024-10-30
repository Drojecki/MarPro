import React from 'react';
import "../css/kontakt.css"
const Kontakt = () => {
  return (
    <div className='kontakt-container'>
      <div className='kontakt-info-container'>
        <div className='kontakt-info'>
          <img src='photos/Clock.png' alt='clock' />
          <div className='block'>
            <p>Godziny otwarcia:</p>
            <p>Pon-Pt.: 8:00-20:00</p>
          </div>
        </div>
        <div className='kontakt-info'>
          <img src='photos/Phone.png' alt='phone' />
          <div className='block'>
            <p>Tel:</p>
            <p>+99 123-456-789</p>
          </div>
        </div>
        <div className='kontakt-info'>
          <img src='photos/Mail.png' alt='mail' />
          <div className='block'>
            <p>E-mail:</p>
            <p>example@example.pl</p>
          </div>
        </div>
      </div>
      <form>
        <div className='kontakt-send-msg'>
          <div className='kontakt-header'>
            <p>Wyślij wiadomość</p>
          </div>
          <div className='kontakt-row-info-client'>
            <input className='placeholder-details' placeholder='Imie i Nazwisko' />
            <input className='placeholder-details' placeholder='E-mail' />
            <input className='placeholder-details' placeholder='Telefon' />
          </div>
          <div className='kontakt-row-theme'>
            <input className='placeholder-theme' placeholder='Temat' />
          </div>
          <div className='kontakt-row-message'>
            <textarea className='placeholder-msg' placeholder='Treść wiadomości'></textarea>
          </div>
          <div className='checkox-test'>
            <label className='checkbox-container'>
              <input type='checkbox' />
              <span className='PolitykaPrywatnośći'>Wysyłając Formularz Kontaktowy dobrowolnie wyrażasz zgodę na przetwarzanie swoich danych osobowych w celu dokonywania kontaktu. Masz prawo cofnięcia zgody w dowolnym momencie bez wpływu na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej cofnięciem. Masz prawo dostępu do treści swoich danych i ich sprostowania, usunięcia, ograniczenia przetwarzania, oraz prawo do przenoszenia danych na zasadach zawartych w <a href='/polityka-prywatnosci' className='link-polityka'>polityce prywatności</a>.</span>
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