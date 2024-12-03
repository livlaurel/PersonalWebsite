import React from 'react';
import { useParams } from 'react-router-dom';
import aptImage from './apt.jpeg';
import beaImage from './bea.jpeg';
import fisImage from './fis.jpeg';
import womanImage from './woman.jpeg';
import appleImage from './apple.jpg';
import spaceImage from './space.jpg';
import wonderImage from './wonder.jpg';
import trainImage from './train.gif';
import windowImage from './window.jpeg';
import './picture.css';

const images = [
  { id: 1, src: beaImage, title: 'B', description: 'Fav artsist' },
  { id: 2, src: aptImage, title: 'Apartment', description: 'Apartment living' },
  { id: 3, src: womanImage, title: 'Happy', description: 'A happy day' },
  { id: 4, src: fisImage, title: 'Swim', description: "No place like home" },
  { id: 5, src: appleImage, title: 'apple', description: "An apples life" },
  { id: 6, src: spaceImage, title: 'space', description: "A trip to space" },
  { id: 7, src: wonderImage, title: 'wonder', description: "Child like wonder" },
  { id: 8, src: trainImage, title: 'train', description: "Life on the train" },
  { id: 9, src: windowImage, title: 'window', description: "A window" },
];

const ImageDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div>Image not found</div>;
  }

  const image = images.find(img => img.id === parseInt(id));

  if (!image) {
    return <div>Image not found</div>;
  }

  return (
    <div className="ImageDetail">
      <h1>{image.title}</h1>
      <img src={image.src} alt={image.title} />
      <p>{image.description}</p>
    </div>
  );
};

export default ImageDetail;