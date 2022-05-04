import React from 'react'
import coverImage from "../../assets/cover/cover-image.jpg";
// using the path and injecting it into our src of the img tag

function About() {
    return (
        <section className='my-5'>
            <h1 id="about">Who am I??</h1>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
            <p>lorem ipsum dolor sit amet, consectetur</p>
        </section>

    );
}

export default About