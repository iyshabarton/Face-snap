import { FaceSnap } from '../face-snap/models/face-snap.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapService {
  faceSnap: FaceSnap[] = [
    {
      id: 1,
      title: 'Husband material',
      description: 'The best thing to wake up to in the morning',
      createdDate: new Date(),
      snaps: 5,
      imageUrl:
        'https://media.gqmagazine.fr/photos/5f6e0fa4a0f60bdb41420e8a/4:3/w_1439,h_1079,c_limit/20200924-hardy.jpg',
      location: 'United Kingdom',
    },
    {
      id: 2,
      title: 'Best food ever',
      description: 'The best food you will ever eat in your life',
      createdDate: new Date(),
      snaps: 3,
      imageUrl:
        'https://i.pinimg.com/originals/b7/d1/c9/b7d1c9a399c2698f12152e100d529da6.jpg',
    },
    {
      id: 3,
      title: 'The only place to be',
      description: 'The only place to sit back chill and relax',
      createdDate: new Date(),
      snaps: 10,
      imageUrl:
        'https://www.scandinaviastandard.com/wp-content/uploads/2019/07/Norway-Fjords-Hardangerfjord-Trolltunga-the-Best-Fjords-to-Visit-in-Norway-Scandinavia-Standard-1.jpg',
      location: 'Norway',
    },
  ];

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnap;
  }
  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnap.find(
      (faceSnap) => faceSnap.id === faceSnapId
    );
    if (!faceSnap) {
      throw new Error('FaceSnap not found!');
    } else {
      return faceSnap;
    }
  }
  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }
}
