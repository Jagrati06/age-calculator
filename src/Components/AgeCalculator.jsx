import { useState } from "react";
import "./AgeCalculator.css";
const AgeCalculator = () => {

    let [dob, setDob] = useState("");
    let [age, setAge] = useState(null);

    const findAge = () => {
        if (dob) {
            let todayDate = new Date();
            let birthDate = new Date(dob)

            let years = todayDate.getFullYear() - birthDate.getFullYear();
            let months = todayDate.getMonth() - birthDate.getMonth();
            let days = todayDate.getDate()-birthDate.getDate() ;

            setAge({ years, months, days });
        }
    };
    return (
        <div className="age-box">
            <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
            <button id="btn" onClick={findAge}>Calculate Age</button>

            {age && (
                <p>
                    Your Age is <span>{age.years}</span> years,
                    <span> {age.months}</span> months,
                    <span> {age.days}</span> days.
                </p>
            )}



        </div>
    )
};

export default AgeCalculator;