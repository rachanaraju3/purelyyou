import React from 'react';
import styles from './quiz.module.css';
import { Button, FormLabel, FormControl, FormControlLabel, RadioGroup, Radio, Checkbox } from '@mui/material';
import Recs from './recs';
import { useState } from 'react';
import { Routes, useHistory, useNavigate } from 'react-router-dom';

export default function Quiz(){
    
    const [skinType,setSkinType] = useState("normal");
    const [weather,setWeather] = useState("moderate");
    const [skinGoals,setSkinGoals] = useState([]);
    const [sensitivity, setSensitivity] = useState("don't know");
    const [acne, setAcne] = useState("mild");
    const [uv, setUv] = useState("no protection");
    const [paraben, setParaben] = useState("paraben");
    const [allergies, setAllergies] = useState("no allergies");

    const topToner = null
    const topCleanser = null;
    const topCream = null;

    const submitForm = () => {
        const url = `/api/form`;
        fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ skinType, weather, skinGoals, sensitivity, acne, uv, paraben, allergies }),
        })
        .then((r) => r.json())
        .then((data) => console.log(data));

        topToner = data["toner"];
        topCleanser = data["cleanser"];
        topCream = data["cream"];

    }

    // use use state to set values for cleanser toner and cream
    // use useeffect on those as well
    // on submit button click call a function to generate the top cleanser toner and cream and set them
    // use effect should then run and repopulate Recs

    return(
        <main className={styles.mains}>
            <div>
                <header>
                    <h2>Find Personalized Products</h2>
                    <p>Fill out this short form and receive products tailored to your needs!</p>
                </header>
                <div className={styles.form}>
                    <FormControl >
                        
                        <FormLabel >What is your skin type?</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                name="skin-type"
                                className={styles.radio}
                            >
                                <FormControlLabel value="Good for Dry Skin" control={<Radio />} label="Dry" checked={skinType === "Good for Dry Skin"} onChange={(e)=>{setSkinType(e.target.value)}}/>
                                <FormControlLabel value="normal" control={<Radio />} label="Normal" checked={skinType === "normal"} onChange={(e)=>{setSkinType(e.target.value)}}/>
                                <FormControlLabel value="combination" control={<Radio />} label="Combination" checked={skinType === "combination"} onChange={(e)=>{setSkinType(e.target.value)}}/>
                                <FormControlLabel value="Good for Oily Skin" control={<Radio />} label="Oily" checked={skinType === "Good for Oily Skin"} onChange={(e)=>{setSkinType(e.target.value)}}/>
                            
                            </RadioGroup>
                        <FormLabel>What is your weather like?</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                name="weather"
                            >
                                <FormControlLabel value="dry" control={<Radio />} label="Dry" checked={weather === "dry"} onChange={(e)=>{setWeather(e.target.value)}}/>
                                <FormControlLabel value="humid" control={<Radio />} label="Humid" checked={weather === "humid"} onChange={(e)=>{setWeather(e.target.value)}}/>
                                <FormControlLabel value="moderate" control={<Radio />} label="Moderate" checked={weather === "moderate"} onChange={(e)=>{setWeather(e.target.value)}}/>
                            </RadioGroup>

                        <FormLabel>What are your skincare goals?</FormLabel>
                        
                            <FormControlLabel value="Acne-Fighting" control={<Checkbox />} name="skin-goals" label="Clear acne" checked={skinGoals === "Acne-Fighting"} onChange={(e)=>{setSkinGoals([...skinGoals,e.target.value])}}/>
                            <FormControlLabel value="Brightening" control={<Checkbox />} name="skin-goals" label="Treat dark spots" checked={skinGoals === "Brightening"} onChange={(e)=>{setSkinGoals([...skinGoals,e.target.value])}}/>
                            <FormControlLabel value="Anti-Aging" control={<Checkbox />} name="skin-goals" label="Sking firmness is a concern" checked={skinGoals === "Anti-Aging"} onChange={(e)=>{setSkinGoals([...skinGoals,e.target.value])}}/>
                            <FormControlLabel value="Promotes Wound Healing" control={<Checkbox />} name="skin-goals" label="Even skin texture" checked={skinGoals === "Promotes Wound Healing"} onChange={(e)=>{setSkinGoals([...skinGoals,e.target.value])}}/>

                        <FormLabel>What is your skin sensitivity?</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                name="sensitivity"
                            >
                                <FormControlLabel value="Sensitive Skin" control={<Radio />} label="Easily irritated" checked={sensitivity === "Sensitive Skin"} onChange={(e)=>{setSensitivity(e.target.value)}}/>
                                <FormControlLabel value="not irritated" control={<Radio />} label="Rarely irritated" checked={sensitivity === "not irritated"} onChange={(e)=>{setSensitivity(e.target.value)}}/>
                                <FormControlLabel value="don't know" control={<Radio />} label="Not sure" checked={sensitivity === "don't know"} onChange={(e)=>{setSensitivity(e.target.value)}}/>
                            </RadioGroup>

                        <FormLabel>What kind of acne do you have?</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                name="acne"
                            >
                                <FormControlLabel value="mild" control={<Radio />} label="Mild" checked={acne === "mild"} onChange={(e)=>{setAcne(e.target.value)}}/>
                                <FormControlLabel value="moderate" control={<Radio />} label="Moderate" checked={acne === "moderate"} onChange={(e)=>{setAcne(e.target.value)}}/>
                                <FormControlLabel value="severe" control={<Radio />} label="Severe" checked={acne === "severe"} onChange={(e)=>{setAcne(e.target.value)}}/>
                                <FormControlLabel value="Fungal Acne Trigger" control={<Radio />} label="Fungal" checked={acne === "Fungal Acne Trigger"} onChange={(e)=>{setAcne(e.target.value)}}/>
                            </RadioGroup>

                        <FormLabel>Do you want UV protection in your products?</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                name="uv"
                            >
                                <FormControlLabel value="UV Protection" control={<Radio />} label="Yes" checked={uv === "UV Protection"} onChange={(e)=>{setUv(e.target.value)}}/>
                                <FormControlLabel value="no protection" control={<Radio />} label="No" checked={uv === "no protection"} onChange={(e)=>{setUv(e.target.value)}}/>
                            </RadioGroup>

                        <FormLabel>Do you want paraben free products?</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                name="paraben"
                            >
                                <FormControlLabel value="no paraben" control={<Radio />} label="Yes" checked={paraben === "no paraben"} onChange={(e)=>{setParaben(e.target.value)}}/>
                                <FormControlLabel value="paraben" control={<Radio />} label="No" checked={paraben === "paraben"} onChange={(e)=>{setParaben(e.target.value)}}/>
                            </RadioGroup>

                        <FormLabel>Do you have allergies?</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                name="allergies"
                            >
                                <FormControlLabel value="allergens" control={<Radio />} label="Yes" checked={allergies === "allergens"} onChange={(e)=>{setAllergies(e.target.value)}}/>
                                <FormControlLabel value="no allergies" control={<Radio />} label="No" checked={allergies === "no allergies"} onChange={(e)=>{setAllergies(e.target.value)}}/>
                            </RadioGroup>

                        <Button type='submit' onClick={submitForm}>Submit</Button>
                    </FormControl>
                </div>
            </div>
            <Recs className={styles.rec} cleanser={{Product: "HI", Features: ["dkflajfla"]}} toner={{Product: "YO", Features: ["dkflajfla, water based"]}} cream={{Product: "SUP", Features: ["moisturizing"]}}></Recs>
            
        
        </main>
    )
}