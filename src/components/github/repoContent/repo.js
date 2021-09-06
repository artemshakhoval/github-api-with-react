import React from "react";
import {
  CardActions,
  IconButton,
  makeStyles,
  Typography,
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@material-ui/core";
import { FavoriteBorderOutlined } from "@material-ui/icons";
import RepoDetails from "../modal/repoDetails";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  table: {
    border: "1px solid #000",
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    textAlign: "center",
  },
  notFound: {
    textAlign: "center",
  },
}));

const Repo = (props) => {
  const { data, arr, getRepo, fetchData } = props;
  console.log(arr);
  const classes = useStyles();

  return (
    <>
      {arr ? (
        arr.map(el => {
          return data.map((el, ind) => {
            return (
              <TableContainer key={ind} className={classes.table}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Avatar</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Login</TableCell>
                      <TableCell>Location</TableCell>
                      <TableCell>More Details</TableCell>
                      <TableCell>Favorite</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        {(
                          <img
                            src={el.avatar_url}
                            alt={el.login}
                            style={{ width: 80 }}
                          />
                        ) || "empty"}
                      </TableCell>
                      <TableCell>{el.name || "empty"}</TableCell>
                      <TableCell>{el.login || "empty"}</TableCell>
                      <TableCell>{el.location || "empty"}</TableCell>
                      <TableCell>{<RepoDetails data={data} />}</TableCell>
                      <TableCell>
                        {
                          <IconButton>
                            <FavoriteBorderOutlined />
                          </IconButton>
                        }
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            );
          })
        })
        
      ) : (
        <Typography className={classes.notFound} variant="h4">
          Repository not found
        </Typography>
      )}
    </>
  );
};

export default Repo;
