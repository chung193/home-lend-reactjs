/* 
localstorage save on browser and can set, get, delete

 */
export const storage = {
    get: (key:string): any => localStorage.getItem(key),
    set: (key:string, data: any): any => localStorage.setItem(key, data),
    remove: (key:string): any => localStorage.removeItem(key),
    getObject: (key:string): object => JSON.parse(localStorage.getItem(key) || '{}'),
    setObject: (key: string, data: object): any => localStorage.setItem(key, JSON.stringify(data)),
};