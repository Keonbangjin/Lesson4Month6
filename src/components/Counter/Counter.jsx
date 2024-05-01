import React, { Component } from 'react';
import styles from './Counter.module.css';

class Counter extends Component {
  state = {
    count: 0
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className={styles.container}>
        <h2 className={styles.counter}>{this.state.count}</h2>
        <div className={styles.buttons}>
          <button className={styles.button} onClick={this.increment}>+</button>
          <button className={styles.button} onClick={this.decrement}>-</button>
        </div>
        <h3 className={styles.counterText} style={{ color: 'orange' }}>Counter</h3>
      </div>
    );
  }
}

export default Counter;
