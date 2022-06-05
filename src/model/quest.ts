import arrayRandom from '../functions/arrayRandom'
import AnswersModel from './answers'

export default class QuestModel {
  #id: number
  #enunciation: string
  #responses: AnswersModel[]
  #okay: boolean

  constructor(
    id: number,
    enunciation: string,
    responses: AnswersModel[],
    okay = false
  ) {
    this.#id = id
    this.#enunciation = enunciation
    this.#responses = responses
    this.#okay = okay
  }

  get id() {
    return this.#id
  }

  get enunciation() {
    return this.#enunciation
  }

  get responses() {
    return this.#responses
  }

  get okay() {
    return this.#okay
  }

  get notAnswered() {
    return !this.answered
  }

  get answered() {
    for (const response of this.#responses) {
      if (response.revealed) return true
    }

    return false
  }

  replyWith(index: number): QuestModel {
    const okay = this.#responses[index]?.okay

    const responses = this.#responses.map((answer, i) => {
      const answerSelect = index === i
      const mustReveal = answerSelect || answer.okay

      return mustReveal ? answer.reveal() : answer
    })

    return new QuestModel(this.id, this.enunciation, responses, okay)
  }

  randomAnswers(): QuestModel {
    const randomResponses = arrayRandom(this.#responses)

    return new QuestModel(
      this.#id,
      this.#enunciation,
      randomResponses,
      this.#okay
    )
  }

  static createObject(obj: QuestModel): QuestModel {
    const responses = obj.responses.map((resp) =>
      AnswersModel.createObject(resp)
    )

    return new QuestModel(obj.id, obj.enunciation, responses, obj.okay)
  }

  toObject() {
    return {
      id: this.#id,
      enunciation: this.enunciation,
      responses: this.#responses.map((response) => response.toObject()),
      okay: this.#okay
    }
  }
}
