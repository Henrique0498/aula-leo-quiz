import { NextApiRequest, NextApiResponse } from 'next'
import arrayRandom from '../../../functions/arrayRandom'
import dbQuests from '../dbQuest'

export default (req: NextApiRequest, res: NextApiResponse) => {
  const ids = dbQuests.map((quest) => quest.id)

  res.status(200).json({ quests: arrayRandom(ids) })
}
