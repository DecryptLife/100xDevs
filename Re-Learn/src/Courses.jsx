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
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {/* <Typography variant="h4">Courses</Typography> */}
      {courses.map((course) => {
        return <Course course={course} />;
      })}
    </div>
  );
}

export function Course(props) {
  return (
    <Card style={{ width: 300, margin: 10, minHeight: 200 }}>
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
  );
}

export default Courses;
