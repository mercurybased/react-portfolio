import React from 'react';
import Project from '../Project'
import chingu from '../assets/images/chingu.jpg'
import mvc from '../assets/images/mvctech.jpg'
import frog from '../assets/images/frogs.png'
import nosql from '../assets/images/nosql.png'


export default function Portfolio(){
    const projects = [
        {
            id:1,
            name: 'ChinguTalk',
            description: 'our app is a socket.io and Cloudinary centered app with full CRUD functionality in which a user can find others with shared interests',
            deployed:'https://chingutalk.herokuapp.com',
            github:'https://github.com/mercurybased/buddy-system',
            display: chingu
        },
        {
            id:2,
            name: 'MVC tech blog',
            description: 'a homework assignment that used mySQL to create a database and express to create a blog website with CRUD functionality, and the ability to post and comment on posts',
            deployed:'https://annas-tech-blog.herokuapp.com/',
            github:'https://github.com/mercurybased/mvc-tech-blog/',
            display: mvc
        },
        {
            id:3,
            name: 'Talking Frog Generator',
            description:'a silly group project that uses APIs to generate random frog gifs, and either a meditative quote, a joke, or a fun fact',
            deployed:'https://mercurybased.github.io/Cursed-Frog-Generator/',
            github:'https://github.com/mercurybased/Cursed-Frog-Generator',
            display: frog
        },
        {
            id:4,
            name:'NoSql Backend Social Media',
            description:'This application uses the noSql object modeling database program Mongoose to create CRUD functionality, and allows the server side to view and create users, as well as updating and deleting a user. It also allows the user to create a post or thoughts that other users can react to. users may also add and delete friends',
            github:'https://github.com/mercurybased/nosql-social',
            display:nosql
        }
    ]
    return (
        <Project projects={projects} />
    )
}