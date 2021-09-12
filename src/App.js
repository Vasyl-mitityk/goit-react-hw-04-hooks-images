import { useState } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('initialState');

  const sendQueryInState = data => {
    setSearchQuery(data);
  };

  return (
    <>
      <Searchbar onSubmit={sendQueryInState} />
      <ImageGallery query={searchQuery} />
    </>
  );
}
