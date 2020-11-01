const panorama = new PANOLENS.ImagePanorama('assets/pano/HET_0032.JPG');
//const viewer = new PANOLENS.Viewer({ viewIndicator: true, indicatorSize: 30, controlBar: false, autoRotate: true, autoRotateSpeed: 2, autoRotateActivationDuration: 5000 });
const viewer = new PANOLENS.Viewer();

viewer.add(panorama);
