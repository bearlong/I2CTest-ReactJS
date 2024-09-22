import { useState, useEffect } from 'react'
import programmingData from 'data/programming'
import lifeTipsData from 'data/lifeTips'
import sportData from 'data/sport'
import Accordion from '@/components/accordion'
import { FadeLoader } from 'react-spinners'

const override = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
}

export default function Index() {
  const [category, setCategory] = useState([
    { category: '程式相關', data: programmingData, checked: false },
    { category: '運動相關', data: sportData, checked: false },
    { category: '生活相關', data: lifeTipsData, checked: false },
  ])
  const [data, setData] = useState([])
  const [preselect, setPreselect] = useState(0)
  const [selected, setSelected] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = () => {
    setData(category.filter((c) => c.checked).flatMap((c) => c.data))
    setSelected([preselect])
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }

  const loader = (
    <FadeLoader
      color="black"
      loading={isLoading}
      cssOverride={override}
      size={40}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  )

  return (
    <>
      <div className="container">
        <h2 className="mb-3">精選文章</h2>
        <h4 className="mb-3">選擇想看的內容</h4>
        <div className="d-flex justify-content-between align-items-center">
          {category.map((v) => {
            return (
              <div className="form-check mb-3" key={v.category}>
                <input
                  type="radio"
                  className="form-check-input"
                  name="category"
                  id={v.category}
                  checked={v.checked}
                  onChange={() => {
                    setCategory((prevState) =>
                      prevState.map((item) =>
                        item.category === v.category
                          ? { ...item, checked: true }
                          : { ...item, checked: false }
                      )
                    )
                  }}
                />
                <label className="form-check-label h5" htmlFor={v.category}>
                  {v.category}
                </label>
              </div>
            )
          })}
        </div>
        <h4>選擇章節</h4>
        <select
          className="form-select mb-3"
          onChange={(e) => {
            setPreselect(Number(e.target.value))
          }}
        >
          <option value="0">請選擇</option>
          {category
            .filter((c) => c.checked === true)
            .flatMap((c) => c.data)
            .map((v, i) => (
              <option key={i} value={v.id}>
                {v.title}
              </option>
            ))}
        </select>
        <button
          className="btn btn-primary mb-3"
          onClick={() => {
            handleSubmit()
          }}
        >
          生成文章
        </button>
        {isLoading ? loader : <Accordion data={data} initSelect={selected} />}
      </div>
    </>
  )
}
