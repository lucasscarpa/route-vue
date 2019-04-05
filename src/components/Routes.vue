<template>
    <div>
        <div class="container">
            <div v-if="erros" class="row" style="margin: 50px;">
                <div class="col s12">
                    <ul class="collection">
                        <li class="red lighten-2 collection-item" v-for="(erro, index) of erros" :key="index">
                            <p>{{ erro[0] }}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <form @submit.prevent="send">
            <div class="container">
                <div class="row" style="margin: 50px;">
                    <div class="col s6">
                        <label>From</label>
                        <select class="browser-default" v-model="route.from">
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                            <option value="E">E</option>
                        </select>
                    </div>
                    <div class="col s6">
                        <label>To</label>
                        <select class="browser-default" v-model="route.to">
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                            <option value="E">E</option>
                        </select>
                    </div>
                </div>
                <div class="row" style="margin: 50px;">
                    <div class="col s6">
                        <div class="input-field col s7">
                            <i class="material-icons prefix">local_car_wash</i>
                            <input id="autonomy" type="text" class="validate" v-model="route.autonomy">
                            <label for="autonomy">Autonomy</label>
                        </div>
                    </div>
                    <div class="col s6">
                        <div class="input-field col s7">
                            <i class="material-icons prefix">local_gas_station</i>
                            <input id="fuel-price" type="text" class="validate" v-model="route.price">
                            <label for="fuel-price">Fuel price</label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col s12">
                        <button class="col s12 btn waves-effect waves-light center" type="submit" name="action">Submit
                            <i class="material-icons right">send</i>
                        </button>
                    </div>
                </div>
                <div v-if="response" class="row">
                    <div class="green col s12">
                        <div v-if="response.length != 0" >
                            <h6 class="center-align">A melhor rota é {{ response.path }} com custo de R${{ response.cost }} e distância igual a {{ response.distance }}Km </h6>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>

import Route from '../service/route'

export default {

    data(){
        return {
            route: {
                from: '',
                to: '',
                autonomy: null,
                price: null 
            },
            erros: [],
            response: []
        }
    },

    mounted(){
        
    },

    methods: {
        send() {
            if (this.route.price && this.route.price.search(',') > 0) {
                this.route.price = this.route.price.replace(',', '.')
            }

            Route.calculate(this.route).then(response => {
                this.erros = {}
                response.data.cost = response.data.cost.toFixed(2)
                this.response = response.data
            }).catch(e => {
                this.response = {}
                this.erros = e.response.data
            });
        }
    }

}
</script>

<style>

</style>
