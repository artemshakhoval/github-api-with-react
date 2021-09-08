import React, { useState } from "react";
import {
  IconButton,
  makeStyles,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@material-ui/core";
import { FavoriteBorderOutlined } from "@material-ui/icons";
import RepoDetails from "../modal/repoDetails";
import "./style.css";
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
  const [fav, setFav] = React.useState({
    add: true,
  });
  const { data, arr, tableHead } = props;
  const classes = useStyles();
  const btn_class = fav.add ? "delFav" : "addFav";
  const par_class = fav.add ? "delText" : "addText";

  const addToFav = () => {
    setFav({ add: !fav.add });
  };

  return (
    <>
      {arr.length && arr ? (
        arr.map((array) => {
          return array.map((el, ind) => {
            return (
              <TableContainer key={ind} className={classes.table}>
                <Table>
                  <TableHead>
                    <TableRow>
                      {tableHead.map((head, i) => {
                        return <TableCell key={i}>{head}</TableCell>;
                      })}
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
                      <TableCell>
                        {<RepoDetails data={data} arr={arr} />}
                      </TableCell>
                      <TableCell>
                        {
                          <>
                            <Typography
                              className={par_class}
                            >{`Added to favorite`}</Typography>

                            <IconButton onClick={addToFav}>
                              <FavoriteBorderOutlined className={btn_class} />
                            </IconButton>
                          </>
                        }
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            );
          });
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
