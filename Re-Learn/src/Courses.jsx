import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { CardActions, CardContent, CardMedia, Typography } from "@mui/material";

function Courses() {
  const path = "http://localhost:3067";

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

  return (
    <div>
      <Typography variant="h4">Courses</Typography>
      {courses.map((course) => {
        return <Course course={course} />;
      })}
    </div>
  );
}

function Course(props) {
  return (
    <div style={{ margin: 10 }}>
      <Card style={{ maxWidth: 300 }}>
        <CardMedia
          style={{ height: 150 }}
          image={props.course.imageLink}
        ></CardMedia>
        <CardContent>
          <Typography variant="h5" textAlign={"center"}>
            {props.course.title}
          </Typography>
          <Typography variant="h6" textAlign={"center"}>
            {props.course.description}
          </Typography>
        </CardContent>

        <CardActions style={{ display: "flex", justifyContent: "center" }}>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Courses;
