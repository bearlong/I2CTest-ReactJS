import { useState, useEffect } from 'react'

export default function CountdownTimer({ initialTime = 0, isChanged = false }) {
  const [time, setTime] = useState(initialTime)
  const [stop, setStop] = useState(true)

  // 重置倒數時間
  const handleResetTime = () => {
    setTime(initialTime)
    setStop(true)
  }

  // 切換計時啟動/停止
  const handleToggleStop = () => {
    setStop(!stop)
  }

  useEffect(() => {
    if (time <= 0) {
      // 結束時切換按鈕狀態
      setStop(true)
      return
    }
    if (!stop) {
      const timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1)
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [time, stop])

  useEffect(() => {
    setTime(initialTime)
    // 每次倒數時間重設時停止計時
    setStop(true)
  }, [initialTime, isChanged])

  return (
    <>
      <h4>倒數計時</h4>
      <p>
        Time: <span className="text-danger">{time}</span>
      </p>
      <div class="progress mb-3" role="progressbar">
        <div
          class={`progress-bar`}
          style={{
            width: `${initialTime > 0 ? (1 - time / initialTime) * 100 : 0}%`,
          }}
        ></div>
      </div>
      <button
        className={`btn  ${stop ? 'btn-primary' : 'btn-danger'} me-3`}
        onClick={handleToggleStop}
      >
        {stop ? 'Start' : 'Stop'}
      </button>
      <button className="btn btn-success" onClick={handleResetTime}>
        Reset
      </button>
    </>
  )
}
