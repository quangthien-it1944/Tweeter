import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import splitMessage from "./libs/Split";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render( < App / > , div);
    ReactDOM.unmountComponentAtNode(div);
});

it("caculation string split elder 50", () => {
    const source = splitMessage("I can't believe Tweeter now supports chunking my messages, so I don't have to do it myself.");
    expect(source).toEqual(
        ["1/2 I can't believe Tweeter now supports chunking", "2/2 my messages, so I don't have to do it myself."]
    );
});