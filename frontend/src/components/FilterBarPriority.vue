<template>
   

<nav class=" bg-white  ">
  <div class=" w-full flex flex-wrap items-center justify-between mx-auto p-4">
    <div class="  w-full block md:w-auto" id="navbar-default">
      <ul class="font-medium flex  p-0 mt-4  rounded-lg  flex-row space-x-8 rtl:space-x-reverse md:mt-0  bg-white  ">
        <li>
          <button @click="updatePriorityFilter('low')" id="navbar-default#1"  :class="{'bg-gray-200': priorityFilter.includes('low')}" class="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> low</button>
        </li>
        <li>
          <button @click="updatePriorityFilter('normal')" id="navbar-default#2"  :class="{'bg-gray-200': priorityFilter.includes('normal')}" class="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">normal</button>
        </li>
        <li>
          <button @click="updatePriorityFilter('high')" id="navbar-default#2"  :class="{'bg-gray-200': priorityFilter.includes('high')}" class="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">high</button>
        </li>
      </ul>
    </div>
  </div>
</nav>

</template>

<script setup>    

// ==========================================  Priority filter ========================================================================  

//Optimize the user's experience of the filter when the entire filter is deselected, and the perception of selection and deselection.

import { priorityFilter } from '../use/useTickets'


function updatePriorityFilter (categoryName)  {
  if (priorityFilter.value.includes(categoryName)) {
    priorityFilter.value.splice(priorityFilter.value.indexOf(categoryName),1)
  } else {
    priorityFilter.value.push(categoryName)

  }
}

</script>