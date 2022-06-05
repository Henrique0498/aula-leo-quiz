import styles from './styles.module.css'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

interface TimeProps<T> {
  key: T
  duration: number
  finished: () => void
}

const Time = (props: TimeProps<number | string>) => {
  return (
    <div className={styles.container}>
      <CountdownCircleTimer
        duration={props.duration}
        size={120}
        isPlaying
        onComplete={props.finished}
        colors={[
          ['#BCE596', 0.33],
          ['#F7B801', 0.33],
          ['#ED827A', 0.33]
        ]}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  )
}

export default Time
