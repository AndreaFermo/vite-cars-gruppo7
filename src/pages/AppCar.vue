<template>
    <div class="card" style="width: 18rem;" v-if="car">
        <div class="card-body">
            <h5 class="card-title">{{ car.id}}</h5>
            <h6> {{ car.model }}</h6>
            <h6> {{ car.cc }}</h6>
            <h6> {{ car.price }}</h6>
            <h6> {{ car.year_release }}</h6>
            <h6> {{ car.Brand }}</h6>

            <ul v-if="car.optionals">
                <li v-for="optional in car.optionals">
                    {{optional.name}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios'


export default {
    name: 'AppCar',

    data() {
        return {
            car: null
        }
    },

    mounted() {

        const id = this.$route.params.id;

        axios.get(`http://localhost:8000/api/car/${id}`)
        .then(response => {
            if(response.data.success == true) {
                this.car = response.data.results
                console.log(response)
            }
            else {
                this.$router.push({
                    name: 'not-found'
                }) 
            }
        })
    }
}


</script>