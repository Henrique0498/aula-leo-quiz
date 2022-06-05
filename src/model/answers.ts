export default class AnswersModel {
  #value: string
  #okay: boolean
  #revealed: boolean

  constructor(value: string, okay: boolean, revealed = false) {
    this.#value = value
    this.#okay = okay
    this.#revealed = revealed
  }

  static correct(value: string) {
    return new AnswersModel(value, true)
  }

  static incorrect(value: string) {
    return new AnswersModel(value, false)
  }

  get value() {
    return this.#value
  }

  get okay() {
    return this.#okay
  }

  get revealed() {
    return this.#revealed
  }

  reveal() {
    return new AnswersModel(this.#value, this.#okay, true)
  }

  static createObject(obj: AnswersModel): AnswersModel {
    return new AnswersModel(obj.value, obj.okay, obj.revealed)
  }

  toObject() {
    return {
      value: this.#value,
      okay: this.okay,
      revealed: this.#revealed
    }
  }
}
