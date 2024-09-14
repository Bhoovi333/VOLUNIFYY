import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample(props) {
  return (
    <>
    <Card style={{ width: '15rem',alignContent:'center'}} className="d-inline-flex p-2">
      <Card.Img  style={{ height: '10rem',alignContent:'center', justifyContent:'space-evenly'}}src={props.imgsrc} />
      <Card.Body>
        <Card.Title style={{ color:"brown"}}><b>{props.title}</b><br></br><h6><i>{props.author}</i></h6></Card.Title>
        <Button style={{ backgroundColor:"maroon"}} variant="primary">Enroll Now</Button>
      </Card.Body>
    </Card>
    </>
  );
}

export default BasicExample;