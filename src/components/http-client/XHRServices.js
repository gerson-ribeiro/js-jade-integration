import HttpMethod from "../../models/HttpMethod";

class XHRServices {
    constructor(url = "", header = {}) {
        this._xhr = new XMLHttpRequest();
        this._url = url.endsWith("/") ? url : `${url}/`;
        this._header = header;
        this._responseType = "json";
    }

    setUrl(url) {
        this._url = url.endsWith("/") ? url : `${url}/`;
    }

    setHeaders(name, value) {
        this._xhr.setRequestHeader(name, value);
    }

    setHeadersDefault() {
        this.setHeaders("Content-Type", "application/json");
        this.setHeaders("Access-Control-Allow-Origin", "*");
    }

    setWithCredentials(credentials) {
        this._xhr.withCredentials = credentials;
    }

    get(endpoint) {
        if (!this._url) throw new Error("É necessário informar a URL!");
        this._xhttp.open(HttpMethod.GET, this._url + endpoint);

        return this._send_request(body);
    }

    post(endpoint, body) {
        if (!this._url) throw new Error("É necessário informar a URL!");
        this._xhttp.open(HttpMethod.POST, this._url + endpoint);

        return this._send_request(body);
    }

    formData(endpoint, body) {
        if (!this._url) throw new Error("É necessário informar a URL!");
        this._xhttp.open(HttpMethod.POST, this._url + endpoint);

        return this._send_request(body);
    }

    put(endpoint, body) {
        if (!this._url) throw new Error("É necessário informar a URL!");
        this._xhttp.open(HttpMethod.PUT, this._url + endpoint);

        return this._send_request(body);
    }

    delete(endpoint) {
        if (!this._url) throw new Error("É necessário informar a URL!");
        this._xhttp.open(HttpMethod.DELETE, this._url + endpoint);

        return this._send_request();
    }

    /**
     *
     * @param { requisitionBody } data body to be send
     * @param {*} timeout
     * @returns Promise
     */
    _send_request(data = null, timeout = 60000) {
        this._xhr.withCredentials = this.get_token() ? true : false;
        this._xhr.responseType = this._responseType;

        return new Promise((resolve, reject) => {
            this._xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    resolve(this.response);
                }
            };
            this._xhttp.send(JSON.stringify(data));
            if (timeout) {
                setTimeout(function () {
                    reject("timeout");
                    this._xhttp.abort();
                }, timeout);
            }
        });
    }
}

export default XHRServices;
