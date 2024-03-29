import React, { useEffect, useState } from 'react'
import Canvas from "../utils/canvas"
import Footer from '../utils/footer'

export default function Blog() {
    const [blog, setBlog] = useState([])
    useEffect(() => {
        setBlog([
            {
                "title" : "Songbird Chronicles: Notes on the Melody",
                "img" : "https://demo.leafcolor.com/conferencepro/wp-content/uploads/2018/01/event_ticket_wordpress_theme_7-555x472.jpg",
                "content" : `Vocal Voyager: Journey through the world of vocal performance, from soaring soprano solos to gritty rock anthems, with insights from seasoned vocalists.
                Lyric Luminary: Delve into the poetry of songwriting as we analyze the meaning behind the lyrics and uncover the stories behind the songs.
                Chord.`,
                "name" : "Henry John",
            },
            {
                "title" : "Tempo Tales: Stories Behind the Sound",
                "img" : "https://demo.logichunt.com/themes/emeet/wp-content/uploads/2018/07/news1.jpg",
                "content" : "Melancholy Melodies: Dive into the world of melancholic music, from haunting ballads to introspective indie tracks, with reviews and recommendations for your next moody playlist.",
                "name" : "Dorathy Emma",
            },
            {
                "title" : "Sound Spectrum: Exploring the Diversity of Music",
                "img" : "https://demo.logichunt.com/themes/emeet/wp-content/uploads/2018/07/news3.jpg",
                "content" : "enre Guru: Become a genre guru with our guides to navigating the vast landscape of musical genres, from classical to country, rock to reggae, and everything in between.",
                "name" : "Sammy Dane",
            },
            {
                "title" : "Harmony Haven: Where Music Meets Meaning",
                "img" : "https://demo.logichunt.com/themes/emeet/wp-content/uploads/2018/07/news2.jpg",
                "content" : "Harmonic Heroine: Celebrate the heroines of harmony as we shine a spotlight on female artists and bands whose harmonic innovations have left an indelible mark on music history.",
                "name" : "Wilson Dave",
            },
            {
                "title" : "Vinyl Vibes: Reviving Retro Tunes",
                "img" : "https://victoriousfamily.org/wp-content/uploads/2019/09/dycb-book-shadow.png",
                "content" : "Retro Rhapsody: Relive the glory days of vinyl with our nostalgic journey through the golden age of music, featuring classic albums, forgotten gems, and vinyl collecting tips.",
                "name" : "Noah Peter",
            },
            {
                "title" : "Slim Shady Spotlight: Exploring Eminem's Impact",
                "img" : "https://demo.leafcolor.com/conferencepro/wp-content/uploads/2010/09/35274271976_b051a9bc97_h-177x177.jpg",
                "content" : "Eminem Essentials: Dive into Eminem's discography with in-depth reviews and analysis of his iconic albums, from 'The Slim Shady LP' to 'Music to Be Murdered By'.",
                "name" : "Johnson Lam",
            },
            {
                "title" : "Shady Records Gazette: Keeping Up with Eminem's Label",
                "img" : "https://demo.leafcolor.com/conferencepro/wp-content/uploads/2018/01/event_ticket_wordpress_theme_3-180x180.jpg",
                "content" : "Shady Showdown: Explore the artists and albums signed to Shady Records, Eminem's record label, with reviews, interviews, and behind-the-scenes glimpses into the label's operations.",
                "name" : "Lotta Maiden",
            },
            {
                "title" : "Eminem Enthusiast: Your Source for Shady News",
                "img" : "https://demo.leafcolor.com/conferencepro/wp-content/uploads/2018/01/event_ticket_wordpress_theme_5-180x180.jpg",
                "content" : `Shady Styles: Get the scoop on Eminem's fashion, lifestyle, and interests outside of music, from his iconic stage outfits to his favorite hobbies and pastimes.
                Eminem Extras: Explore the hidden gems of Eminem's career, from rare tracks and unreleased material to obscure collaborations and deep cuts.
                `,
                "name" : "Steve Miz",
            },
            {
                "title" : "Eminem Empire: Building Bridges through Rhymes",
                "img" : "https://victoriousfamily.org/wp-content/uploads/2024/02/DALL%C2%B7E-2023-11-14-10.06.43-Photograph_-A-torch-labeled-morality-casting-its-light-upon-a-group-of-homes-below-illuminating-them-with-a-warm-golden-glow.-The-homes-are-set-ag-jpeg.webp",
                "content" : "Rap Revolution: Dive into Eminem's revolutionary impact on the rap game, as we explore his boundary-pushing lyrics, innovative flow, and fearless approach to storytelling.",
                "name" : "Mark Owen",
            }
        ])
    })
    return (
        <div className="landing blogs">
            <div className="top">
                <Canvas />
                <div className="text_content">
                    <div className="d-flex justify-content-between">
                        <h2 className="">Eminem Fan Card</h2>
                        <p className="mb-0 btn" data-bs-toggle="offcanvas" data-bs-target="#menu"><i class="fa-solid fa-list"></i></p>
                    </div>
                    <div className="desc">
                        <h1 className="fw-bold mb-3 text-center">Blogs</h1>
                        <p className="text-center">Explore a tapestry of insights, inspiration, and knowledge – each blog a unique thread weaving together stories, perspectives, and expertise. Delve into our collection and discover the richness of ideas waiting to be explored and shared.</p>
                    </div>
                </div>
                <img src="data:image/jpeg;base64,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" alt="" />
            </div>

            <div className="section1">
                <h2 className="text-center fw-bold mb-4">Latest <span className="text_color">Blogs</span></h2>
                {
                    blog.map((val) => {
                        return (
                            <div className="box">
                                <h2 className="fw-bold mb-2">{val.title}</h2>
                                <p className="fw-bold mb-1">Posted by: {val.name}</p>
                                <p className="date mb-4 text_color">Tues 02, 2023</p>
                                <div className="img">
                                    <img src={val.img} alt="" />
                                </div>
                                <p className="content">{val.content}</p>
                            </div>
                        )
                    })
                }
            </div>

            <Footer/>

        </div>
    )
}
