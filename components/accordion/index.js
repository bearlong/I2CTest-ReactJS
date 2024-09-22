import { useState, useEffect } from 'react'
import styles from '@/styles/accordion.module.scss'

export default function Accordion({ data = [], initSelect = [] }) {
  const [selected, setSelected] = useState(initSelect)
  const toggleSelected = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  useEffect(() => {
    setSelected(initSelect)
  }, [initSelect])
  return (
    <>
      {data[0] === undefined ? (
        ''
      ) : (
        <p className="text-danger">點擊標題即可展開內容!</p>
      )}
      {data.map((v) => {
        return (
          <div className="mb-3" key={v.id}>
            <button
              htmlFor={v.id}
              className={`${styles.title} h5 ${
                selected.includes(v.id) ? 'text-light bg-dark bg-gradient' : ''
              }`}
              onClick={() => toggleSelected(v.id)}
            >
              {v.title}
            </button>
            <div
              className={`card mb-3 ${styles.myCard} ${
                selected.includes(v.id) ? styles.show : ''
              }`}
            >
              <div className="card-body">
                <p className="card-text">{v.content}</p>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}
