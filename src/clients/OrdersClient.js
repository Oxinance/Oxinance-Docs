import axios from "axios";


export default class OrdersClient {

    static baseUrl = "https://api.oxinance.com";

    static async getOrders(mode, projectId, callback, errorCallback) {
        axios.get(`${this.baseUrl}/dashboard/v1/projects/${projectId}/orders/${mode}`).then(response => callback(response)).catch(error => errorCallback(error));
    }

    static async getOrder(mode, projectId, orderId, callback, errorCallback) {
        axios.get(`${this.baseUrl}/dashboard/v1/projects/${projectId}/orders/${orderId}/${mode}`).then(response => callback(response)).catch(error => errorCallback(error));
    }

    static async createTrackingInformation(mode, projectId, orderId, data, callback, errorCallback) {
        axios.post(`${this.baseUrl}/dashboard/v1/projects/${projectId}/orders/${orderId}/tracking-information/${mode}`, data).then(response => callback(response)).catch(error => errorCallback(error));
    }

    static async updateTrackingInformation(mode, projectId, orderId, data, callback, errorCallback) {
        axios.put(`${this.baseUrl}/dashboard/v1/projects/${projectId}/orders/${orderId}/tracking-information/${mode}`, data).then(response => callback(response)).catch(error => errorCallback(error));
    }}
