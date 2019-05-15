import { SIGN_IN, SIGN_OUT } from './types';
const signIn = (userId) => {
    return {
        type: SIGN_IN,
        userId
    }
}

const signOut = () => {
    return {
        type: SIGN_OUT
    }
}

export { signIn, signOut };