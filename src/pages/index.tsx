import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Quiz from '../components/Quiz'
import QuestModel from '../model/quest'

const BASE_URL = 'http://localhost:3000/api'

export default function Home() {
  const [ids, setIds] = useState<number[]>([])
  const [quest, setQuest] = useState<QuestModel>()
  const [responseOkay, setResponseOkay] = useState<number>(0)
  const router = useRouter()

  async function loadIdsQuest() {
    const resp = await fetch(`${BASE_URL}/quiz`)
    const { quests } = await resp.json()

    setIds(quests)
  }

  async function loadQuest(id: number) {
    const resp = await fetch(`${BASE_URL}/quest/${id}`)
    const questResponse = await resp.json()

    setQuest(QuestModel.createObject(questResponse))
  }

  function response(questResponse: QuestModel) {
    const okay = questResponse.okay

    setQuest(questResponse)
    setResponseOkay(responseOkay + (okay ? 1 : 0))
  }

  function idNextResponse() {
    if (quest) {
      const index = ids.indexOf(quest.id) + 1

      return ids[index]
    }
  }

  function goToNext() {
    const index = idNextResponse()

    index ? goToNextResponse(index) : finished()
  }

  function goToNextResponse(index: number) {
    loadQuest(index)
  }

  function finished() {
    router.push({
      pathname: '/result',
      query: {
        total: ids.length,
        okay: responseOkay
      }
    })
  }

  useEffect(() => {
    loadIdsQuest()
  }, [])

  useEffect(() => {
    ids.length > 0 && loadQuest(ids[0])
  }, [ids])

  return (
    <>
      <Head>
        <title>Quiz</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {quest && (
        <Quiz
          quest={quest}
          last={idNextResponse() === undefined}
          response={response}
          goToNext={goToNext}
        />
      )}
    </>
  )
}
