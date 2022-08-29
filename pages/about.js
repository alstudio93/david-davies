import Head from 'next/head'
import React from 'react'

const About = () => {
    return (
        <>

            <main className="about-main-content dark:bg-black">
                <h2>A Message from David Davies</h2>
                <div>
                    <img className="about-img" src="/david-davies.jpg" alt="" />
                    <p>
                        I am thankful that I get to serve selfless clients. Most attorneys who practice in other areas of the
                        law
                        could only dream of working with clients who are motivated not by their own greed and self interest, but
                        by
                        a deep concern for the people that they love.

                        It has been my experience that most people seek out:

                        An Estate Planning Attorney because they want to ensure that their family, their life’s work, and the
                        causes
                        that they hold dear continue to be cared for after they are gone.

                        An Elder Law Attorney because they want to ensure that their parents or other loved ones receive the
                        best
                        possible care and comfort at a time when they can no longer provide those things for themselves.

                        A Business Attorney because they want to avoid conflicts, grievances, government action, or unnecessary
                        litigation. And, they want smooth partnerships, healthy relationships with their employees, the ability
                        to
                        acquire assets, raise capital, avoid unnecessary taxation, and, generally, create an optimum business
                        environment.

                        An Accredited Veteran’s Attorney because they need assistance navigating the waters of the Veterans
                        Administration. Our goal is to assist our men and and women who served with that navigation.

                        Virtually every member of our society will find themselves in at least one of these four situations in
                        their
                        lifetimes. Therefore, it is our goal to turn these often complex problems into manageable solutions.
                    </p>
                </div>
            </main>
        </>

    )
}

export default About