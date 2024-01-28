import { ref, computed } from 'vue'
import { useLocalStorage } from '@vueuse/core'


const id2ticket = useLocalStorage('id2ticket', {})
const ticketListComplete = useLocalStorage('ticket-list-complete', false)


// Remove the fetch of the computed
export const allTickets = computed(() => {
   if (ticketListComplete.value) {
      return Object.values(id2ticket.value)
   }
   fetch('/api/tickets').then(response => response.json()).then(ticketList => {
      for (const ticket of ticketList) {
         id2ticket.value[ticket.id] = ticket
      }
      ticketListComplete.value = true
   })
   return []
})

export async function asyncTicket(ticketId) {
   if (id2ticket.value[ticketId] === undefined) {
      const response = await fetch(`/api/ticket/${ticketId}`)
      const ticket = await response.json()
      id2ticket.value[ticket.id] = ticket
   }
   return id2ticket.value[ticketId]
}


// ================================================================================================================================================================
const listDisplay = ref(allTickets.value)

export const categoryFilter = ref(['computer','furniture'])
export const  priorityFilter = ref(['low', 'normal', 'high'])


// make condition if the array is empty 
export const filterTickets = computed (() => {
   

   return listDisplay.value.filter( (ticket) => { 
      const x = categoryFilter.value.includes(ticket.category)
      const y = priorityFilter.value.includes(ticket.priority)
      return x && y 
   })
}) 



