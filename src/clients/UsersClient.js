import axios from "axios";


export default class UsersClient {

    static baseUrl = "https://api.oxinance.com";

    static async getProjectUsers(mode, projectId, callback, errorCallback) {
        axios.get(`${this.baseUrl}/dashboard/v1/projects/${projectId}/users/${mode}`).then(response => callback(response)).catch(error => errorCallback(error));
    }

    static async getProjectUser(mode, projectId, userId, callback, errorCallback) {
        axios.get(`${this.baseUrl}/dashboard/v1/projects/${projectId}/users/${mode}/${userId}`).then(response => callback(response)).catch(error => errorCallback(error));
    }

    static async updateProjectUser(mode, projectId, userId, data, callback, errorCallback) {
        axios.put(`${this.baseUrl}/dashboard/v1/projects/${projectId}/users/${mode}/${userId}`, data).then(response => callback(response)).catch(error => errorCallback(error));
    }

    static async deleteProjectUser(mode, projectId, userId, callback, errorCallback) {
        axios.delete(`${this.baseUrl}/dashboard/v1/projects/${projectId}/users/${mode}/${userId}`).then(response => callback(response)).catch(error => errorCallback(error));
    }

    static async updateProjectUserPassword(mode, projectId, userId, data, callback, errorCallback) {
        axios.put(`${this.baseUrl}/dashboard/v1/projects/${projectId}/users/${mode}/${userId}/change-password`, data).then(response => callback(response)).catch(error => errorCallback(error));
    }
    static async createProjectUser(mode, projectId, data, callback, errorCallback) {
        axios.post(`${this.baseUrl}/dashboard/v1/projects/${projectId}/users/${mode}`, data).then(response => callback(response)).catch(error => errorCallback(error));
    }

    static async getStripeCostumers(mode, projectId, callback, errorCallback ) {
        axios.get(`${this.baseUrl}/dashboard/v1/projects/${projectId}/stripe-costumers/${mode}`).then(response => callback(response)).catch(error => errorCallback(error));
    }

    static async getShippingAddresses(mode, projectId, userId, callback, errorCallback) {
        axios.get(`${this.baseUrl}/dashboard/v1/projects/${projectId}/users/${mode}/${userId}/shipping-addresses`).then(response => callback(response)).catch(error => errorCallback(error));
    }

    static async deleteShippingAddress(mode, projectId, userId, shippingAddressId, callback, errorCallback) {
        axios.delete(`${this.baseUrl}/dashboard/v1/projects/${projectId}/users/${mode}/${userId}/shipping-addresses/${shippingAddressId}`).then(response => callback(response)).catch(error => errorCallback(error));
    }

    static async createShippingAddress(mode, projectId, userId, data, callback, errorCallback) {
        axios.post(`${this.baseUrl}/dashboard/v1/projects/${projectId}/users/${mode}/${userId}/shipping-addresses`, data).then(response => callback(response)).catch(error => errorCallback(error));
    }

    static async updateShippingAddress(mode, projectId, userId, shippingAddressId, data, callback, errorCallback) {
        axios.put(`${this.baseUrl}/dashboard/v1/projects/${projectId}/users/${mode}/${userId}/shipping-addresses/${shippingAddressId}`, data).then(response => callback(response)).catch(error => errorCallback(error));
    }
}
