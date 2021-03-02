import Router from 'next/dist/next-server/lib/router/router';
import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import ImageGallery from 'react-image-gallery';

import Project from '../comps/Project';

const images = [
    {
        original: 'https://cdna.artstation.com/p/assets/images/images/033/066/658/large/mike-u-space-in-my-hex.jpg?1608293227',
        thumbnail: 'https://cdna.artstation.com/p/assets/images/images/033/066/658/large/mike-u-space-in-my-hex.jpg?1608293227',
    },
    {
        original: 'https://cdna.artstation.com/p/assets/images/images/032/186/326/large/mike-u-cyberpunk.jpg?1605713631',
        thumbnail: 'https://cdna.artstation.com/p/assets/images/images/032/186/326/large/mike-u-cyberpunk.jpg?1605713631',
    },
    {
        original: 'https://cdna.artstation.com/p/assets/images/images/010/371/050/large/mike-u-everyday-06-civil-war.jpg?1524066991',
        thumbnail: 'https://cdna.artstation.com/p/assets/images/images/010/371/050/large/mike-u-everyday-06-civil-war.jpg?1524066991',
    },
    {
        original: 'https://cdna.artstation.com/p/assets/images/images/028/359/562/large/mike-u-annihilation-cover.jpg?1594236723',
        thumbnail: 'https://cdna.artstation.com/p/assets/images/images/028/359/562/large/mike-u-annihilation-cover.jpg?1594236723',
    },
];
export default function WorksPage({ HandleGalleryOff, HandleGalleryOn, galleryOpen, HandleVideoOn, HandleVideoOff, videoOpen }) {

    const HandleLink = (url) => {
        window.open(url, "_blank");
    }

    return (
        <div className="worksPageMain">
            {galleryOpen ? <div className="gallery">
                <ImageGallery items={images}
                    width={500}
                    height={200}
                    showPlayButton={false}
                />
            </div> : null}
            {videoOpen ? <div className="video">
                <ReactPlayer
                    url='https://www.youtube.com/watch?v=eCWM19lucUI'
                    width={960}
                    height={640}
                    controls={true}
                    onEnded={HandleVideoOff}
                />
            </div> : null}
            <div className="worksPage">
                <div className="projects">
                    <Project
                        maxWidth="835px"
                    />
                    <Project
                        img="/projectCover/gallery.jpg"
                        buttonImg="gallery.png"
                        headerText="Artwork Gallery"
                        buttonVis={true}
                        linksContInvis={true}
                        onClick={HandleGalleryOn}
                    />
                </div>
                <div className="projects">
                    <Project
                        img="/projectCover/tut.jpg"
                        headerText="Tutor Talk"
                        headerColor="black"
                        invisible3={true}
                        icon1="/social/github-b.png"
                        icon2="/social/app.png"
                        onIcon1Click={() => HandleLink("https://github.com/RogueWild/tutor-talk")}
                        onIcon2Click={() => HandleLink("https://tutor-talk.vercel.app/")}
                    />
                    <Project
                        maxWidth="835px"
                        buttonImg="/play.png"
                        linksContInvis={true}
                        buttonVis={true}
                        img="/projectCover/dune.jpg"
                        headerText="Motion Graphics Project"
                        headerColor="black"
                        onClick={HandleVideoOn}
                    />
                </div>
            </div>
        </div>
    )
}