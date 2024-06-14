import React from 'react';

const Contact = () => {
  return (
    <div className='contact'>

      <div className='address'>
        <div className='contact-logo'>
            <img className='contact-image' src='https://cdn.travelatelier.com/wp-content/uploads/2017/01/turkish-flag.jpg' alt='Turkish Flag' />
        </div>
        <h2 className='contact-h2'>Location</h2>
        <p>Turkey / Istanbul</p>
      </div>

      <div className='mail'>
        <div className='contact-logo'>
          <img className='contact-image' src='https://dijilopedi.com/wp-content/uploads/2019/03/Gmailde-Planl%C4%B1-Mail-G%C3%B6nderme-D%C3%B6nemi.jpg' alt='Email Icon' />
        </div>
        <h2 className='contact-h2'>Mail</h2>
        <a href='mailto:tahirbera.work@gmail.com'>tahirbera.work@gmail.com</a>
      </div>

      <div className='number'>
        <div className='contact-logo'>
            <img className='contact-image' src='https://static.vecteezy.com/system/resources/previews/026/619/133/non_2x/call-telephone-icon-in-square-background-vector.jpg' alt='Phone Icon' />
        </div>
        <h2 className='contact-h2'>Phone Number</h2>
        <a href='https://wa.me/905063031691' target='_blank' >Whatsapp</a>
        <br />
        <a href='tel:+905063031691'>+905063031691</a>
      </div>

      <div className='bionluk'>
        <div className='contact-logo'>
           <img className='contact-image' src='https://media.licdn.com/dms/image/C4D1BAQEOMQqX-EwSTA/company-background_10000/0/1583203314942?e=2147483647&v=beta&t=qMh1B8RD8Gf7A9OfSwBcxR43G7zvzksknlvEHnPkWQo' alt='Freelancer Icon' />
        </div>
        <h2 className='contact-h2'>Freelancer</h2>
        <a href='https://www.bionluk.com/beradev1' target='_blank' >Bionluk</a>
      </div>
    </div>
  );
}

export default Contact;
