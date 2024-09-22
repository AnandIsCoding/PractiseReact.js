import React from 'react';
import Cards from './components/Cards';
import Counter from './components/Counter';
import Celebs from './components/Celebs';

function App() {
  const celebsdetail = [
    {
      name: "Sharukh Khan",
      image: "https://static.tnn.in/thumb/msid-112343573,thumbsize-17064,width-1280,height-720,resizemode-75/112343573.jpg?quality=100",
      profession: "Great Actor",
      friends: false
    },
    {
      name: "Amir Khan",
      image: "https://media.gettyimages.com/id/1085634120/photo/shanghai-china-indian-actor-aamir-khan-promotes-film-thugs-of-hindostan-on-december-22-2018.jpg?s=612x612&w=0&k=20&c=LN17j6wcA-9ZDOdJKSiGBHy44N5-KsT8e4HFr859piY=",
      profession: "Mr Perfectionist",
      friends: false
    },
    {
      name: "Salman Khan",
      image: "https://imgs.search.brave.com/1ZvyZ-_3BGbpxDuR4DmI_TefAONszLkiTeSuPISD_30/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIz/NTkxNzI0OS9waG90/by9ib2xseXdvb2Qt/YWN0b3Itc2FsbWFu/LWtoYW4tYXR0ZW5k/cy1hLXByb21vdGlv/bmFsLWV2ZW50LWlu/LW11bWJhaS1vbi1v/Y3RvYmVyLTE2LTIw/MjEuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPXhFNlUteTBZ/WnRUUU1vM2JpQlhU/c2MxV1JGcTVSUzVs/VWlvQ3FST085N2s9",
      profession: "Superstar",
      friends: true
    }
  ];

  return (
    <div className='w-full h-screen bg-zinc-300 flex justify-center items-center gap-6 flex-wrap'>
      {celebsdetail.map((item, index) => (
        <Celebs key={index} details={item} />
      ))}
    </div>
  );
}

export default App;
