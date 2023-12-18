/* 
cookie save on browser and can set, get, delete
 */
import { getCookies, getCookie, setCookie, removeCookie } from 'typescript-cookie'

export const cookie = {
    set: (key:string, value: any, expires: number): any => setCookie(key, value, { expires: expires }),
    get: (key:string) :any => getCookie(key),
    all: ():any => getCookies(),
    remove: (key:string): any => removeCookie(key),
};