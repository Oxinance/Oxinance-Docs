import axios from "axios";


export default class ProductsClient {

    static baseUrl = "https://api.oxinance.com";

    static async getProducts(mode, projectId, callback, errorCallback) {
        axios.get(`${this.baseUrl}/dashboard/v1/projects/${projectId}/products/${mode}`).then(response => callback(response)).catch(error => errorCallback(error));
    }

    static async deactivateProduct(projectId, productId, mode, callback, errorCallback) {
        axios.put(`${this.baseUrl}/dashboard/v1/projects/${projectId}/products/${productId}/deactivate/${mode}`).then(response => callback(response)).catch(error => errorCallback(error));
    }

    static async activateProduct(projectId, productId, mode, callback, errorCallback) {
        axios.put(`${this.baseUrl}/dashboard/v1/projects/${projectId}/products/${productId}/activate/${mode}`).then(response => callback(response)).catch(error => errorCallback(error));
    }
}
