export default class StorageService {
    static get(index) {
        const obj = localStorage.getItem(index);
        return obj ? JSON.parse(obj) : null;
    }

    static set(index, object) {
        localStorage.setItem(index, JSON.stringify(object));
    }

    static getSession(index) {
        const obj = sessionStorage.getItem(index);
        return obj ? JSON.parse(obj) : null;
    }

    static setSession(index, object) {
        sessionStorage.setItem(index, JSON.stringify(object));
    }

    static getTemp() {
        const obj = sessionStorage.getItem("temp");
        return obj ? JSON.parse(obj) : null;
    }

    static setTemp(object) {
        sessionStorage.setItem("temp", JSON.stringify(object));
    }

    static clearTemp() {
        sessionStorage.removeItem("temp");
    }

    static clear() {
        localStorage.clear();
        sessionStorage.clear();
    }
}
