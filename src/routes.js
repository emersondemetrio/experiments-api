import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.json({ hello: 'world', nowIt: "goes" })
})

export default router
