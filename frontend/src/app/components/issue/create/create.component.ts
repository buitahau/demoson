import { Component, OnInit } from '@angular/core';
import {IssueService} from "../../../services/issues/issue.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private issueService: IssueService) { }

  ngOnInit() {
  }

}
