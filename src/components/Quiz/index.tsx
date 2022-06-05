import styles from './styles.module.css'
import QuestModel from '../../model/quest'
import Quest from '../Quest'
import Button from '../Button'

interface QuizProps {
  quest: QuestModel
  last: boolean
  response: (quest: QuestModel) => void
  goToNext: () => void
}

const Quiz = (props: QuizProps) => {
  function answerProvided(index: number) {
    if (props.quest.notAnswered) {
      props.response(props.quest.replyWith(index))
    }
  }

  return (
    <div className={styles.container}>
      {props.quest ? (
        <Quest
          value={props.quest}
          time={10}
          answerProvided={answerProvided}
          finished={props.goToNext}
        />
      ) : (
        false
      )}

      <Button
        onClick={props.goToNext}
        text={props.last ? 'Finalizar' : 'Próxima'}
      />
    </div>
  )
}

export default Quiz
