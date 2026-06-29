import { useState, useEffect } from 'react'
import './Concierto.css'

function pad(n) { return String(n).padStart(2, '0') }

function getTimeLeft(isoDate) {
  const diff = new Date(isoDate) - new Date()
  if (diff <= 0) return { dias: 0, horas: 0, minutos: 0, segundos: 0 }
  const dias     = Math.floor(diff / 86400000)
  const horas    = Math.floor((diff % 86400000) / 3600000)
  const minutos  = Math.floor((diff % 3600000) / 60000)
  const segundos = Math.floor((diff % 60000) / 1000)
  return { dias, horas, minutos, segundos }
}

const SHOW_DATE = '2025-09-20T20:00:00'

export default function Concierto() {
  const [time, setTime] = useState(getTimeLeft(SHOW_DATE))

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft(SHOW_DATE)), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="concierto" className="concierto">
      <div className="conciertoInner">

        <div className="conciertoLeft">
          <span className="conciertoLabel">// 02 — En Vivo //</span>
          <h2 className="conciertoTitle">PRÓXIMO<br />TOQUE</h2>
          <div className="conciertoDivider" />

          <div className="conciertoDetails">
            <div className="conciertoDetail">
              <span className="detailLabel">Evento</span>
              <span className="detailValue">NOCHE DE GUERRA VOL. 3</span>
            </div>
            <div className="conciertoDetail">
              <span className="detailLabel">Fecha</span>
              <span className="detailValue">20 SEP 2025</span>
            </div>
            <div className="conciertoDetail">
              <span className="detailLabel">Hora</span>
              <span className="detailValue">8:00 PM</span>
            </div>
            <div className="conciertoDetail">
              <span className="detailLabel">Lugar</span>
              <span className="detailValue">Bar La Grieta · Medellín</span>
            </div>
            <div className="conciertoDetail">
              <span className="detailLabel">Entrada</span>
              <span className="detailValueRed">GRATIS</span>
            </div>
          </div>

          <a href="#" className="conciertoBtn">⚡ Conseguir Entrada</a>
        </div>

        <div className="conciertoRight">
          <p className="countdownLabel">// Cuenta Regresiva //</p>
          <div className="countdown">
            {[
              { val: time.dias,     lbl: 'Días'  },
              { val: time.horas,    lbl: 'Horas' },
              { val: time.minutos,  lbl: 'Min'   },
              { val: time.segundos, lbl: 'Seg'   },
            ].map(({ val, lbl }) => (
              <div key={lbl} className="cdBlock">
                <span className="cdNum">{pad(val)}</span>
                <span className="cdLbl">{lbl}</span>
              </div>
            ))}
          </div>

          <div className="lineup">
            <p className="lineupTitle">// Lineup //</p>
            <div className="lineupItem">
              <span className="lineupDotMain" />
              <span className="lineupBand">SALVE PUNK</span>
              <span className="lineupType">Headliner</span>
            </div>
            <div className="lineupItem">
              <span className="lineupDotSupport" />
              <span className="lineupBand">Banda Invitada 1</span>
              <span className="lineupType">Soporte</span>
            </div>
            <div className="lineupItem">
              <span className="lineupDotSupport" />
              <span className="lineupBand">Banda Invitada 2</span>
              <span className="lineupType">Apertura</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}