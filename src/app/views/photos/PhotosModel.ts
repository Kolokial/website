export class PhotosModel {

    public photosPath = '/assets/images/photos/';
    public _photos: string[] = [
        'DSCF1006.JPG',
        'DSCF1007.JPG',
        'DSCF1008.JPG',
        'DSCF1009.JPG',
        'DSCF1010.JPG',
        'DSCF1011.JPG',
        'DSCF1012.JPG'
    ];

    public set photos(photos: string[]) {
        this._photos = photos;
    }

    public get photos() {
        return this._photos.map(photo => photo = this.photosPath + photo);
    }
}
