import React from 'react'
import { Icon } from "@iconify/react";
import reactIcon from "@iconify/icons-logos/react";
import pythonIcon from "@iconify/icons-logos/python"
import nodeJs from "@iconify/icons-logos/nodejs"

function About({primData,sharedData}) {
    
    let profilepic = "images/"+sharedData?.basic_info.image
    let sectionName = primData?.basic_info.section_name.about
    let hello=primData.basic_info.description_header
    let about = primData.basic_info.description

  return (
    <section id="about">
    <div className="col-md-12">
      <h1 style={{ color: "black" }}>
        <span>{sectionName}</span>
      </h1>
      <div className="row center mx-auto mb-5">
        <div className="col-md-4 mb-5 center">
          <div className="polaroid">
            <span style={{ cursor: "auto" }}>
              <img
                height="180px"
                src={profilepic}
                alt="Avatar placeholder"
              />
              <Icon
                icon={pythonIcon}
                style={{ fontSize: "400%", margin: "9% 3% 0 3%" }}
              />
              <Icon
                icon={reactIcon}
                style={{ fontSize: "400%", margin: "9% 3% 0 3%" }}
              />
              <Icon
                icon={nodeJs}
                style={{ fontSize: "400%", margin: "9% 3% 0 3%" }}
              />
            </span>
          </div>
        </div>

        <div className="col-md-8 center">
          <div className="col-md-10">
            <div className="card">
              <div className="card-header">
                <span
                  className="iconify"
                  data-icon="emojione:red-circle"
                  data-inline="false"
                ></span>{" "}
                &nbsp;{" "}
                <span
                  className="iconify"
                  data-icon="twemoji:yellow-circle"
                  data-inline="false"
                ></span>{" "}
                &nbsp;{" "}
                <span
                  className="iconify"
                  data-icon="twemoji:green-circle"
                  data-inline="false"
                ></span>
              </div>
              <div
                className="card-body font-trebuchet text-justify ml-3 mr-3"
                style={{
                  height: "auto",
                  fontSize: "132%",
                  lineHeight: "200%",
                }}
              >
                <br />
                <span className="wave">{hello} :) </span>
                <br />
                <br />
                {about}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About