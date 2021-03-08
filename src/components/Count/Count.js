import React, { Component } from "react";
import { Button } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";

export default class Count extends Component {
   constructor(props) {
      super(props);

      this.state = {
         count: 0,
      };
   }

   incrementHandler = () => {
      this.setState({
         count: this.state.count + 1,
      });
   };
   decrementHandler = () => {
      this.setState({
         count: this.state.count - 1,
      });
   };

   render() {
      const { count } = this.state;
      return (
         <div>
            <h1>Count : {count}</h1>
            <Tooltip title="Increment UpTo 10">
               <Button
                  variant="contained"
                  color="primary"
                  onClick={this.incrementHandler}
                  disabled={count === 10 ? true : false}
               >
                  + add
               </Button>
            </Tooltip>

            <Tooltip title="Decrement Min 0">
               <Button
                  variant="contained"
                  color="secondary"
                  onClick={this.decrementHandler}
                  disabled={count === 0 ? true : false}
               >
                  - sub
               </Button>
            </Tooltip>
         </div>
      );
   }
}
