<template>
   

<nav class=" bg-white  ">
  <div class="  flex flex-wrap items-center justify-between  p-4">
    <div class=" w-full md:block md:w-auto" id="navbar-default">
      <ul class="  font-medium flex  p-2 rounded-lg  flex-row space-x-8  mt-0  bg-white  ">
        <li>
          <button @click="updateCategoryFilter('computer')" id="navbar-default#1"  :class="{'bg-gray-200': categoryFilter.includes('computer')}" class="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> Computer</button>
        </li>
        <li>
          <button @click="updateCategoryFilter('furniture')" id="navbar-default#2"  :class="{'bg-gray-200': categoryFilter.includes('furniture')}" class="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Furniture</button>
        </li>
      </ul>
    </div>
  </div>
</nav>

</template>

<script setup>  

// ==========================================  Category filter ========================================================================  

//Optimize the user's experience of the filter when the entire filter is deselected, and the perception of selection and deselection.

import { categoryFilter } from '../use/useTickets'


function updateCategoryFilter (categoryName)  {
  if (categoryFilter.value.includes(categoryName)) {
    categoryFilter.value.splice(categoryFilter.value.indexOf(categoryName),1)
  
  } 
  else {
    categoryFilter.value.push(categoryName)
  }
}

</script>