import React, { useState } from "react";
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  withStyles,
} from "@material-ui/core";
import { FavoriteBorderOutlined } from "@material-ui/icons";

import "./ReposItem.css";
import RepoDetails from "../RepoDetails";

const tableHead = [
  "Avatar",
  "Name",
  "Login",
  "Location",
  "More Details",
  "Favorite",
];

const ReposItem = (props) => {
  const { avatar, name, login, location, item } = props;

  const tableRow = [name, login, location];

  const [fav, setFav] = useState({
    add: true,
  });

  const btn_class = fav.add ? "delFav" : "addFav";
  const par_class = fav.add ? "delText" : "addText";

  const addToFav = () => {
    setFav({ add: !fav.add });
  };

  const StyledTableCell = withStyles((theme) => ({
    root: {
      color: "#fff",
      textAlign: "center",
      // "&:hover": {
      //   backgroundColor: "rgb(25, 25, 25)",
      // },
    },
  }))(TableCell);

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {tableHead.map((head, i) => {
              return <StyledTableCell key={i}>{head}</StyledTableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <StyledTableCell>
              {<img style={{ width: "3rem" }} src={avatar} alt={login} />}
            </StyledTableCell>
            {tableRow.map((row, ind) => {
              return (
                <StyledTableCell key={ind}>{row || "empty"}</StyledTableCell>
              );
            })}
            <StyledTableCell>{<RepoDetails item={item} />}</StyledTableCell>
            <StyledTableCell>
              {
                <>
                  <Typography
                    className={par_class}
                  >{`Added to list`}</Typography>

                  <IconButton onClick={addToFav}>
                    <FavoriteBorderOutlined className={btn_class} />
                  </IconButton>
                </>
              }
            </StyledTableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ReposItem;
