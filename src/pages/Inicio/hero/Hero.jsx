import "./Hero.css"

const MEMBERS = [
  { key: 'K', nombre: 'KARMAGEDÓN', rol: 'Voz',      foto: null },
  { key: 'X', nombre: 'XTREMO',     rol: 'Guitarra', foto: null },
  { key: 'R', nombre: 'RUIDOSO',    rol: 'Bajo',     foto: null },
  { key: 'D', nombre: 'DESTRUCTOR', rol: 'Batería',  foto: null },
]

export default function Hero() {
  return (
    <section className="hero">
      <div className="splashTl" />
      <div className="splashBr" />
      <div className="paintSplat" />

      <div className="heroInner">

        {/* ── FILA SUPERIOR: Título + Próximo Show ── */}
        <div className="topRow">
          <div className="titleBlock">
            <p className="eyebrow">// Punk Medallo · Colombia //</p>
            <div className="titleLines">
              <span className="titleLine1">SALVE</span>
              <span className="titleLine2">PUNK</span>
            </div>
            <p className="subtitle">
              Ruido, rabia y comunidad — desde Medellín para el mundo
            </p>
          </div>

          <div className="showCard">
            <p className="showCardLabel">// Próximo Toque //</p>
            <span className="showDate">20 SEP</span>
            <div className="showDivider" />
            <p className="showVenue">Bar La Grieta</p>
            <p className="showCity">Medellín, COL</p>
            <div className="showMeta">
              <span className="showMetaItem">
                <span className="showMetaDot" />
                8:00 PM
              </span>
              <span className="showMetaItem">
                <span className="showMetaDot" />
                GRATIS
              </span>
              <span className="showMetaItem">
                <span className="showMetaDot" />
                18+
              </span>
            </div>
            <a href="#concierto" className="showBtn">⚡ Ver detalles</a>
          </div>
        </div>

        <div className="scratch" />
        <div className="scratch2" />

        {/* ── FOTOS GRANDES CENTRADAS ── */}
        <div className="membersRow">
          {MEMBERS.map(({ key, nombre, rol, foto }, i) => (
            <div key={key} className={`memberWrap ${i === 1 || i === 2 ? 'memberWrapTall' : ''}`}>
              <div className="memberPhoto">
                {foto
                  ? <img src={foto} alt={nombre} className="memberImg" />
                  : (
                    <>
                      <span className="placeholderIcon">{key}</span>
                      <span className="placeholderLabel">Foto aquí</span>
                    </>
                  )
                }
                <div className="nameTag">
                  <span className="nameTagName">{nombre}</span>
                  <span className="nameTagRole">// {rol} //</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>


    </section>
  )
}