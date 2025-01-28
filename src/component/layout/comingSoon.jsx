import React, { useEffect, useRef, useState } from 'react'

function ComingSoon() {
  const elapsetime = "2025-01-01T00:00:00";
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  timeLeft.days = String(timeLeft.days).padStart(2, "0")
  timeLeft.hours = String(timeLeft.hours).padStart(2, "0")
  timeLeft.minutes = String(timeLeft.minutes).padStart(2, "0")
  timeLeft.seconds = String(timeLeft.seconds).padStart(2, "0")

  useEffect(() => {
    const updateCountDown = () => {
      const now = new Date();
      const diffrence = new Date(elapsetime) - now;
      if (diffrence <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        })
      } else {
        setTimeLeft({
          days: Math.floor(diffrence / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diffrence / (1000 * 60 * 60 )) % 24),
          minutes: Math.floor((diffrence / 1000 / 60) % 60),
          seconds: Math.floor((diffrence / 1000 % 60)),
        })
      }
    }
    const timer = setInterval(updateCountDown, 1000);
    return () => clearInterval(timer)

  }, [elapsetime])


  return (
    <div id='coming-soon' className='bg-neutral p-4 flex justify-around'>
      <img src="/src/assets/Images/Artistic Tech Haven.jpg" className='size-96' alt="" />
      <div className="m-auto">
        <h1 className='text-4xl font-serif p-5'>Winter Product discount</h1>
        <h2 id='time' className='text-5xl font-bold text-center  font-mono'>{`${timeLeft.days}d:${timeLeft.hours}h:${timeLeft.minutes}m:${timeLeft.seconds}s`}</h2>
      </div>
    </div>
  )
}

export default ComingSoon