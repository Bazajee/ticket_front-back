<template>

   <div class="w-80 rounded shadow-lg " :class="{ 'bg-gray-200': selected }">
      <div class="px-6 py-4">
         <div class="font-bold text-xl mb-2">Ticket #{{ ticket.id }}</div>
         <div class="mb-2">Créé le {{ formatDate(ticket.created_at) }}</div>
         <p class="text-gray-700 text-sm text-ellipsis">
            {{ ticket.description }}
         </p>
      </div>
      <div class="px-6 pt-2 pb-2">
         <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> {{ ticket.category }}</span>
         <span class="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            :class="{ 'bg-red-200': ticket.priority === 'high', 'bg-orange-200': ticket.priority === 'normal', 'bg-yellow-200': ticket.priority === 'low', }">
            {{ ticket.priority }}
         </span>
      </div>
   </div>
</template>
 
<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { format } from 'date-fns'
import { asyncTicket } from '../use/useTickets'





const props = defineProps({
   ticketId: {
      type: Number,
      required: true,
   },
   selected: {
      type: Boolean,
      default: false,
   },
})

const ticket = ref({})
//  
watch(() => props.ticketId,
   async () => {ticket.value = await asyncTicket(props.ticketId)},
   {immediate: true},
)

function formatDate(isoDate) {
   if (!isoDate) return ''
   return format(new Date(isoDate), 'dd/MM/yyyy HH:mm')
}
</script>