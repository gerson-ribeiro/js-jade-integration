import HttpMethod from "../../models/HttpMethod";

class XHRServices {
    constructor(url = "", header = {}) {
        console.log(url);
        this._xhr = new XMLHttpRequest();
        this._url = url.endsWith("/") ? url : `${url}/`;
        this._header = header;
        this._responseType = "json";
    }

    setUrl(url) {
        this._url = url.endsWith("/") ? url : `${url}/`;
    }

    insertHeaders() {
        if (this._header) return;
        for (let i = 0; i < this.header.length; i++) {
            const head = this.header[i];

            this._xhr.setRequestHeader(head.name, head.value);
        }
    }

    setHeaders(obj) {
        this._xhr.setRequestHeader(obj.name, obj.value);
    }

    setHeadersDefault() {
        this.setHeaders({ name: "Content-Type", value: "application/json" });
        this.setHeaders({ name: "Access-Control-Allow-Origin", value: "*" });
    }

    setWithCredentials(credentials) {
        this._xhr.withCredentials = credentials;
    }

    get(endpoint) {
        if (!this._url) throw new Error("É necessário informar a URL!");
        this._xhr.open(new HttpMethod().GET, this._url + endpoint);
        this.setHeadersDefault();
        this.insertHeaders();

        return this._send_request();
    }

    post(endpoint, body) {
        if (!this._url) throw new Error("É necessário informar a URL!");
        this._xhr.open(new HttpMethod().POST, this._url + endpoint);
        this.setHeadersDefault();
        this.insertHeaders();

        return this._send_request(body);
    }

    formData(endpoint, body) {
        if (!this._url) throw new Error("É necessário informar a URL!");
        this._xhr.open(new HttpMethod().POST, this._url + endpoint);
        this.setHeadersDefault();
        this.insertHeaders();

        return this._send_request(body);
    }

    put(endpoint, body) {
        if (!this._url) throw new Error("É necessário informar a URL!");
        this._xhr.open(new HttpMethod().PUT, this._url + endpoint);
        this.setHeadersDefault();
        this.insertHeaders();

        return this._send_request(body);
    }

    delete(endpoint) {
        if (!this._url) throw new Error("É necessário informar a URL!");
        this._xhr.open(new HttpMethod().DELETE, this._url + endpoint);
        this.setHeadersDefault();
        this.insertHeaders();

        return this._send_request();
    }

    /**
     *
     * @param { requisitionBody } data body to be send
     * @param {*} timeout
     * @returns Promise
     */
    _send_request(data = null, timeout = 60000) {
        this._xhr.responseType = this._responseType;

        return new Promise((resolve, reject) => {
            this._xhr.onreadystatechange = function () {
                if (this.readyState == 4) {
                    resolve(this.response);
                    clearTimeout();
                }
            };
            this._xhr.send(JSON.stringify(data));
            if (timeout) {
                setTimeout(function () {
                    reject("timeout");
                    this._xhr.abort();
                }, timeout);
            }
        });
    }
}

export default XHRServices;
