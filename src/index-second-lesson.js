import React from "react";
import ReactDOM from "react-dom";

function renderApp(
  // state should be an object e.g. { name: "", isOpen: false }
  state
) {
  ReactDOM.render(
    <div>
      fresh start with dynamic name: {state.name}
      <input
        onChange={(e) => {
          // overwrite my element with new values,
          // the calls to render before will be ovberwritten:
          renderApp({
            name: e.target.value,
            isOpen: e.target.value === "abra",
          });
        }}
      />
      {state.isOpen ? (
        <div>this should only be visible if isOpen: true</div>
      ) : /* in JSX, we are using null, to say "render nothing" */ null}
      {state.information.map((info) => {
        const infoIsOpen = state.activeInfo === info;
        return (
          <div>
            <h2
              onClick={() => {
                renderApp({
                  ...state,
                  activeInfo: info,
                });
              }}
            >
              {info}
            </h2>
            {infoIsOpen ? (
              <p>
                information about {info}. <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            ) : null}
          </div>
        );
      })}
    </div>,
    document.getElementById("root")
  );
}

const initialState = {
  name: "Martha",
  isOpen: false,
  information: ["name", "E-Mail", "Age"],
  activeInfo: "Age",
};
// start the app with initial values:
renderApp(initialState);

function TempState() {
  const [state, setState] = React.useState(
    // this is the initial value and will be overwritten on the next update:
    { name: "Simba", isOpen: false }
  );
  // const stateArray = React.useState(
  //   // this is the initial value and will be overwritten on the next update:
  //   { name: "Simba", isOpen: false }
  // );

  return (
    <div>
      fresh start with dynamic name: {state.name}
      <input
        onChange={(e) => {
          // overwrite my element with new values,
          // the calls to render before will be ovberwritten:
          setState({
            name: e.target.value,
            isOpen: e.target.value === "abra",
          });
        }}
      />
      {state.isOpen ? (
        <div>this should only be visible if isOpen: true</div>
      ) : // in JSX, we are using null, to say render nothing
      null}
    </div>
  );
}
