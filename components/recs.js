import styles from './recs.module.css';
import { IRecommendation } from '@/database/recommendation';


// {cleanserName,cleanserFeat},{tonerName,tonerFeat},{creamName, creamFeat}

export default function Recs( props ){

    const cleanser = props.cleanser;
    const toner = props.toner;
    const cream = props.cream;

    let cleanserName;
    let cleanserFeatures;
    
    let tonerName;
    let tonerFeatures;

    let creamName;
    let creamFeatures;

    if (!cleanser){
        cleanserName = "Unable to find a cleanser";
        cleanserFeatures = [];
    } else{
        cleanserName = cleanser.Product;
        cleanserFeatures = cleanser.Features;
    }

    if (!toner){
        tonerName = "Unable to find a toner or serum";
        tonerFeatures = [];
    } else{
        tonerName = toner.Product;
        tonerFeatures = toner.Features;
    }

    if (!cream){
        creamName = "Unable to find a cream";
        creamFeatures = [];
    } else{
        creamName = cream.Product;
        creamFeatures = cream.Features;
    }

    return (
        <div className={styles.mains}>
            <h1>Your Recommendations</h1>
    
            <div className={styles.recs}>
                <div className={styles.tops}>
                    <h3>Top Cleanser: </h3>
                    <div className={styles.recName}>{cleanserName}</div>
                    <h4>Features:</h4>
                    <div className={styles.recText}>{cleanserFeatures}</div>
                </div>
                <div className={styles.tops}>
                    <h3>Top Serum and Toner:</h3>
                    <div className={styles.recName}>{tonerName}</div>
                    <h4>Features:</h4>
                    <div className={styles.recText}>{tonerFeatures}</div>

                </div>
                <div className={styles.tops}>
                    <h3>Top Moisturizer:</h3>
                    <div className={styles.recName}>{creamName}</div>
                    <h4>Features:</h4>
                    <div className={styles.recText}>{creamFeatures}</div>
                </div>
            </div>
        </div>
    )
}