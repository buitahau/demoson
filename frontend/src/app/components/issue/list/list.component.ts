import { Component, OnInit } from '@angular/core';
import {IssueService} from "../../../services/issues/issue.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private issueService: IssueService) { }

  ngOnInit() {
    // this.issueService.getIssues().subscribe(response => this.videos = response);
    // this.issueService.getIssues().subscribe(issues => {
    //   console.log(issues);
    // });
  }

}
