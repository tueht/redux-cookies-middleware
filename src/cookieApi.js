import jsCookie from 'js-cookie';

const getCookie = name => jsCookie.get(name);

const setCookie = (name, value, expiry = 365, secure = false, httpOnly = false, sameSite = 'Strict') => {
    jsCookie.set(name, value, { expires: expiry, path: '/', secure, httpOnly, sameSite });
};

export { getCookie };
export default setCookie;
