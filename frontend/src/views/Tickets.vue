<template>
   <div class="">
   <!-- navbar -->
      <div class="static top-0 w-full">
         <Toolbar class="" />
      </div>

      <div class="flex ">   

            <!-- list -->
            <div class="w-80">
               <div class="sticky top-0 w-full ">
                  <FilterBarCategory class=" overflow-y-hidden"></FilterBarCategory>
                  <FilterBarPriority class=" overflow-y-hidden"></FilterBarPriority>
               </div>
               <template v-for="ticket in filterTickets" class="p-4">
                  <TicketCard :ticketId="ticket.id" @click="onClick(ticket.id)" :selected="ticket.id == selectedTicketId">
                  </TicketCard>
               </template>
            </div>
         


            <!-- detail -->
            <div class=" w-full">
               <router-view class=" sticky top-14 w-full "></router-view>
            </div>


      </div>
   </div>

</template>
 
<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { filterTickets, allTicket_} from '../use/useTickets'

import TicketCard from '/src/components/TicketCard.vue'
import Toolbar from '../components/Toolbar.vue'
import FilterBarPriority from '../components/FilterBarPriority.vue'
import FilterBarCategory from '../components/FilterBarCategory.vue'
import router from '/src/router'

const route = useRoute()

allTicket_()


const selectedTicketId = ref(route.params.ticketId)

const onClick = (ticketId) => {
   selectedTicketId.value = ticketId
   router.push(`/tickets/${ticketId}`)
}
</script>