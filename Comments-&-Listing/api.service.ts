import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:5000'; // your API endpoint here

  public async submitBugReport(data: any) {
    try {
      const response = await axios.post(`${this.baseUrl}/bug/bugreports`, data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  public async getAllBugs() {
    try {
      const response = await axios.get(`${this.baseUrl}/bug/bugreports`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  public async getBugReportById(id: string) {
    try {
      const response = await axios.get(`${this.baseUrl}/bug/bugreports/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
