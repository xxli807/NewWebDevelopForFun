import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export default class Root extends React.Component<undefined, undefined> {
    render() {
        return <h1>Hello from ts!</h1>;
    }
}
