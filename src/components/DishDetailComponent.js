import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderDish({dish}) {
  return (
    <div  className="col-12 col-md-5 m-1">
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

function RenderDishDetails({comments}) {
  const commnts = comments.map((comment) => {
    return (
      <li>
        <p className="Center" key={comment.id}>{comment.comment}</p>
        <p className="Center">-- {comment.author}, {new Intl.DateTimeFormat('en-US', {year:'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
      </li>
    );
  });
  return (
    <div className="col-12 col-md-5 m-1">
      <Card>
        <CardTitle className="Center">Comments</CardTitle>
        <ul class="list-unstyled">
          {commnts}
        </ul>
      </Card>
    </div>
  );
}

const DishDetail = (props) => {
  if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <RenderDish dish={props.dish} />
          <RenderDishDetails comments={props.dish.comments} />
        </div>
      </div>
    );
  }
  else
    return (
      <div></div>
    );
}

export default DishDetail;