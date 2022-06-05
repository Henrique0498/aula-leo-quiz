import QuestModel from '../../model/quest'
import Answers from '../Answers'
import Enunciation from '../Enunciation/Index'
import Time from '../Time'
import styles from './styles.module.css'

interface QuestProps {
  value: QuestModel
  time?: number
  answerProvided: (index: number) => void
  finished: () => void
}

const letters = [
  { value: 'A', color: '#F2C866' },
  { value: 'B', color: '#F266BA' },
  { value: 'C', color: '#85D4F2' },
  { value: 'D', color: '#BCE596' }
]

export default function Quest(props: QuestProps) {
  const quest = props.value

  function renderAnswers() {
    return quest.responses.map((response, i) => {
      return (
        <Answers
          key={`quest=${quest.id}&index=${i}`}
          value={response}
          index={i}
          letter={letters[i].value}
          colorLetter={letters[i].color}
          answerProvided={props.answerProvided}
        />
      )
    })
  }

  return (
    <div className={styles.container}>
      <Enunciation text={quest.enunciation} />
      <Time
        key={quest.id}
        duration={props.time ?? 10}
        finished={props.finished}
      />
      {renderAnswers()}
    </div>
  )
}
