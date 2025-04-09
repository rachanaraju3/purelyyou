import { set } from 'mongoose';
import styles from './recs.module.css';
import { IRecommendation } from '@/database/recommendation';
import { useEffect } from 'react';
import { useState } from 'react';
import Chatbot from './chatbot';


// {cleanserName,cleanserFeat},{tonerName,tonerFeat},{creamName, creamFeat}

export default function Recs( props ){

    console.log("PROPS", props)
    const [cleanserName, setCleanserName] = useState(props.cleanser.Product);
    const [tonerName,setTonerName] = useState(props.toner.Product);
    const [creamName,setCreamName] = useState(props.cream.Product);

    

    const changeValues = () => {
        const cleanser = props.cleanser;
        const toner = props.toner;
        const cream = props.cream;
        if (!cleanser){
            setCleanserName("Unable to find a cleanser");
            // cleanserFeatures = [];
        } else{
            setCleanserName(cleanser.Product);
            // cleanserFeatures = cleanser.Features;
        }
    
        if (!toner){
            setTonerName("Unable to find a toner or serum");
            // tonerFeatures = [];
        } else{
            setTonerName(toner.Product);
            // tonerFeatures = toner.Features;
        }
    
        if (!cream){
            setCreamName("Unable to find a cream");
            // creamFeatures = [];
        } else{
            setCreamName(cream.Product);
            // creamFeatures = cream.Features;
        }
    }

    useEffect(() => {
        changeValues()
    }, [props])
    // let cleanserName;
    // let cleanserFeatures;
    
    // let tonerName;
    // let tonerFeatures;

    // let creamName;
    // let creamFeatures;

    

    return (
        <div className={styles.mains}>
            <h1>Your Recommendations</h1>
    
            <div className={styles.recs}>
                <div className={styles.tops}>
                    <h3>Top Cleanser: </h3>
                    <div className={styles.recName}>{cleanserName}</div>
                    {/* <h4>Features:</h4>
                    <div className={styles.recText}>{cleanserFeatures}</div> */}
                </div>
                <div className={styles.tops}>
                    <h3>Top Serum and Toner:</h3>
                    <div className={styles.recName}>{tonerName}</div>
                    {/* <h4>Features:</h4>
                    <div className={styles.recText}>{tonerFeatures}</div> */}

                </div>
                <div className={styles.tops}>
                    <h3>Top Moisturizer:</h3>
                    <div className={styles.recName}>{creamName}</div>
                    {/* <h4>Features:</h4>
                    <div className={styles.recText}>{creamFeatures}</div> */}
                </div>
                <Chatbot />
            </div>
        </div>
    )
}