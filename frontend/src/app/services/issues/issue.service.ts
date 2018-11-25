import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  uri = 'http://localhost:4000';

  constructor(private  http: HttpClient) {

  }

  getIssues(){
    // let listIssues = [];
    // listIssues.push(this.generateIssue("Title 1", "response 1", "description 1", "severity", "status 1"));
    // listIssues.push(this.generateIssue("Title 2", "response 2", "description 2", "severity", "status 2"));
    // listIssues.push(this.generateIssue("Title 3", "response 3", "description 3", "severity", "status 3"));
    // listIssues.push(this.generateIssue("Title 4", "response 4", "description 4", "severity", "status 3"));
    //
    // return listIssues;
    return this.http.get(`${this.uri}`)
  }

  getIssueById(id){
    return this.http.get(`${this.uri}/issues/${id}`)
  }

  addIssue(title, responsive, description, severity){
    const issue = {
      title: title, responsive : responsive, description : description, severity : severity
    };

    return this.http.post(`${this.uri}/issues/add`, issue);
  }

  updateIssue(id, title, responsive, description, severity, status){
    const issue = {
      title: title,
      responsive: responsive,
      description: description,
      severity: severity,
      status : status
    };

    return this.http.post(`${this.uri}/issues/update/${id}`, issue);
  }

  deleteIssue(id){
    return this.http.get(`${this.uri}/issues/delete/${id}`);

  }

  generateIssue(title, responsive, description, severity, status){
    return {
      title: title,
      responsive: responsive,
      description: description,
      severity: severity,
      status : status
    };
  }
}
