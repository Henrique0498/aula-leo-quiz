import styles from './styles.module.css'

interface EnunciationProps {
  text: string
}

const Enunciation = (props: EnunciationProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>{props.text}</div>
    </div>
  )
}

export default Enunciation
