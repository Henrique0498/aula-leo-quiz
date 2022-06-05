import styles from './styles.module.css'

interface StatisticProps {
  value: number | string
  text: string
  background?: string
  fontColor?: string
}

const Statistic = (props: StatisticProps) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.value}
        style={{
          backgroundColor: props.background ?? '#FDD60F',
          color: props.fontColor ?? '#333'
        }}
      >
        {props.value}
      </div>
      <div className={styles.text}>{props.text}</div>
    </div>
  )
}

export default Statistic
