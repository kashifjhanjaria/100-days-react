import { useState } from "react";

function App() {
  const [images, setImages] = useState([
    {
      id: 0,
      image: "src/assets/2.jpg",
      isActive: true,
    },
    {
      id: 1,
      image: "src/assets/1.jpg",
      isActive: false,
    },
    {
      id: 2,
      image: "src/assets/2.jpg",
      isActive: false,
    },
    {
      id: 3,
      image: "src/assets/1.jpg",
      isActive: false,
    },
    {
      id: 4,
      image: "src/assets/2.jpg",
      isActive: false,
    },
    // ... other images
  ]);

  const handleClickSizeChange = (id) => {
    const updatedImages = images.map((img) =>
      img.id === id ? { ...img, isActive: true } : { ...img, isActive: false }
    );
    setImages(updatedImages);
  };

  return (
    <>
      <div className='w-full h-screen border flex justify-center items-center'>
        <div className='allelement w-[90%] h-[80%] border flex gap-2'>
          {images.map((element) => (
            <div
              key={element.id}
              className={`${
                element.isActive ? "w-[60%] " : "w-[10%] rounded-[50px] "
              } h-full  overflow-hidden`}
              onClick={() => handleClickSizeChange(element.id)}
            >
              <img
                className="w-full h-full"
                src={element.image}
                alt="spice"
                title="Hello"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
