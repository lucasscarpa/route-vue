<template>
    <div>
        <div class="section"></div>
        <main>
            <center>
                <div class="section"></div>
                <h5>Please, login</h5>
                <div class="container">
                <div class="section"></div>
                <div v-if="erros" class="row" style="margin: 50px;">
                        <div class="col s12">
                            <ul class="collection">
                                <li class="red lighten-2 collection-item" v-for="(erro, index) of erros" :key="index">
                                    {{ erro[0] }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="z-depth-1 grey lighten-4 row" style="display: inline-block; padding: 32px 48px 0px 48px; border: 1px solid #EEE;">
                        <form @submit.prevent="login">
                            <div class='row'>
                                <div class='col s12'>
                            </div>
                    </div>
                    <div class='row'>
                        <div class='input-field col s12'>
                            <input class='validate' type='email' id='email' name='email' v-model="user.email" />
                            <label for='email'>Enter your email</label>
                        </div>
                    </div>
                    <div class='row'>
                        <div class='input-field col s12'>
                            <input class='validate' type='password' id='password' name='password' v-model="user.password" />
                            <label for='password'>Enter your password</label>
                        </div>
                    </div>
                    <br />
                    <center>
                        <div class='row'>
                            <button type='submit' class='col s12 btn btn-large waves-effect'>Login</button>
                        </div>
                    </center>
                </form>
            </div>
        </div>
    </center>
  </main>
  </div>
</template>

<style>
    
</style>


<script>

import Route from '../service/route'

export default {
    data(){
        return {
            user: {
                email: '',
                password: '',
            },
            erros: [],
            response: []
        }
    },

    mounted(){
        localStorage.removeItem('token')
    },

    methods: {
        login() {
            Route.login(this.user).then(response => {
                localStorage.setItem('token', response.data.token)
                this.$router.push('/home')
                this.$router.go()
            }).catch(e => {
                this.erros = e.response.data
            });
        }
    }

}
</script>