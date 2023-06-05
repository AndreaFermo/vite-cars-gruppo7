<script>
import axios from 'axios';

export default {
    name: 'AppHome',
    data () {
        return {
            cars: []
        }
    },

    methods: {
        getCars() {
            axios.get(`http://localhost:8000/api/cars`)

            .then(response => {
                console.log(response);
                this.cars = response.data.results;
            })
        }
    },
    mounted() {
        this.getCars();
    }
}

</script>

<template>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">id</th>
                <th scope="col">Brand</th>
                <th scope="col">Model</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="car in cars">
                <th>{{car.id}}</th>
                <td>{{car.brand}}</td>
                <td>{{car.model}}</td>
                <td><router-link :to="{name: 'car', params: {id: car.id}}" class="btn btn-primary">Vedi</router-link></td>
            </tr>
        </tbody>
    </table>
</template>