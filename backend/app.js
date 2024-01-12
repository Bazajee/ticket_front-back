import express from 'express'
import { PrismaClient } from '@prisma/client'

const app = express()
const prisma = new PrismaClient()


app.use(express.json())

app.get('/api/tickets', async (req, res) => {
   const ticketsList = await prisma.ticket.findMany({})
   console.log('ticketsList', ticketsList)
   res.send(ticketsList)
})

app.post('/api/ticket', async (req, res) => {
   const ticket = await prisma.ticket.create({
      data: req.body
   })
   console.log('created', ticket)
   res.send(ticket)
})

app.get ('/api/ticket/:id', async (req, res) => {
   const urlId = req.params.id
   const ticket = await  prisma.ticket.findUnique({
      where: {
         id: parseInt(urlId)
      }
   })
   res.send(ticket)

})

app.listen(3000, function() {
   console.log('listening to port 3000')
})



