import React, { useContext,useState } from 'react';
import { Button, Card, Elevation } from '@blueprintjs/core';
import './list.css'
import { SettingsContext } from '../../context/settingContext';
import ReactPaginate from "react-paginate";

export default function List(props) {
  const contexts = useContext(SettingsContext)

  const [pagesNum, setpagesNum] = useState(0);
  const usersPerPage = 4;
  const pagesVisited = pagesNum * usersPerPage;

  const displayUsers = props.list
  .slice(pagesVisited, pagesVisited + usersPerPage)
  .map((item) => {
    return (
      
      <div key={item.id}>
         <Card interactive={true} elevation={Elevation.TWO}>
        <p>{item.text}</p>
        <p>Assigned to: {item.assignee}</p>
        <p>Difficulty: {item.difficulty}</p>
      
        <Button onClick={() => props.toggleComplete(item.id)}>
         Complete:
        {item.complete.toString()}</Button>

        <Button onClick={() =>props.deleteItem(item.id)}> X </Button>
        </Card>
      </div>
    );
  });
  const pageCount = Math.ceil(props.list.length / usersPerPage);
  const changePage = ({ selected }) => {
    setpagesNum(selected);
  };
return (
  <>

      {displayUsers}
      <ReactPaginate
      
      previousLabel={"Previous"}
      nextLabel={"Next"}
      pageCount={pageCount}
      onPageChange={changePage}
      containerClassName={"paginationBttns"}
      previousLinkClassName={"previousBttn"}
      nextLinkClassName={"nextBttn"}
      disabledClassName={"paginationDisabled"}
      activeClassName={"paginationActive"}
    />
  </>
); 

}

