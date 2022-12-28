import axios from "axios";


export default class PaymentGatewaysClient {

    static baseUrl = "https://api.oxinance.com";

    static async getStripePayConfig(mode, projectId, callback, errorCallback) {
        axios.get(`${this.baseUrl}/dashboard/v1/projects/${projectId}/pay-config/stripe/${mode}`).then(response => callback(response)).catch(error => errorCallback(error));
    }

    static async createStripePayConfig(mode, projectId, data, callback, errorCallback) {
        axios.post(`${this.baseUrl}/dashboard/v1/projects/${projectId}/pay-config/stripe/${mode}`, data).then(response => callback(response)).catch(error => errorCallback(error));
    }

    static async editStripePayConfig(mode, projectId, data, callback, errorCallback) {
        axios.put(`${this.baseUrl}/dashboard/v1/projects/${projectId}/pay-config/stripe/${mode}`, data).then(response => callback(response)).catch(error => errorCallback(error));
    }

    static async deleteStripePayConfig(mode, projectId, callback, errorCallback) {
        axios.delete(`${this.baseUrl}/dashboard/v1/projects/${projectId}/pay-config/stripe/${mode}`).then(response => callback(response)).catch(error => errorCallback(error));
    }

    static async getBinancePayConfig(mode, projectId, callback, errorCallback) {
        axios.get(`${this.baseUrl}/dashboard/v1/projects/${projectId}/pay-config/binance/${mode}`).then(response => callback(response)).catch(error => errorCallback(error));
    }

    static async createBinancePayConfig(mode, projectId, data, callback, errorCallback) {
        axios.post(`${this.baseUrl}/dashboard/v1/projects/${projectId}/pay-config/binance/${mode}`, data).then(response => callback(response)).catch(error => errorCallback(error));
    }}
