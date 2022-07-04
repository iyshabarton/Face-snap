import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../face-snap/models/face-snap.model';
import { FaceSnapService } from '../services/face-snap.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss'],
})
export class FaceSnapListComponent implements OnInit {
  faceSnap!: FaceSnap[];
  constructor(private faceSnapService: FaceSnapService) {}

  ngOnInit(): void {
    this.faceSnap = this.faceSnapService.getAllFaceSnaps();
  }
}
