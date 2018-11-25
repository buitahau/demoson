import { Component, OnInit } from '@angular/core';
import {IssueService} from "../../../services/issues/issue.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(private issueService: IssueService) { }

  ngOnInit() {

  }

}
