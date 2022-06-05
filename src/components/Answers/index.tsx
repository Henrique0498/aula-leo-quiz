import AnswersModel from '../../model/answers'
import styles from './styles.module.css'

interface AnswersProps {
  value: AnswersModel
  index: number
  letter: string
  colorLetter: string
  answerProvided: (index: number) => void
}

const Answers = (props: AnswersProps) => {
  const answers = props.value
  const answersRevealed = answers.revealed ? styles.answersRevealed : ''

  return (
    <div
      className={styles.container}
      onClick={() => {
        props.answerProvided(props.index)
      }}
    >
      <div className={`${styles.response} ${answersRevealed}`}>
        <div className={styles.front}>
          <div
            className={styles.letter}
            style={{ backgroundColor: props.colorLetter }}
          >
            {props.letter}
          </div>
          <div className={styles.value}>{answers.value}</div>
        </div>
        <div className={styles.back}>
          {answers.okay ? (
            <div className={styles.correct}>
              <div>A resposta certa é...</div>
              <div className={styles.value}>{answers.value}</div>
            </div>
          ) : (
            <div className={styles.incorrect}>
              <div>A resposta informada está errata...</div>
              <div className={styles.value}>{answers.value}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Answers
