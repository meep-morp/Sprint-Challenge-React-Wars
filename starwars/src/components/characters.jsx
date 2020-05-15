import React from "react";
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';


const Character = props => {
    let {data} = props;

    return (
        <div className="characterContainer" 
        style={{width: '100%', justifyContent: 'center', display: 'flex', flexWrap: "wrap",}}>
            { data.map((character, index) => {
                return <Card className="cardContainer" key={"div" + index} 
                style={{
                    background: 'rgb(203,54,54)',
                    background:' linear-gradient(175deg, rgba(203,54,54,1) 0%, rgba(228,122,9,1) 72%, rgba(217,59,57,1) 100%)',
                    padding: '2%', margin: '10px', border: 'black 3px solid',
                    color: '#e0c742', textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
                    width: '25%', height: '35%'}}>
                            <CardBody >
                                <CardTitle key={index} style={{fontSize: '2rem'}}>{character.name}</CardTitle>
                                <div className="subTitles" style={{fontSize: '1.5rem'}}>
                                    <CardSubtitle >Height: {character.height}</CardSubtitle>
                                    <CardSubtitle >Mass: {character.mass}</CardSubtitle>
                                    <CardSubtitle >Birth Year: {character.birth_year}</CardSubtitle>
                                    <CardSubtitle >Gender: {character.gender}</CardSubtitle>
                                    <CardSubtitle >Hair Color: {character.hair_color}</CardSubtitle>
                                    <CardSubtitle >Eye Color: {character.eye_color}</CardSubtitle>
                                    <CardSubtitle >Skin Color: {character.skin_color}</CardSubtitle>
                                </div>
                            </CardBody>
                        </Card >
            })
        }
    </div>
    )
}

export default Character