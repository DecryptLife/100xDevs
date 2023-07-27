import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { useState } from "react";

function Addcourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const path = "http://localhost:3067";

  return (
    <div>
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
              fetch(`${path}/admin/courses`, {
                method: "POST",
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
                  alert("Course created successfully");
                });
            }}
          >
            Add Course
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default Addcourse;
