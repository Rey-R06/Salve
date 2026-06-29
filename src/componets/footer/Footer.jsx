import './Footer.css'

const SOCIAL = [
  { label: 'Instagram', href: 'https://www.instagram.com/salve_punk' },
  { label: 'Spotify',   href: '#' },
  { label: 'YouTube',   href: '#' },
  { label: 'Bandcamp',  href: '#' },
]

const NAV_LINKS = [
  { label: 'Inicio',            href: '#inicio'    },
  { label: 'Nosotros',          href: '#nosotros'  },
  { label: 'Próximo Concierto', href: '#concierto' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <span className="footerGhost" aria-hidden="true">SP</span>

      <div className="footerTop">

        {/* Columna 1 — Marca */}
        <div className="footerBrand">
          <span className="footerLogo">SALVE PUNK</span>
          <span className="footerSub">// Medellín · Colombia · Underground //</span>
          <p className="footerDesc">
            Punk de calle desde 2018. Sin sello, sin manager, sin filtro.
            El ruido que no se calla.
          </p>
          <ul className="footerSocial">
            {SOCIAL.map(({ label, href }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noreferrer" className="footerSocialLink">
                  <span className="footerSocialArrow">→</span> {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna 2 — Navegación */}
        <div className="footerCol">
          <h4 className="footerColTitle">Navegación</h4>
          <ul className="footerLinks">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="footerLink">{label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna 3 — Newsletter */}
        
        {/*hacerlo funcionar*/}
        <div className="footerCol">
          <h4 className="footerColTitle">Entérate</h4>
          <p className="footerNlText">
            Conciertos, lanzamientos y parches directo a tu correo.
          </p>
          <div className="footerNlRow">
            <input
              className="footerNlInput"
              type="email"
              placeholder="tu@correo.com"
            />
            <button className="footerNlBtn">OK</button>
          </div>
        </div>

      </div>

      {/* Barra inferior */}
      <div className="footerBottom">
        <p className="footerCopy">© 2025 Salve Punk · Todos los derechos reservados</p>
        <p className="footerMade">Hecho a punta de ruido y distorsión</p>
      </div>

    </footer>
  )
}