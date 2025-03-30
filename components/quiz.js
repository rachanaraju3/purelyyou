import React, { useEffect } from 'react';
import styles from './quiz.module.css';
import { Button, FormLabel, FormControl, FormControlLabel, RadioGroup, Radio, Checkbox } from '@mui/material';
import Recs from './recs';
import { useState } from 'react';
import { Form, Routes, useHistory, useNavigate } from 'react-router-dom';

export default function Quiz(){
    
    const [skinType,setSkinType] = useState(null);
    const [weather,setWeather] = useState(null);
    const [sensitivity, setSensitivity] = useState(null);
    const [acne, setAcne] = useState(null);
    const [uv, setUv] = useState(null);
    const [paraben, setParaben] = useState(null);
    const [allergies, setAllergies] = useState(null);


    const [tonerName,setTonerName] = useState("Submit Form");
    const [cleanserName, setCleanserName] = useState("Submit Form");
    const [creamName, setCreamName] = useState("Submit Form");

    const [topToner,setTopToner] = useState("Submit Form");
    const [topCleanser, setTopCleanser] = useState("Submit Form");
    const [topCream, setTopCream] = useState("Submit Form");

    let skinGoals = []; 


    useEffect(()=>{
        setTonerName(topToner);
        setCleanserName(topCleanser);
        setCreamName(topCream);
        console.log("items changed");
    }, [topToner,topCleanser,topCream])


    const [checked,setChecked] = useState({
        skinGoals1:false,
        skinGoals2:false,
        skinGoals3:false,
        skinGoals4:false
    });

    const handleChange = (event) => {
        setChecked({
          ...checked,
          [event.target.name]: event.target.checked,
        });
      };

    const loadSkinGoals = () => {
        for (let i=1; i<5;i++){
            console.log(i);
            console.log(checked[`skinGoals${i}`]);
            if (checked[`skinGoals${i}`]){
                console.log(document.getElementById(`skinGoals${i}`));
                console.log(document.getElementById(`skinGoals${i}`).querySelector('span').querySelector('input').value);
                const newFeat = document.getElementById(`skinGoals${i}`).querySelector('span').querySelector('input').value;
                console.log(newFeat);
                console.log(skinGoals);
                skinGoals.push(newFeat);
                console.log(skinGoals);
            }
        }
    }




    // const checkGoals = () =>

    async function submitForm (e) {
        e.preventDefault();
        console.log(checked);
        loadSkinGoals();
        console.log({
            "skinType":skinType, 
            "weather": weather, 
            "skinGoals": skinGoals, 
            "sensitivity": sensitivity, 
            "acne": acne, 
            "uv": uv, 
            "paraben": paraben, 
            "allergies": allergies 
        });
        const url = 'http://127.0.0.1:8000/get_recommendations';
        console.log(url);
        const result = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "skinType":skinType, 
            "weather": weather, 
            "skinGoals": skinGoals, 
            "sensitivity": sensitivity, 
            "acne": acne, 
            "uv": uv, 
            "paraben": paraben, 
            "allergies": allergies 
        }),
        })
        .then((r) => r.json()).then((data) => {setTopToner(data["toner"]);
            setTopCleanser(data["cleanser"]);
            setTopCream(data["moisturizer"]);})
        .catch(error=>console.error("Error: ", error));

        console.log(topToner,topCleanser,topCream);
        

    }

    console.log(cleanserName,tonerName,creamName);
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
                                // name="weather"
                            >
                                <FormControlLabel value="dry" control={<Radio />} label="Dry" checked={weather === "dry"} onChange={(e)=>{setWeather(e.target.value)}}/>
                                <FormControlLabel value="humid" control={<Radio />} label="Humid" checked={weather === "humid"} onChange={(e)=>{setWeather(e.target.value)}}/>
                                <FormControlLabel value="moderate" control={<Radio />} label="Moderate" checked={weather === "moderate"} onChange={(e)=>{setWeather(e.target.value)}}/>
                            </RadioGroup>

                        <FormLabel>What are your skincare goals?</FormLabel>
                            {/* <Checkbox value="Acne-Fighting" name="skinGoals1" label="Clear acne" checked={skinGoals === "Acne-Fighting"} onChange={handleChange}/> */}
                            <FormControlLabel value="Acne-Fighting" control={<Checkbox />} name="skinGoals1" id = "skinGoals1" label="Clear acne" onChange={handleChange}/>
                            <FormControlLabel value="Brightening" control={<Checkbox />} name="skinGoals2" id = "skinGoals2" label="Treat dark spots" onChange={handleChange}/>
                            <FormControlLabel value="Anti-Aging" control={<Checkbox />} name="skinGoals3" id = "skinGoals3" label="Skin firmness is a concern"  onChange={handleChange}/>
                            <FormControlLabel value="Promotes Wound Healing" control={<Checkbox />} name="skinGoals4" id = "skinGoals4" label="Even skin texture" onChange={handleChange}/>

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

                        <Button type='button' onClick={submitForm}>Submit</Button>
                    </FormControl>
                </div>
            </div>
            <Recs className={styles.rec} cleanser={{Product: cleanserName}} toner={{Product: tonerName}} cream={{Product: creamName}}></Recs>
            
        
        </main>
    )
}