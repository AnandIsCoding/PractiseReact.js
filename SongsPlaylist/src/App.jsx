import { useState } from 'react'
import react from 'react';
import Navbar from './Components/Navbar'
import Song from './Components/Song';

function App() {  

  const songdetails = [
    {
      name:"Makhna",
      artist:"Yo Yo Honey singh",
      image:"https://imgs.search.brave.com/2d2MG7wdmOgbiuFI-B2NkNaYGw4XxkJy2hGJCzxMKQ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaW5kaWFuZXhw/cmVzcy5jb20vMjAy/MC8wNS9Zby1Zby1I/b25leS1TaW5naC0x/MjAwLmpwZz93PTY0/MA",
      added:false
    },
    {
      name: "Blinding Lights",
      artist: "The Weeknd",
      image: "https://deadline.com/wp-content/uploads/2024/08/Screenshot-2024-08-07-at-1.49.07%E2%80%AFAM.png?w=681&h=383&crop=1",
      added: false
    },
    {
      name: "Shape of You",
      artist: "Ed Sheeran",
      image: "https://lastfm.freetls.fastly.net/i/u/avatar170s/b3b435dc87a4b4336fe607fd2058f419",
      added: false
    },
    {
      name: "Levitating",
      artist: "Dua Lipa",
      image: "https://imgs.search.brave.com/eI-KhSKCRnJuv8zo_Yoiv-_qRftT1Mi7KvL_Ac7JH-Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQz/OTk1NzY1MS9waG90/by9zeWRuZXktYXVz/dHJhbGlhLWR1YS1s/aXBhLXBlcmZvcm1z/LWF0LXF1ZG9zLWJh/bmstYXJlbmEtb24t/bm92ZW1iZXItMDgt/MjAyMi1pbi1zeWRu/ZXktYXVzdHJhbGlh/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1wSW52S0N1Q2lx/RF9EdnJobVROekFO/LTVaMURtbnRBYzlf/ZkotU2pqZEw0PQ",
      added: false
    },
    {
      name: "Senorita",
      artist: "Shawn Mendes ",
      image: "https://media.gettyimages.com/id/1201527339/photo/hollywood-california-shawn-mendes-poses-as-sir-lucian-grainge-is-honored-with-a-star-on-the.jpg?s=612x612&w=0&k=20&c=ZjSiEj5MMRp_yORc0xo-vXqUYwXI_Z-QpTsjHGgZsb4=",
      added: false
    },
    {
      name: "Despacito",
      artist: "Luis Fonsi ",
      image: "https://media.gettyimages.com/id/874385046/photo/las-vegas-nv-luis-fonsi-performs-onstage-at-spotify-celebrates-latin-music-and-their-viva.jpg?s=612x612&w=0&k=20&c=RD9vjr-Q0jDL55-7NyipzFKXabwOubLQJFY2FLfvjB8=",
      added: false
    },
    {
      name: "Bad Guy",
      artist: "Billie Eilish",
      image: "https://media.gettyimages.com/id/1500685908/photo/paris-france-billie-eilish-performs-onstage-during-global-citizens-power-our-planet-live-in.jpg?s=612x612&w=0&k=20&c=48xGIrP9YLFUzFoSjcL2woDprJY4oKoByquzUALyvSY=",
      added: false
    },
    {
      name: "Rockstar",
      artist: "Post Malone",
      image: "https://media.gettyimages.com/id/1391908461/photo/indio-california-post-malone-performs-at-the-sahara-tent-at-2022-coachella-valley-music-and.jpg?s=612x612&w=0&k=20&c=yb_l9DQbjQ7VRL9o6U4v9PSAS-tjovdCpmUo2pJDyxA=",
      added: false
    },
    {
      name: "Peaches",
      artist: "Justin Bieber",
      image: "https://media.gettyimages.com/id/1389378571/photo/las-vegas-nevada-justin-bieber-and-hailey-bieber-attend-the-64th-annual-grammy-awards-at-mgm.jpg?s=612x612&w=0&k=20&c=MuoRPvgvWt6gej4tUJpFtG-Iim9mKLHrLuwO25lloto=",
      added: false
    },
    {
      name: "Closer",
      artist: "The Chains",
      image: "https://media.gettyimages.com/id/76156224/photo/vienna-austria-diana-princess-of-wales-wearing-a-midnight-blue-velvet-off-the-shoulder-evening.jpg?s=612x612&w=0&k=20&c=1SMhG-Ed27IQyxXh_-T8ichivIK0WqqhUY-sJVfNc4o=",
      added: false
    },
    {
      name: "Dynamite",
      artist: "BTS",
      image: "https://media.gettyimages.com/id/1207828603/photo/new-york-new-york-jimin-jungkook-rm-j-hope-v-jin-and-suga-of-the-k-pop-boy-band-bts-visit-the.jpg?s=612x612&w=0&k=20&c=zDbwYCEei4fi4xgBOv8dJ5KACFzcJ2UA77S35HQWfBU=",
      added: false
    },
    {
      name: "Peaches",
      artist: "Justin Bieber",
      image: "https://media.gettyimages.com/id/1389378571/photo/las-vegas-nevada-justin-bieber-and-hailey-bieber-attend-the-64th-annual-grammy-awards-at-mgm.jpg?s=612x612&w=0&k=20&c=MuoRPvgvWt6gej4tUJpFtG-Iim9mKLHrLuwO25lloto=",
      added: false
    },
    
    
    
  ]

  const handleAddtofavourites = ()=>{
		setData({...data,added:!data.added})
	}

  return (
   <div className=' w-full h-screen   '>
      <Navbar/>
      <div className='w-full flex flex-wrap gap-10 px-20 py-12'>
        {

            songdetails.map((item,index)=>{
              return <Song key={index} details={item} handleAddtofavourites={handleAddtofavourites}/>
            })
        
        }
        
        
      
     
      </div>

   </div>
  )
}

export default App
