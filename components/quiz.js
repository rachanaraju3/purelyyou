import React from 'react';
import styles from './quiz.module.css';
import { Button, FormLabel, FormControl, FormControlLabel, RadioGroup, Radio, Checkbox } from '@mui/material';
import Recs from './recs';
import { useState } from 'react';
import { Routes, useHistory, useNavigate } from 'react-router-dom';

export default function Quiz(){
    
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
                                <FormControlLabel value="Good for Dry Skin" control={<Radio />} label="Dry" />
                                <FormControlLabel value="normal" control={<Radio />} label="Normal" />
                                <FormControlLabel value="combination" control={<Radio />} label="Combination" />
                                <FormControlLabel value="Good for Oily Skin" control={<Radio />} label="Oily" />
                            
                            </RadioGroup>
                        <FormLabel>What is your weather like?</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                name="weather"
                            >
                                <FormControlLabel value="dry" control={<Radio />} label="Dry" />
                                <FormControlLabel value="humid" control={<Radio />} label="Humid" />
                                <FormControlLabel value="moderate" control={<Radio />} label="Moderate" />
                            </RadioGroup>

                        <FormLabel>What are your skincare goals?</FormLabel>
                        
                            <FormControlLabel value="Acne-Fighting" control={<Checkbox />} name="sking-goals" label="Clear acne" />
                            <FormControlLabel value="Brightening" control={<Checkbox />} name="skin-goals" label="Treat dark spots" />
                            <FormControlLabel value="Anti-Aging" control={<Checkbox />} name="skin-goals" label="Sking firmness is a concern" />
                            <FormControlLabel value="Promotes Wound Healing" control={<Checkbox />} name="skin-goals" label="Even skin texture" />

                        <FormLabel>What is your skin sensitivity?</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                name="sensitivity"
                            >
                                <FormControlLabel value="Sensitive Skin" control={<Radio />} label="Easily irritated" />
                                <FormControlLabel value="not irritated" control={<Radio />} label="Rarely irritated" />
                                <FormControlLabel value="don't know" control={<Radio />} label="Not sure" />
                            </RadioGroup>

                        <FormLabel>What kind of acne do you have?</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                name="acne"
                            >
                                <FormControlLabel value="mild" control={<Radio />} label="Mild" />
                                <FormControlLabel value="moderate" control={<Radio />} label="Moderate" />
                                <FormControlLabel value="sever" control={<Radio />} label="Severe" />
                                <FormControlLabel value="Fungal Acne Trigger" control={<Radio />} label="Fungal" />
                            </RadioGroup>

                        <FormLabel>Do you want UV protection in your products?</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                name="uv"
                            >
                                <FormControlLabel value="UV Protection" control={<Radio />} label="Yes" />
                                <FormControlLabel value="no protection" control={<Radio />} label="No" />
                            </RadioGroup>

                        <FormLabel>Do you want paraben free products?</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                name="paraben"
                            >
                                <FormControlLabel value="no paraben" control={<Radio />} label="Yes" />
                                <FormControlLabel value="Paraben" control={<Radio />} label="No" />
                            </RadioGroup>

                        <FormLabel>Do you have allergies?</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                name="allergies"
                            >
                                <FormControlLabel value="Allergens" control={<Radio />} label="Yes" />
                                <FormControlLabel value="no allergies" control={<Radio />} label="No" />
                            </RadioGroup>

                        <Button type='submit' >Submit</Button>
                    </FormControl>
                </div>
            </div>
            <Recs className={styles.rec} cleanser={{Product: "HI", Features: ["dkflajfla"]}} toner={{Product: "YO", Features: ["dkflajfla, water based"]}} cream={{Product: "SUP", Features: ["moisturizing"]}}></Recs>
            
        
        </main>
    )
}