import './Nosotros.css'

const MEMBERS = [
  {
    key: 'K',
    nombre: 'KARMAGEDÓN',
    rol: 'Voz',
    foto: null,
    bio: 'Garganta y alma de la banda. Su rabia en el escenario es pura y sin filtro.'
  },
  {
    key: 'X',
    nombre: 'XTREMO',
    rol: 'Guitarra',
    foto: null,
    bio: 'Riffs que cortan. Lleva el punk de Medellín grabado en cada acorde.'
  },
  {
    key: 'R',
    nombre: 'RUIDOSO',
    rol: 'Bajo',
    foto: null,
    bio: 'El ritmo que mueve el piso. Base sólida del sonido Salve Punk.'
  },
  {
    key: 'D',
    nombre: 'DESTRUCTOR',
    rol: 'Batería',
    foto: null,
    bio: 'Golpea como si el mundo se acabara. Cada show es su último.'
  },
]

export default function Nosotros() {
  return (
    <section id="nosotros" className="nosotros">
      <div className="nosotrosInner">

        <div className="nosotrosHeader">
          <span className="nosotrosLabel">// 01 — Nosotros //</span>
          <h2 className="nosotrosTitle">LA BANDA</h2>
          <div className="nosotrosDivider" />
          <p className="nosotrosBio">
            Nacimos en las grietas de Medellín. Sin sello, sin manager, sin filtro.
            Herederos de <strong>G.P.</strong>, <strong>La Pestilencia</strong> y <strong>Los Suziox</strong> —
            puro punk de calle desde 2018.
          </p>
        </div>

        <div className="membersGrid">
          {MEMBERS.map(({ key, nombre, rol, foto, bio }) => (
            <div key={key} className="memberCard">
              <div className="memberCardPhoto">
                {foto
                  ? <img src={foto} alt={nombre} className="memberCardImg" />
                  : <span className="memberCardPlaceholder">{key}</span>
                }
                <div className="memberCardOverlay">
                  <span className="memberCardName">{nombre}</span>
                  <span className="memberCardRole">// {rol} //</span>
                </div>
              </div>
              <p className="memberCardBio">{bio}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}