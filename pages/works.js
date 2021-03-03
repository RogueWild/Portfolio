import Router from 'next/dist/next-server/lib/router/router';
import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import ImageGallery from 'react-image-gallery';

import Project from '../comps/Project';

import { artImages, designImages } from './api/gallery';

export default function WorksPage({ onCloseClick, HandleDesignGalleryOn, HandleArtGalleryOn, artGalleryOpen, designGalleryOpen, HandleVideoOn, HandleVideoOff, videoOpen }) {

    const HandleLink = (url) => {
        window.open(url, "_blank");
    }

    return (
        <div className="worksPageMain">
            {artGalleryOpen ? <div className="gallery">
                <ImageGallery items={artImages}
                    showPlayButton={false}
                />
                <div onClick={onCloseClick} className="close"></div>
            </div> : null}
            {designGalleryOpen ? <div className="gallery">
                <ImageGallery items={designImages}
                    width={500}
                    height={200}
                    showPlayButton={false}
                />
                <div onClick={onCloseClick} className="close"></div>
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
                        img="/projectCover/gallery.jpg"
                        button1Img="cg_gallery.png"
                        button2Img="design_gallery.png"
                        headerText="Artwork Gallery"
                        buttonVis={true}
                        linksContInvis={true}
                        secondButton={true}
                        line={true}
                        secondHeader={true}
                        onClick1={HandleArtGalleryOn}
                        onClick2={HandleDesignGalleryOn}
                    />
                    <Project

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
                        button1Img="/play.png"
                        linksContInvis={true}
                        buttonVis={true}
                        img="/projectCover/dune.jpg"
                        headerText="Motion Graphics Project"
                        headerColor="black"
                        onClick1={HandleVideoOn}
                    />
                </div>
            </div>
        </div>
    )
}