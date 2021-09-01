import { QueryFormatter } from "../../uteis/QueryFormatter";
import StorageService from "../../uteis/StorageService";
import XHRServices from "../http-client/XHRServices";

export default class XHRManager {
    constructor(url, endpoint) {
        this._service = new XHRServices(url);
        this._endpoint = endpoint;
        this._AUTH = "Authentication";
    }

    setEndpoint(endpoint) {
        this._endpoint = endpoint;
    }
    setUrl(url) {
        this._service.setUrl(url);
    }
    setHeaders(name, value) {
        this._service.setHeaders(name, value);
    }
    setWithCredentials(credentials) {
        this._service.setWithCredentials(credentials);
    }
    set_token(auth) {
        StorageService.set(this._AUTH, `Bearer ${auth}`);
        this.setWithCredentials(true);
    }
    get_token() {
        return StorageService.get(this._AUTH);
    }

    _doEndpoint(obj) {
        if (!this._endpoint)
            throw new Error("Endpoint não cadastrado! Favor implementar...");

        return `${this._endpoint}?${QueryFormatter(obj)}`;
    }

    get(obj) {
        let new_endpoint = this._doEndpoint(obj);

        return this._service.get(new_endpoint);
    }
    get_file(obj) {
        let new_endpoint = this._doEndpoint(obj);

        return this._service.get(new_endpoint);
    }
    get_any(obj) {
        let new_endpoint = this._doEndpoint(obj);

        return this._service.get(new_endpoint);
    }
    getById(id) {
        let new_endpoint = `${this._endpoint}/${id}`;

        return this._service.get(new_endpoint);
    }
    post(body) {
        return this._service.post(this._endpoint, body);
    }
    formData(body) {
        return this._service.formData(this._endpoint, body);
    }
    put(body) {
        return this._service.put(this._endpoint, body);
    }
    delete(id) {
        let new_endpoint = `${this._endpoint}/${id}`;

        return this._service.delete(new_endpoint);
    }
}
