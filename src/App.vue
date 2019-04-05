<template>
    <body>
        <router-view></router-view>
    </body>
</template>

<script>

export default {
    mounted () {
        if (localStorage.getItem('token')) {
            this.$router.push('/home')
        } else {
            this.$router.push('/login')
        }
    }
}

</script>

<style>

</style>
