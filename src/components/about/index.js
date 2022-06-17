import React from 'react';
import coverHeadshot from "../../assets/cover/headcovercenter.jpeg";

function About() {
    return(
        <section className="my-5">
            <h4 id="about"> About Me</h4>
            <p className="flex-wrap"> An aspiring developer who's eager to learn new technologies and improve skillsets.</p>
            <img src={coverHeadshot} className="px-1 py-1" style={{ width: "100%" }} alt="cover" />
        </section>
    );
}

export default About;