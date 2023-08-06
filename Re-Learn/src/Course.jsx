import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { CardActions, CardContent, CardMedia, Typography } from "@mui/material";

function Course() {
  const path = "http://localhost:3067";

  let { courseId } = useParams();

  const [courses, setCourses] = useState([]);

  // get the list of courses
  useEffect(() => {
    fetch(`${path}/users/courses`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => setCourses(data.courses));
  }, []);

  const course = courses.find((ele) => ele.id == courseId);

  if (!course) {
    return <div>Loading ....</div>;
  }
  return (
    <div>
      <CourseCard course={course} />
    </div>
  );
}

function CourseCard(props) {
  const course = props.course;
  return (
    <Card style={{ width: 300, margin: 10, minHeight: 200 }}>
      <CardMedia style={{ height: 150 }} image={course.imageLink}></CardMedia>
      <CardContent>
        <Typography variant="h5" textAlign={"center"}>
          {course.title}
        </Typography>
        <Typography variant="h6" textAlign={"center"}>
          {course.description}
        </Typography>
      </CardContent>

      <CardActions style={{ display: "flex", justifyContent: "center" }}>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default Course;
