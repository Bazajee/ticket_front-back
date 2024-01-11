import express from 'express'
import { PrismaClient } from '@prisma/client'

const app = express()
const prisma = new PrismaClient()


app.use(express.json())

app.get('/api/ticket', async (req, res) => {
   const ticketList = await prisma.ticket.findMany({})
   console.log('ticketList', ticketList)
   res.send(ticketList)
})

app.post('/api/ticket', async (req, res) => {
   const ticket = await prisma.ticket.create({
      data: req.body
   })
   console.log('created', ticket)
   res.send(ticket)
})

app.listen(3000, function() {
   console.log('listening to port 3000')
})