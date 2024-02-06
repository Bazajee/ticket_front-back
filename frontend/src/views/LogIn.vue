<template>
    <div>
        <Toolbar></Toolbar>
    </div>

    <div v-if="!isAuth" class="max-w-md mx-auto mt-8" >
        <h1 class="block mt-4  font-medium text-gray-700 text-7xl" >Log in </h1>
        <br>
        <!-- Email Input -->
        <label  class="block mt-4 text-sm font-medium text-gray-700">Email</label>
        <input  v-model="formData.email" type="email" class="mt-1 p-2 border rounded-md w-full" >

        
        <!-- Password -->
        <label class="block mt-4 text-sm font-medium text-gray-700">Password</label>
        <input  v-model="formData.pwd" type="password" class="mt-1 p-2 border rounded-md w-full" />


        <!-- Submit Button -->
        <button @click="submitForm" 
            class="mt-4 p-2 text-white rounded-md hover:valid:bg-blue-600 bg-blue-500 disabled:bg-red-600">
            Valider
        </button>
    </div>
    <div v-else>
        <h1 class="block mt-4  font-medium text-gray-700 text-7xl" > You are login  !</h1>

    </div>

</template>

<script setup> 
import { ref } from 'vue'
import router from '/src/router'
import Toolbar from '../components/Toolbar.vue'
import { isAuth } from '../use/useTickets'

const formData = ref({
    email: "jc@mail.fr",
    pwd: "hjaf67yret32",
})

const submitForm = async () => {

    const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData.value),
    });
    const data =  await response.json()
    isAuth ? router.push('/tickets') : router.push('/login')
}




</script>