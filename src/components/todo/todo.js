import React, { useEffect, useState } from 'react';
import useForm from '../../hooks/form.js';
import { FormGroup, Card, Elevation, Button } from "@blueprintjs/core";
import List from "../list/list";
import { v4 as uuid } from 'uuid';

const ToDo = () => {

  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem);

  function addItem(item) {
    console.log(item);
    item.id = uuid();
    item.complete = false;
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter( item => item.id !== id );
    setList(items);
  }

  function toggleComplete(id) {

    const items = list.map( item => {
      if ( item.id == id ) {
        item.complete = ! item.complete;
      }
      return item;
    });

    setList(items);

  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  return (
    <>
       <header>
        <h1>To Do List Manger: ({incomplete})</h1>
        
      </header>
      <div className="border-div" style ={{margin:"1px", display: "flex", align:"center"}}>
        <div className="toDo" style={{ margin: "80px"}}>
          <Card interactive={true} elevation={Elevation.TWO}>
            <form onSubmit={handleSubmit}>
              <h2>Add To Do Item</h2>
              <FormGroup label="To Do Item" labelFor="text-input">
                <input
                  class="bp3-input .modifier"
                  onChange={handleChange}
                  name="text"
                  type="text"
                  placeholder="Item Details"
                  dir="auto"
                />
              </FormGroup>
              <br />
              <FormGroup label="Assigned To" labelFor="assignee">
                <input
                  class="bp3-input .modifier"
                  onChange={handleChange}
                  name="assignee"
                  type="text"
                  placeholder="Assignee Name"
                  dir="auto"
                />
              </FormGroup>
              <br />
              <FormGroup label="Difficulty" labelFor="assignee">
                <input
                  onChange={handleChange}
                  defaultValue={3}
                  type="range"
                  min={1}
                  max={5}
                  name="difficulty"
                  dir="auto"
                />
              </FormGroup>

              <br />

              <label>
                <Button type="submit">Add Item</Button>
              </label>
            </form>
          </Card>
        </div>
        <div>
          <List list={list}  
          toggleComplete={toggleComplete}
          deleteItem ={deleteItem}/>
        </div>
      </div>
    </>
  );
};

export default ToDo;
