import Course from "./Course"
import React from "./assets/react.webp"
import Java from "./assets/java.jpg"
import HTML from "./../../../Batch 4/my-react-app/src/assets/html.jpg"
import { useState } from "react"

export default function CourseList(){
    const [courses,setCourses]=useState(
        [
       {

            id:1,
            image:React,
            name:"React 1",
            description:"Learn React from scratch",
            price:19.99,
        },
        
        {
            id:2,   
            image:Java,
            name:"Java 1",
            description:"Learn Java from scratch",
            price:29.99,
        },
        {
            id:3,
            image:HTML,
            name:"HTML 1",
            description:"Learn HTML from scratch",
            price:9.99,
        }
    ]
    )
      courses.sort((y,x)=>x.price-y.price);
    //   const fliter = courses.filter((course)=>course.price>10);
    const list = courses.map((course,i)=>
        <Course key ={i} image={course.image} name={course.name} description={course.description} price={course.price} show={true}/>
    )
    return (
        <div className="course-container">
            {list}
        </div>  
    )
}