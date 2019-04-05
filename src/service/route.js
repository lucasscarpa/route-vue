import { http } from './config'

export default {

    calculate:(route) => {
        return http.get('api/calculate-route', {
            params: {
                from: route.from,
                to: route.to,
                autonomy: route.autonomy,
                price: route.price
            }
        })
    },

    login: (user) => {
        return http.post('auth/login', user)
        
    }

}