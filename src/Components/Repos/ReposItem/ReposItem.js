import React, { useState } from "react";
import RepoDetails from "../RepoDetails";
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
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import "./ReposItem.css";

const tableHead = [
  "Avatar",
  "Name",
  "Login",
  "Location",
  "More Details",
  "Favorite",
  "Actions",
];

const ReposItem = (props) => {
  const { avatar, name, login, location, item, filteredRepos } = props;

  const [fav, setFav] = useState({
    add: true,
  });

  const tableRow = [name, login, location];

  const addToFav = () => {
    setFav({ add: !fav.add });
  };

  const StyledTableCell = withStyles((theme) => ({
    root: {
      color: "#fff",
      textAlign: "center",
    },
  }))(TableCell);

  const btn_class = fav.add ? "delFav" : "addFav";
  const par_class = fav.add ? "delText" : "addText";

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
            <StyledTableCell>
              {<RepoDetails item={item} filteredRepos={filteredRepos} />}
            </StyledTableCell>
            <StyledTableCell>
              {
                <>
                  <Typography
                    variant="body2"
                    className={par_class}
                  >{`Added to list`}</Typography>

                  <IconButton onClick={addToFav}>
                    <FavoriteBorderOutlined className={btn_class} />
                  </IconButton>
                </>
              }
            </StyledTableCell>
            <StyledTableCell>
              <IconButton>
                <HighlightOffOutlinedIcon style={{ color: "#fff" }} />
              </IconButton>
            </StyledTableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ReposItem;
