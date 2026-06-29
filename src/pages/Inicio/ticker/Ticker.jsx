import './Ticker.css'

const ITEMS = ['SALVE PUNK', 'PUNK MEDALLO', 'UNDERGROUND COLOMBIA', 'NO FUTURE', 'DIY OR DIE', 'RUIDO · RABIA · VERDAD']

export default function Ticker() {
  const all = [...ITEMS, ...ITEMS]
  return (
    <div className="ticker">
      <div className="tickerTrack">
        {all.map((item, i) => (
          <span key={i} className="tickerItem">
            {item} <span className="tickerDot">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}