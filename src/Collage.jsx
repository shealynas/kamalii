import { ReactPhotoCollage } from "react-photo-collage";

const setting = {
  width: "600px",
  height: ["250px", "170px"],
  layout: [1, 4],
  photos: [
    { source: "url/image-1.jpg" },
    { source: "url/image-2.jpg" },
    { source: "url/image-3.jpg" },
    { source: "url/image-4.jpg" },
    { source: "url/image-5.jpg" },
    { source: "url/image-6.jpg" },
  ],
  showNumOfRemainingPhotos: true,
};

function App() {
  return <ReactPhotoCollage {...setting} />;
}
