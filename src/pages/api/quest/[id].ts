// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next'
import dbQuests from '../dbQuest'

export default function (req: NextApiRequest, res: NextApiResponse) {
  const id = +req.query.id

  const quest = dbQuests.filter((quest) => quest.id === id)

  if (quest.length === 1) {
    const questSelect = quest[0].randomAnswers()

    const obj = questSelect.toObject()

    res.status(200).json(obj)
  } else {
    res.status(204).send('')
  }
}
