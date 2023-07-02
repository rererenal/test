import {useState} from 'react';
import styles from "./AddCovidForm.module.css"
import img from "../../assets/img/img1.jpg"
import Alert from "../Alert";

function AddCovidForm(props){

    const {provinces,setProvinces} = props;

    const [provinsi,setProvinsi] = useState("Jakarta")
    const [status,setStatus] = useState("kasus")
    const [jumlah,setJumlah] = useState("")
    const [isJumlahError,setIsJumlahError] = useState(false)

    function updateProvinces(){
        const index = provinces.findIndex((item) => item.kota === provinsi);
        const foundProvince = provinces.find((item) => item.kota === provinsi);

        provinces[index] = {
            ...foundProvince,
            [status]: parseInt(foundProvince[status]) + parseInt(jumlah),
        }

        setProvinces([...provinces])
        setIsJumlahError(false)
    }

    function handleProvinsi(e){
        setProvinsi(e.target.value)
    }
    
    function handleStatus(e){
        setStatus(e.target.value)
    }
    
    function handleJumlah(e){
        setJumlah(e.target.value)
    }
    
    function handleSubmit(e){
        e.preventDefault();

        if(jumlah === ""){
            setIsJumlahError(true);
        }else {
            updateProvinces();
        }

    }

    return(
        <div className={styles.container}>
            <section className={styles.form}>
                <div className={styles.form__left}>
                    <img
                    className={styles.form__image} 
                    src={img} 
                    alt="" />
                </div>
                <div className={styles.form__right}>
                    <h2 className={styles.form__title}>Form Covid</h2>
                    <form action="" onSubmit={handleSubmit}>
                        <div className={styles.form__group}>
                            <label htmlFor="" className={styles.form__label}>Provinsi</label>
                            <select 
                            name="provinsi" 
                            id="" 
                            className={styles.form__select}
                            value={provinsi}
                            onChange={handleProvinsi}
                            >
                            {provinces.map((kota)=>{
                                    return <option key={kota.kota} value={kota.kota}>{kota.kota}</option>
                            })}
                            </select>
                        </div>
                        <div className={styles.form__group}>
                            <label htmlFor="" className={styles.form__label}>Status</label>
                            <select 
                            name="status" 
                            id="" 
                            className={styles.form__select}
                            value={status}
                            onChange={handleStatus}
                            >
                            <option value="kasus">Positif</option>
                            <option value="sembuh">Sembuh</option>
                            <option value="dirawat">dirawat</option>
                            <option value="meninggal">Meninggal</option>
                            </select>
                        </div>
                        <div className={styles.form__group}>
                            <label htmlFor="" className={styles.form__label}>Jumlah</label>
                            <input 
                            name="jumlah"
                            type="number" 
                            className={styles.form__input} 
                            min="0"
                            value={jumlah}
                            onChange={handleJumlah}
                            />{isJumlahError && <Alert>Jumlah Wajib Diisi</Alert>}
                        </div>
                        <div>
                            <button className={styles.form__button}>Submit</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default AddCovidForm;