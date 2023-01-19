import {footer, headerCreate,homeCreate} from "./home";
import { aboutPage } from "./about";
const content = document.getElementById("content");

headerCreate(content);
aboutPage(content);
footer(content);


