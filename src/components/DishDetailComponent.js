import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    renderDish(dish) {
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    }

    renderDishDetails(dish) {
      const comments = dish.comments.map((comment) => {
        return (
          <li>
            <p className="Center" key={comment.id}>{comment.comment}</p>
            <p className="Center">-- {comment.author}, {new Intl.DateTimeFormat('en-US', {year:'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
          </li>
        );
      });
      return comments;
    }

    render() {
      if (this.props.dish != null) {
        return (
          <div className="container">
            <div className="row">
              <div  className="col-12 col-md-5 m-1">
                {this.renderDish(this.props.dish)}
              </div>
              <div className="col-12 col-md-5 m-1">
                <Card>
                  <CardTitle className="Center">Comments</CardTitle>
                    <ul class="list-unstyled">
                      {this.renderDishDetails(this.props.dish)}
                    </ul>
                </Card>
              </div>
            </div>
          </div>
        );
      }
      else
        return (
          <div></div>
        );
    }
}

export default DishDetail;