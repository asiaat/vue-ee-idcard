import Api from '@/services/Api'

export default {
    register (credentials) {
        return Api().post('register',credentials)
    }
}

// Call method from anothre  objects
/*
 AuthService.register({
    idcode :"37911162719"
 })


*/