import axios from '@utils/axios'
class Admin {
    login(payload) {
        let url = 'jpd/admin/user/login'
        return axios.post(url, payload)
    }

}

export default new Admin()