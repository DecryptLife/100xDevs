import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import axios from "axios";
import { useState } from "react";

function Addcourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

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
          <TextField
            fullWidth={true}
            label="Price"
            variant="outlined"
            onChange={(e) => setPrice(e.target.value)}
          ></TextField>

          <Button
            size="large"
            variant="contained"
            onClick={async () => {
              await axios.post(
                `${path}/admin/courses`,
                {
                  title: title,
                  description: description,
                  imageLink: image,
                  published: true,
                  price,
                },
                {
                  headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                  },
                }
              );
              alert("Added course!");
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
