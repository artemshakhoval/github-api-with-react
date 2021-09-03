import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Button, Container, Typography } from "@material-ui/core";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 600,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal(props) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const { data } = props;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button color="primary" variant="contained" onClick={handleOpen}>
        View More
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Container>
          {data.map((el, ind) => {
            return (
              <Container key={ind} style={modalStyle} className={classes.paper}>
                <img
                  src={el.avatar_url}
                  alt={el.login}
                  style={{ width: 100 }}
                />
                <Typography variant="body1">{`Name: ${el.name}`}</Typography>
                <Typography variant="body1">{`Login: ${el.login}`}</Typography>
                <Typography variant="body1">{`Email: ${el.email}`}</Typography>
                <Typography variant="body1">{`Location: ${el.location}`}</Typography>
                <Typography variant="body1">{`Created at: ${el.created_at}`}</Typography>
                <Typography variant="body1">{`Public repos: ${el.public_repos}`}</Typography>
                <Typography variant="body1">{`URL: ${el.html_url}`}</Typography>
                <Typography variant="body1">{`BIO: ${el.bio}`}</Typography>
                <Typography variant="body1">{`Company: ${el.company}`}</Typography>
                <Typography variant="body1">{`Followers: ${el.followers}`}</Typography>
                <Typography variant="body1">{`Following: ${el.following}`}</Typography>

                <Button
                  color="secondary"
                  variant="contained"
                  onClick={handleClose}
                >
                  Exit
                </Button>
              </Container>
            );
          })}
        </Container>
      </Modal>
    </>
  );
}

// import React from "react";

// export default function repoDetails(props) {
//   //const { dataKey } = props;
//   return (
//     <div>
//       <h2>hj</h2>
//     </div>
//   );
// }
