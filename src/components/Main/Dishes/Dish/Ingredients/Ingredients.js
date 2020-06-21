import React, { Component } from "react";
import styles from "./Ingredients.module.scss";
import Tertiary from "../../../../UI/Heading/Tertiary/Tertiary";

class Ingredients extends Component {
  constructor(props) {
    super(props);

    const items = this.props.items.map((item) => {
      return { isClicked: false, item: item };
    });
    this.state = {
      items: items
    };
  }

  onItemClicked = (selectedItem) => {
    this.setState((prevState) => {
      const items = this.state.items.map((item) => {
        if (selectedItem === item.item) {
          return { item: item.item, isClicked: !item.isClicked };
        }
        return item;
      });
      return { items: items };
    });
  };

  render() {
    return (
      <div className={styles.ingredients}>
        <Tertiary margin="small" center="true">
          {this.props.section}
        </Tertiary>
        <div className={styles.ingredients__list}>
          {this.state.items.map((item, index) => {
            return (
              <h2
                key={index}
                style={
                  item.isClicked
                    ? {
                        textDecoration: "line-through",
                        textDecorationStyle: "solid",
                        textDecorationColor: "#649d66",
                        color: "#649d66",
                        backgroundColor: "rgba(201, 199, 192, 0.34)"
                      }
                    : null
                }
                onClick={() => this.onItemClicked(item.item)}
                className={styles.ingredients__list__ing}
              >
                {item.item}
              </h2>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Ingredients;
