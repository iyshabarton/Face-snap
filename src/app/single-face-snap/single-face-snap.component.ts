import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../face-snap/models/face-snap.model';
import { FaceSnapService } from '../services/face-snap.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss'],
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  buttonText!: string;

  constructor(
    private faceSnapService: FaceSnapService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.buttonText = 'Oh Snap!';
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId);
  }
  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Oops, unSnap!';
    } else {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Oh Snap!';
    }
  }
}
