import { Component, Input, OnInit } from '@angular/core';
import { TreeData } from '../interfaces/treedata.interface';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css'],
})
export class TreeViewComponent implements OnInit {
  @Input() treeData!: TreeData;
  constructor() {}

  ngOnInit() {}
}
