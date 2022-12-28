import axios from "axios";


export default class ProjectsClient {

    static baseUrl = "https://api.oxinance.com";

    static async getProjects(callback, errorCallback) {
        axios.get(`${this.baseUrl}/dashboard/v1/projects`).then(response => callback(response)).catch(error => errorCallback(error));
    }

    static async createProject(data, callback, errorCallback) {
        axios.post(`${this.baseUrl}/dashboard/v1/projects`, data).then(response => callback(response)).catch(error => errorCallback(error));
    }

    static async getOnboardStatus(mode, id, callback, errorCallback) {
        axios.get(`${this.baseUrl}/dashboard/v1/projects/${id}/onboard/${mode}/status`).then(response => callback(response)).catch(error => errorCallback(error));
    }

    static async getOnboardUrl(mode, id, callback, errorCallback) {
        axios.get(`${this.baseUrl}/dashboard/v1/projects/${id}/onboard/${mode}`).then(response => callback(response)).catch(error => errorCallback(error));
    }
}
