// OK
// import { Component, MouseEventHandler } from "react";

// type ResetPropsType = {
//   fetchTours: MouseEventHandler<HTMLButtonElement>;
// };

// export default class ResetTours extends Component<ResetPropsType> {
//   render() {
//     return (
//       <main>
//         <div className="title">
//           <h2>no tour left</h2>
//           <button className="btn" onClick={this.props.fetchTours}>
//             refresh
//           </button>
//         </div>
//       </main>
//     );
//   }
// }

//-------------------------------------------------

// OK !
import { Component } from "react";

type ResetPropsType = {
  fetchTours: Function;
};

export default class ResetTours extends Component<ResetPropsType> {
  render() {
    return (
      <main>
        <div className="title">
          <h2>no tour left</h2>
          <button className="btn" onClick={() => this.props.fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    );
  }
}
