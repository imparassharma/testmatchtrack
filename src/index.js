import React from "react";
import {createRoot} from "react-dom/client";
import Main from "./Main";

const rootElement = document.getElementById("root");
const Root = createRoot(rootElement);

Root.render(<Main/>);