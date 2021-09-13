import React from 'react'
import Twitter from '../../assets/images/twitter_logo.png'
import Facebook from '../../assets/images/facebook_logo.png'
import Style from './footer.module.scss'

export function Footer() {
  return (
    <section>
      <footer className={Style.footerContainer}>
        <h1>HomeLands</h1>
        <p>Øster Uttrupvej 5
          <br />
          9000 Aalborg
        </p>
        <p>Email: info@homelands.dk
          <br />
          Telefon: +45 1122 3344
        </p>
        <div>
          <img src={Twitter} alt="" />
          <img src={Facebook} alt="" />
        </div>
      </footer>
    </section>
  )
}
