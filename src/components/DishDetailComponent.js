import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    renderDish(dish) {
      if (dish != null)
        return (
          <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        );
      else
        return (
          <div></div>
        );
    }

    formatDate(string) {
      var options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(string).toLocaleDateString([],options);
    }

    renderDishDetails(dish) {
      if (dish != null) {
        const comments = dish.comments.map((comment) => {
          return (
            <li>
              <p className="Center" key={comment.id}>{comment.comment}</p>
              <p className="Center">-- {comment.author}, {this.formatDate(comment.date)}</p>
            </li>
          );
        });
        return comments;
      }
      else
        return (
          <div></div>
        );
    }

    render() {
      return (
          <div className="row">
            <div  className="col-12 col-md-5 m-1">
              {this.renderDish(this.props.dish)}
            </div>
            <div className="col-12 col-md-5 m-1">
              <Card>
                <CardTitle>Comments</CardTitle>
                  <ul class="list-unstyled">
                    {this.renderDishDetails(this.props.dish)}
                  </ul>
              </Card>
            </div>
          </div>
        );
    }
}

export default DishDetail;