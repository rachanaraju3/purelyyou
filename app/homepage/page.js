
import Chatbot from "@/components/chatbot"
import styles from "./homepage.module.css"

export default function Homepage () {
    return (
        <div className={styles.main}>

            <div className={styles.header}>
                <h2 className={styles.h2}>PurelyYou</h2>
            </div>
            <div>
            <h2 className={styles.brands}>Brands Featured</h2>
          </div>
            <div className={styles.logos}>
					<div className={styles.logosSlide}>
						<img src="/images/ordinary.png"/>
						<img src="/images/olay.jpeg"/>
						<img src="/images/beautyofjoeseon.png"/>
						<img src="/images/caudalie.png"/>
						<img src ="/images/cosrx.webp"/>
						<img src="/images/esteelauder.jpeg"/>
						<img src="/images/227faddefa7943c6d4eb127d2cdbcbca.png"/>
						<img src="/images/kiehls.png"/>
						<img src="/images/laneigi.png"/>
						<img src="/images/loreal.svg"/>
						<img src = "/images/whamisa.jpeg"/>
						<img src="/images/derma.png"/>
						<img src="/images/5db5fe156fd1201c238896f3a470daab.png"/>
						<img src="/images/clinique.png"/>
						<img src="/images/neutrogena-1.svg"/>
						<img src="/images/paulaschoice.png"/>
						<img src="/images/youthtothepeople.png"/>
						<img src="/images/aveeno.webp"/>
						<img src="/images/dove.png"/>
						<img src="/images/ordinary.png"/>
						<img src="/images/olay.jpeg"/>
						<img src="/images/beautyofjoeseon.png"/>
						<img src="/images/caudalie.png"/>
						<img src ="/images/cosrx.webp"/>
						<img src="/images/esteelauder.jpeg"/>
						<img src="/images/227faddefa7943c6d4eb127d2cdbcbca.png"/>
						<img src="/images/kiehls.png"/>
						<img src="/images/laneigi.png"/>
						<img src="/images/loreal.svg"/>
						<img src = "/images/whamisa.jpeg"/>
						<img src="/images/derma.png"/>
						<img src="/images/5db5fe156fd1201c238896f3a470daab.png"/>
						<img src="/images/clinique.png"/>
						<img src="/images/neutrogena-1.svg"/>
						<img src="/images/paulaschoice.png"/>
						<img src="/images/youthtothepeople.png"/>
						<img src="/images/aveeno.webp"/>
						<img src="/images/dove.png"/>
						
					</div>
				
            </div>
            <Chatbot/>
        </div>
    )
}