import { useState, useEffect } from 'react'

export default function Accordion({ data = [], initSelect = [] }) {
  const [selected, setSelected] = useState(initSelect)
  const toggleSelected = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }
  useEffect(() => {
    import('bootstrap/dist/css/bootstrap.min.css')
  }, [])

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
            <label htmlFor={v.id} className={`title h5`}>
              {v.title}
            </label>
            <input
              type="checkbox"
              className="d-none articleCheck"
              checked={selected.includes(v.id)}
              onChange={() => toggleSelected(v.id)}
              id={v.id}
            />
            <div
              className={`card mb-3 ${selected.includes(v.id) ? 'show' : ''}`}
            >
              <div className="card-body">
                <p className="card-text">{v.content}</p>
              </div>
            </div>
          </div>
        )
      })}
      <style jsx>
        {`
          .card {
            max-height: 0;
            overflow: hidden;
            transition: 0.5s;
            border: 1px solid transparent;
          }
          .show {
            max-height: 100px;
            border: 1px solid #ccc;
          }
        `}
      </style>
    </>
  )
}
