
import { useState } from "react";
import dataManager from "./DataManager";

export function AddTodoPoints(){
    
    const [inputTextValue, setInputTextValue] = useState("");
    const [inputDateValue, setInputDateValue] = useState("");
    const [inputTimeValue, setInputTimeValue] = useState("");
    const [reminder, setReminder] = useState(false);
    const [todoDetectet, setTodoDetectet] = useState(false);
       
        // Stellt die ValueStates auf das Value des Imputfeldes sobald ein Input getätigt wird.
            const inputChangedText = (event) => {
                setInputTextValue(event.target.value);
            }

            const inputChangedDate = (event) => {
                setInputDateValue(event.target.value)
            }

            const inputChangedTime = (event) => {
                setInputTimeValue(event.target.value)
            }


            const todoErfassen = () => {
                // console.log(dataManager.getStore());
                dataManager.addToStore({
                    id: dataManager.getStore().length + 1,
                    text: inputTextValue,
                    time: inputTimeValue,
                    date: inputDateValue,
                    reminder
                });

                // console.log(dataManager.getStore());
                setTodoDetectet(true);
                // Stellt die Werte der Eingabefelder aus ''
                document.getElementById("newTodoPoint").value = '';
                document.getElementById("newTodoDate").value = '';
                document.getElementById("newTodoTime").value = '';
                document.getElementById("newReminder").checked = false;
                setTimeout(confirmation, 2000);
            }

            const confirmation = () => {
                setTodoDetectet(false);
            }

    return (
        <div className="newTodopionts">

            <h1>Neuer Todo Punkt</h1>
                <p>Eintrag:</p>
        <input
            className="inputField"
            type="text"
            id='newTodoPoint'
            placeholder="Neuer Eintrag"
            onInput={inputChangedText}
        />
        <br />

            <p>Datum:</p>
        <input
            className="inputField"
            id="newTodoDate"
            type="date"
            onInput={inputChangedDate}
        />
        <br />

            <p>Zeit:</p>
        <input
            className="inputField"
            type="time"
            id="newTodoTime"
            onInput={inputChangedTime}
        />
        <br/>

        <div className="reminderDesired">
        <input
            className="inputField"
            type="checkbox"
            id="newReminder"
            onClick={()=> {
                setReminder(!reminder);
            }}
        />

            <p>Wünschen Sie eine Erinnerung?</p>

        </div>
           
             <hr/>
                <div className="detectet"> 
                    <button 
                        type="button" 
                        id="saveButton" 
                        onClick={todoErfassen} 
                    >
                        Erfassen
                    </button>
                    {todoDetectet && (
                        <p>&#9989;</p>
                    )}
                   
                </div>
        </div>
    )
}; // Ende AddTodoPoints