import React from "react";
const About = ({ data }) => {
    if (data) {
        var name = data.name;
        // var profilepic = "images/" + data.image;
        var bio = data.bio;
        var street = data.address.street;
        var city = data.address.city;
        var state = data.address.state;
        var zip = data.address.zip;
        var phone = data.phone;
        var email = data.email;
    }
    return (
        <>


            <div class="flex flex-col justify-center items-center">
                <section id="about">
                    <div className="row">
                        <div class="flex flex-col justify-center items-center">

                            <h2 class=" text-center-full text-lg font-bold">About Me</h2>
                            <div >
                                <p class="flex flex-col justify-center items-center ">
                                    {bio}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div class="text-center h-100 grid grid-col-3 content-star...">
                            <div className="columns-contact-details">
                                <h2 class=" text-center-full text-lg font-bold">Contact Details</h2>
                                <p className="address">

                                    <span>{name}</span>
                                    <br />
                                    <span>{street}
                                        <br />
                                        {city} {state} ,{zip}
                                    </span>
                                    <br />
                                    <span>{phone}</span>
                                    <br />
                                    <span>{email}</span>

                                </p>
                            </div>
                        </div><br />
                        <div class="flex flex-col justify-center items-center">
                            <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center align-center">
                                <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                                <span >Download</span>
                            </button><br />
                        </div>
                    </div>

                </section>
            </div>
        </>
    )
}
export default About;
