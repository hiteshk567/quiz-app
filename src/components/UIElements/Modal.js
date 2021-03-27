import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "./Modal.css";
import Button from "./Button";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal({ answeredList }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  console.log(answeredList);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button danger type="button" onClick={handleOpen}>
        SUBMIT QUIZ
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">SCORE TABLE</h2>
            <div id="transition-modal-description">
              {answeredList &&
                answeredList.map((question, index) => {
                  return (
                    <div
                      key={`questionResult-${index}`}
                      className="result-div-box"
                      style={{
                        background:
                          question.answered === "true"
                            ? "green"
                            : question.answered === "no"
                            ? null
                            : "red",
                      }}
                    >
                      {index + 1}
                    </div>
                  );
                })}
            </div>
            <div className="all-buttons">
              <Button inverse type="button" onClick={handleClose}>
                CANCEL
              </Button>
              <Button to="/result">CONFIRM</Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
