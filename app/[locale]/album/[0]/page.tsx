import ImageGallery from "@/components/album-components/gallery";
import ProjectHeader from "@/components/album-components/project-header";

const AlbumPage = () => {
  // This is mock data. In a real application, you'd fetch this data based on the album ID
  const projectData = {
    title: "Autumn Collage Series",
    description:
      "A collection of collages inspired by the colors and textures of autumn. This series explores the interplay between natural elements and geometric shapes.",
    mainImage: "/path/to/main-image.jpg",
  };

  const imageUrls = [
    "/path/to/image1.jpg",
    "/path/to/image2.jpg",
    "/path/to/image3.jpg",
    // ... more image URLs
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <ProjectHeader
        title={projectData.title}
        description={projectData.description}
        mainImage={projectData.mainImage}
      />
      <div className="mt-12">
        <ImageGallery images={imageUrls} />
      </div>
    </div>
  );
};

export default AlbumPage;

/* Aquí irá la lógica para obtener dinámicamente
de cada proyecto su título, descripción e imágenes */
