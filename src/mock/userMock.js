import mock from '../utils/mock';

// mock.onPost('/api/home/login').reply(200, {
//     'id': 1,
//     'username': 'MichelleVieira',
//     'email': 'michelle.vmessias@gmail.com'
// })

mock.onPost('/api/home/login').reply((config) => {
    const { email, password } = JSON.parse(config.data);

    if (email !== 'michelle.vmessias@gmail.com' || password !== '123') {
        return [400, { message: 'Seu e-mail ou senha estão incorretos' }]
    }
    const user = {
        id: 1,
        name: 'Michelle Vieira',
        userName: 'MichelleVieira',
        email: 'michelle.vmessias@gmail.com'

    }
    return [200, { user }]
})