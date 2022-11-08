import React from "react";
const Resume = ({ data }) => {
  if (data) {
    // var skillmessage = data.skillmessage;
    var education = data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });
    var work = data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });
    // var skills = data.skills.map(function (skills) {
    //   var className = "bar-expand " + skills.name.toLowerCase();
    //   return (
    //     <li key={skills.name}>
    //       <span style={{ width: skills.level }} className={className}></span>
    //       <em>{skills.name}</em>
    //     </li>
    //   );
    //   });
  }

  return (
    <div class="text-center bg-purple-200">
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span class="text-center-full text-lg font-bold">Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span class="text-center-full text-lg font-bold">Work</span>
            </h1>
          </div>

          <div class="grid grid-col">{work}</div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            {/* <h1>
              <span class="text-center-full text-lg font-bold">Skills</span>
            </h1>
          </div>

          <div className="skill">
            <p>{skillmessage}</p> */}

            <div className="bars">
              {/* <ul className="skills">{skills}
              </ul> */}
              <div className="pt-8 pb-8 bg-purple-200" id="skills">
                <div className="container mx-auto">
                  <div className="flex flex-col">
                    <h2 className="text-2xl text-black font-bold">Skills</h2>
                    <div className="p-8">


                       <p className="text-xl text-black pb-2 pt-2">ReactJs</p>
                      <div className="w-full bg-white h-6 dark:bg-white">
                        <div className="bg-blue-400 h-6" style={{ width:"60%"}} /></div> 
                      <p className="text-xl text-black pb-2 pt-2">HTML</p>
                      <div className="w-full bg-white h-6 dark:bg-white">
                        <div className="bg-blue-400 h-6" style={{ width:"80%"}} />
                      </div>
                      <p className="text-xl text-black pb-2 pt-2">CSS</p>
                      <div className="w-full bg-white h-6 dark:bg-white">
                        <div className="bg-blue-400 h-6" style={{ width:"60%"}} />
                      </div>
                      <p className="text-xl text-black pb-2 pt-2">Javascript</p>
                      <div className="w-full bg-white h-6 dark:bg-white">
                        <div className="bg-blue-400 h-6" style={{ width:"50%"}} />
                      </div>
                      <p className="text-xl text-black pb-2 pt-2">GIT</p>
                      <div className="w-full bg-white h-6 dark:bg-white">
                        <div className="bg-blue-400 h-6" style={{ width:"70%"}} />
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
    </div >
  );
};

export default Resume;