import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { CardActions, CardContent, CardMedia, Typography } from "@mui/material";

const path = "http://localhost:3067";

function Course() {
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
      <UpdateCard courses={courses} course={course} setCourses={setCourses} />
    </div>
  );
}

function UpdateCard(props) {
  const course = props.course;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card
        style={{
          width: 400,
          marginTop: 100,
          padding: 20,
        }}
      >
        <TextField
          fullWidth={true}
          label="Title"
          variant="outlined"
          onChange={(e) => setTitle(e.target.value)}
        ></TextField>

        <TextField
          fullWidth={true}
          label="Description"
          variant="outlined"
          onChange={(e) => setDescription(e.target.value)}
        ></TextField>

        <TextField
          fullWidth={true}
          label="Image"
          variant="outlined"
          onChange={(e) => setImage(e.target.value)}
        ></TextField>

        <Button
          size="large"
          variant="contained"
          onClick={() => {
            fetch(`${path}/admin/courses/` + course.id, {
              method: "PUT",
              body: JSON.stringify({
                title: title,
                description: description,
                imageLink: image,
                published: true,
              }),
              headers: {
                "Content-type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            })
              .then((res) => res.json())
              .then((data) => {
                // alert("Course updated successfully");
                let updatedCourses = [];
                for (let i = 0; i < props.courses.length; i++) {
                  if (props.courses[i].id == course.id) {
                    updatedCourses.push({
                      id: course.id,
                      title: title,
                      description: description,
                      imageLink: image,
                    });
                  } else {
                    updatedCourses.push(props.courses[i]);
                  }
                }

                props.setCourses(updatedCourses);
              });
          }}
        >
          Update Course
        </Button>
      </Card>
    </div>
  );
}

function CourseCard(props) {
  const course = props.course;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
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
    </div>
  );
}

export default Course;
