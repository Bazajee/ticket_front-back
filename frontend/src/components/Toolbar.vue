<template>
  <nav class="bg-white border-gray-200">
    <div
      class="w-full flex flex-wrap items-center  p-2"
    >
      <div class=" pl-2 pr-2 w-auto" id="navbar-default">
        <ul
          class="text-gray-700 font-medium flex  px-2 py-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 sm:space-x-3 md:space-x-8 rtl:space-x-reverse  "
        >
          <li>
            <button
              v-if="isAuth"
              class="pl-2 pr-2 text-white rounded-md bg-blue-500"
              @click="homeRedirect"
            >
              Hello
            </button>
            <button
              v-else
              @click="homeRedirect"
              class="pl-2 pr-2 text-white rounded-md bg-blue-500"
            >
              Log In
            </button>
          </li>
          <li>
            <button
              v-if="isAuth"
              id="navbar-default#2"
              @click="logOut"
              :disabled="!isAuth"
              class="block pl-2 pr-2 rounded md:bg-transparent md:hover:text-blue-700 p-0"
              aria-current="page"
            >
              Log out
            </button>
          </li>

          <li>
            <button
              id="navbar-default#1"
              @click="ticketRedirect"
              :disabled="!isAuth"
              class="block pl-2 pr-2 rounded md:bg-transparent md:hover:text-blue-700 md:p-0"
              aria-current="page"
            >
              Nouveau Ticket
            </button>
          </li>
          <li>
            <button
              id="navbar-default#2"
              @click="ticketsRedirect"
              :disabled="!isAuth"
              class="block pl-2 pr-2 rounded md:bg-transparent md:hover:text-blue-700 md:p-0"
              aria-current="page"
            >
              Tickets
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import router from "/src/router";

import { isAuth, isAuthCheck, removeJwtAuthCookie } from "../use/useTickets";
isAuthCheck();

function homeRedirect() {
  isAuthCheck()
  router.push("/")
}
function ticketsRedirect() {
  isAuthCheck();
  router.push("/tickets")
}
function ticketRedirect() {
  isAuthCheck();
  router.push("/ticket")
}
function logOut() {
  removeJwtAuthCookie()
  router.push("/")
  localStorage.clear()
  isAuthCheck()
}
</script>
