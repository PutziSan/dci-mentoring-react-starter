import React from "react";
import ReactDOM from "react-dom";

function renderApp(
  // state looks like { information: ["..."], activeInfo: "..." }
  state
) {
  function updateApp(newPartialState) {
    renderApp({
      ...state,
      ...newPartialState,
    });
  }

  ReactDOM.render(
    <div>
      <h1>My App about a user</h1>
      {state.information.map((info) => {
        return (
          <div key={info}>
            <h2
              onClick={() => {
                // when clicking on the headline, the text for this info should appear:
                updateApp({ activeInformation: info });
              }}
            >
              {info}
            </h2>
            {info === state.activeInformation ? (
              <p>
                Some information about {info}:
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            ) : /* null in JSX means "render nothing" */ null}
          </div>
        );
      })}

      <div>
        <p>last exercise:</p>
        <ul>
          <li>create a basic "accordion" with react!</li>
          <li>
            like before: create a `renderApp(state)` function, which wrap the
            `ReactDOM.render(...)`
          </li>
          <li>
            in your state-object, use 2 properties: information (an array of
            strings) and activeInfo (string)
          </li>
          <li>
            in your JSX markup, render for each information the headline and
            some text for the info (via state.information.map)
          </li>
          <li>
            for each info-headline, create an onClick-handler which changes the
            activeInfo to the activeInfo of the clicked headline
          </li>
        </ul>
      </div>
    </div>,
    document.getElementById("root")
  );
}

const initialState = {
  // normally this would come from a server and
  information: ["Name", "E-Mail", "Age"],
  // activeInfo will be changed by the app:
  activeInfo: "Name",
};
renderApp(initialState);
