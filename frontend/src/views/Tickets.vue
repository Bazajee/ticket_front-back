<template>
   <div class="">
   <!-- navbar -->
      <div class="sticky top-0 w-full">
         <Toolbar class=" " />
      </div>

      <div class="flex ">   


         <!-- list -->
         <div class="">
            <template v-for="ticket in allTickets" class="p-4">
               <TicketCard :ticketId="ticket.id" @click="onClick(ticket.id)" :selected="ticket.id == selectedTicketId">
               </TicketCard>
            </template>
         </div>

         <!-- detail -->
         <div class=" w-full">
            <router-view class=" sticky top-14 w-full overflow-scroll"></router-view>
         </div>

      </div>
   </div>


</template>
 
<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

import TicketCard from '/src/components/TicketCard.vue'
import Toolbar from '../components/Toolbar.vue'
import router from '/src/router'
import { allTickets } from '../use/useTickets'



const route = useRoute()
const selectedTicketId = ref(route.params.ticketId)



const onClick = (ticketId) => {
   selectedTicketId.value = ticketId
   router.push(`/tickets/${ticketId}`)
}
</script>