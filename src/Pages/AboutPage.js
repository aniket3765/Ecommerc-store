import { Card } from "react-bootstrap";
import Header from "../component/Header";
import { Fragment } from "react";
const AboutPage = () =>{
    return <Fragment>
    <Header />
    <h1>About us : Colors store</h1>
    <Card body>Balloons are pretty and come in different colors, different shapes, different sizes, and they can even adjust sizes as needed. But don't make them too big or they might just pop, and then bye-bye balloon. It'll be gone and lost for the rest of mankind. They can serve a variety of purposes, from decorating to water balloon wars. You just have to use your head to think a little bit about what to do with them.</Card>;
    </Fragment>
}

export default AboutPage;