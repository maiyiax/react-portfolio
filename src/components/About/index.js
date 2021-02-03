import React from "react";
import profilePicture from '../../assets/profile/profile-picture.jpg';

function About() {

    return (
        <section id="about">
            <div>
                <h1>About Me</h1>
            </div>
            <div className="about-content">
                <img src={profilePicture} alt="profile" />
                <article>

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec enim diam vulputate ut pharetra sit. Egestas fringilla phasellus faucibus scelerisque eleifend. Amet aliquam id diam maecenas ultricies mi eget. 
                        <br/>
                        <br/>
                        Tristique senectus et netus et malesuada fames ac turpis. Quam pellentesque nec nam aliquam. Id aliquet risus feugiat in ante. Aliquet nec ullamcorper sit amet risus nullam eget. Leo vel orci porta non pulvinar neque laoreet. Ornare arcu odio ut sem nulla pharetra. Lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis. 
                        <br/>
                        <br/>
                        Ac auctor augue mauris augue neque gravida. Tempor nec feugiat nisl pretium fusce id. Commodo ullamcorper a lacus vestibulum sed arcu non odio euismod. Velit aliquet sagittis id consectetur. Iaculis urna id volutpat lacus laoreet non curabitur gravida arcu. Egestas integer eget aliquet nibh praesent tristique magna sit. Viverra maecenas accumsan lacus vel facilisis volutpat. Vitae tempus quam pellentesque nec nam aliquam. Pellentesque diam volutpat commodo sed egestas egestas fringilla. 

                </article>
            </div>
        </section>
    )
}

export default About;