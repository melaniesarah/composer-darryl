import React from 'react';
import darryl2b80 from './darryl2b80.jpg';
import aboutImage from './about_darryl_johnson.gif';

function About() {
    return (
      <div className="content">
        <div class="main-content">
          <h1>
            <img
              src={aboutImage}
              alt="About Darryl Johnson II"
            />
          </h1>
          <br></br>
          <p class="textblock black">
            Darryl Johnson II (b. 1984) is a native of Southern California. An early interest in music led him to study several instruments as well as music theory, composition, and orchestration. A lengthy background in music transcription and arranging has fostered a
            growing interest in diverse musical styles, yielding a fresh, personal style that comprises a patchwork of music old, new,
            popular, and traditional.
          </p>
          <br></br>
          <p></p>
          <img
            src={darryl2b80}
            border="2"
            alt="Darryl Johnson II in Orange County"
          />

          <br></br>

          <p class="textblock black">
            Today his primary interests involve bringing new music to performing
            groups that strikes the delicate but crucial balance necessary for
            music that is constructive and fulfilling for both musicians and
            listeners. Descriptions of his works have ranged from "fun and
            catchy", to "deep and powerful", to "rich and beautiful".
            Consequently, his music has been heard in the concert hall, on the
            marching band field, and within the vast world of multimedia. As a
            composer, clinician, and speaker, Darryl Johnson II deals with an
            array of issues surrounding the field of music and its industry with
            the primary purpose of communicating the benefit, necessity, and
            sheer power of meaningful art.
          </p>
        </div>
      </div>
    );
}

export default About;
