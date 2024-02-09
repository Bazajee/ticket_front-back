import { ref, computed } from "vue"
import { useLocalStorage } from "@vueuse/core"
import router from "/src/router"


export const ticketsList = useLocalStorage("tickets", [])
const id2ticket = useLocalStorage("id2ticket",{})
const ticketListComplete = useLocalStorage("ticket-list-complete", false);


export async function allTicket_ () {
   if (ticketListComplete.value) {
      return Object.values(id2ticket.value)
   }
   const rawTickets = await fetch("/api/tickets")
   const ticketStringify = await rawTickets.json()
   for (const ticket of ticketStringify) {
      ticketsList.value.push(ticket)
      id2ticket.value[ticket.id] = ticket
      
   }
   ticketListComplete.value = true
}

export async function asyncTicket(ticketId) {
   if (id2ticket.value[ticketId] === undefined) {
      const response = await fetch(`/api/ticket/${ticketId}`)
      const ticket = await response.json()
      id2ticket.value[ticket.id] = ticket
  }
return id2ticket.value[ticketId]
}
// ==============================================================>  Authentification  <==================================================================================================

export const isAuth = ref();

export const parseCookie = (str) =>
  str
   .split(";")
   .map((v) => v.split("="))
   .reduce((acc, v) => {
      if (v.length === 2) {
        // Check if the array has at least two elements
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      }
      return acc
    }, {})

export function removeJwtAuthCookie() {
   isAuth ? document.cookie = "jwtAuth" + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/': {}

}

export function isAuthCheck() {
   const cookieObject = parseCookie(document.cookie);
   cookieObject.jwtAuth ? (isAuth.value = true) : (isAuth.value = false)
   return cookieObject.jwtAuth;
}

export function unAuthRedirect() {
   isAuthCheck() ? {} : router.push("/login")
}

// ==================================================================>  Filtering  <==============================================================================================

const listDisplay = ticketsList.value

export const categoryFilter = ref(["computer", "furniture"])
export const priorityFilter = ref(["low", "normal", "high"])

// make condition if the array is empty and improve ui for user perception 
export const filterTickets = computed(() => {
   return ticketsList.value.filter((ticket) => {
      const x = categoryFilter.value.includes(ticket.category);
      const y = priorityFilter.value.includes(ticket.priority);
      return x && y;
  });
});
