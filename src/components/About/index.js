import React from "react";
import profilePicture from '../../assets/profile/profile-picture.jpg';
import './style.css';

function About() {

    return (
        <section>
            <div>
                <h1 id="about">About Me</h1>
            </div>
            <div className="main-content">
                <img src={profilePicture} alt="profile" />
                <article>

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec enim diam vulputate ut pharetra sit. Egestas fringilla phasellus faucibus scelerisque eleifend. Amet aliquam id diam maecenas ultricies mi eget. 
                        <br/>
                        <br/>
                        Tristique senectus et netus et malesuada fames ac turpis. Quam pellentesque nec nam aliquam. Id aliquet risus feugiat in ante. Aliquet nec ullamcorper sit amet risus nullam eget. Leo vel orci porta non pulvinar neque laoreet. Ornare arcu odio ut sem nulla pharetra. Lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis. Varius duis at consectetur lorem. Praesent tristique magna sit amet. Egestas purus viverra accumsan in nisl. Nisl nisi scelerisque eu ultrices vitae. Nibh praesent tristique magna sit amet purus gravida quis blandit.
                        <br/>
                        <br/>
                        Ac auctor augue mauris augue neque gravida. Tempor nec feugiat nisl pretium fusce id. Commodo ullamcorper a lacus vestibulum sed arcu non odio euismod. Velit aliquet sagittis id consectetur. Iaculis urna id volutpat lacus laoreet non curabitur gravida arcu. Egestas integer eget aliquet nibh praesent tristique magna sit. Viverra maecenas accumsan lacus vel facilisis volutpat. Vitae tempus quam pellentesque nec nam aliquam. Pellentesque diam volutpat commodo sed egestas egestas fringilla. Id aliquet risus feugiat in ante metus dictum at tempor. Duis ut diam quam nulla porttitor massa id. Feugiat sed lectus vestibulum mattis. Aliquet nec ullamcorper sit amet risus nullam eget felis. Non consectetur a erat nam at lectus urna. Aliquam etiam erat velit scelerisque in dictum. Lobortis feugiat vivamus at augue. Tristique sollicitudin nibh sit amet commodo nulla. Sit amet aliquam id diam maecenas ultricies mi eget mauris.

                </article>
            </div>
        </section>
    )
}

export default About;