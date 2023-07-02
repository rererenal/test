import GlobalCard from "../GlobalCard/index";
import styles from "./Global.module.css"
import { useEffect, useState } from "react";
import axios from "axios";

function Global({URL}){
    //membuat variable provinsi
    const stats = ["positif","sembuh","meninggal"]

    const [data, setData] = useState();


    // eslint-disable-next-line react-hooks/exhaustive-deps
    async function fetchGlobal() {
        const response = await axios(URL);

        const dataCovid = [
                  {
                    status: "Confirmed",
                    ...response.data.confirmed,
                  },
                  {
                    status: "Deaths",
                    ...response.data.deaths,
                  },
                  {
                    status: "Recovered",
                    ...response.data.recovered,
                  },
                ];

                setData(dataCovid);

    }

  useEffect(fetchGlobal, []);

    return(
        <div className={styles.container}>
            <section className={styles.global}>
                <h2 className={styles.global__title}>INDONESIA</h2>
                <p className={styles.global__tagline}>Data Covid Global</p>
                <div className={styles.card__container}>
                    {data && data.map((data, index) => (
                        <GlobalCard key={data.status} status={data.status} total={data.value} style={stats[index]} />   ))
                    }
                </div>
            </section>
        </div>
    )
}

export default Global;