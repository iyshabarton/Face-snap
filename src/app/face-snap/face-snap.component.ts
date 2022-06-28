import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  buttonText!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
