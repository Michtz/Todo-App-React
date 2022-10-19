// <?php

//     // Ist es eine POST Methode
//     if($_POST){
        
//         //Ist der Wert "ID" vorhanden im Datenpacket
//         if($_POST['id']){
            
        
//           // $emailTo = "kontakt@michaelvenetz.ch";
//             $id       = $_POST['id'];
//             $text     = $_POST['text'];
//             $date     = $_POST['date'];
//             $time     = $_POST['time'];
//             $reminder = $_POST['reminder'];
            


//             // ?
//             class mail
//             {
//               public $id      
//               public $text     
//               public $date    
//               public $time
//               public $reminder
//             }
            
//             // Zielortner
//             $filename = "dataJason.json";

//             // ?
//             $filesize = filesize($filename);
            

//             // Falls das File leer ist
//             if($filesize < 1) {
//                 $todo = array();
//             } else {
//                //File Inhalt lesen 
//                 $myfile = fopen($filename, "r") or die("Unable to open file!");
//                 $contents = fread($myfile, filesize($filename));
//                 fclose($myfile);
        


// //--------------- Sollte hier nicht alle strings umgewandelt werden?

//                //Inhalt von String zu Objekt umwandeln
//                 $todos = json_decode($contents);
//             }
            

            
//             //Mail Objekt erzeugen
//             $todo = new Array;
            
//             //Mail Objekt mit daten befüllen;
//             $todo->id       = $id;
//             $todo->text     = $text;
//             $todo->data     = $date;
//             $todo->time     = $time;
//             $todo->reminder = $reminder;
            
//            //Neues mail in die bestehende Liste hinzufügen
//             array_push($todos, $todo);
            
//            //Liste in das File als String speichern
//             $myfile = fopen($filename, "w") or die("Unable to open file!");
//             fwrite($myfile, json_encode($todos));
//             fclose($myfile);
//         }
//     }

   

// ?>

// Den PHP Teil habe ich angefangen aber als ich die Fils auf meinem 
// Webserver laden wolte, funktionierte nichts mehr und da ich spontan 
// in den Ferien bin wollte ich nicht den Ganzen Tag hinter dem PC verbringen.


import React, { useEffect, useState } from "react";
import { AddTodoPoints } from "./addTodoPoints";
import "./style.css";
import dataManager from "./DataManager";

    export function Todo() {

      let current;
      const [clicked, setClicked] = useState(false);

        // Erfasst die Id des angecklickten inputs( div )
        const showId = event => {
        setClicked(!clicked);
          current = event.currentTarget.id;
          current = current - 1;

              dataManager.deletFromStore({
              place: current
              })
        };

        // Rendert die Seite neu wen ein TodoPunkt erledigt ist
        // Render aber die komplette Seite neu!   <Noch nicht I.O.>
          useEffect(() => {}, [current]);

        // Beschreibung von Weckersymbol
          const openDescription = () => {
            alert("Bei den Todos mit einem Wecker haben Sie eine Erinnerung eingeschaltet.")
          }

        // Gibt die Liste von Todo Punkten aus
          return (
            <>
              { dataManager.getStore().map( informa => {
                return(
              
                    <div className="box" data-todo-id id={"box"+informa.id}>
                      <article className="firstLine">
                      <h1>{ informa.text }</h1><br/>	
                      
                      {informa.reminder && (
                          <div className="clock" onClick={openDescription}>
                            &#9200;     
                          </div>
                      )}
                      </article>
                      
                      <div className="dateTime">
                        <p>Am&nbsp;</p>
                          <p>{ informa.date }</p>
                            <p className="">&nbsp;um&nbsp;</p>
                              <p>{ informa.time }</p>
                        <br/>
                      </div>
              
                      <div
                        id={informa.id}
                          className="doneButton"
                          type="radio"
                          onClick={showId}
                        >
                          &#9989;&nbsp;<p>Done</p>
                      </div>
                    </div>
                  )
                })
              }
            </>
            );
        }; // Todo Funktion Fertig


    export function App() {

    // Für Hinzufügen Button
      const [addVisible, setAddVisible] = useState(false);
      const [info, setInfo] = useState(false);


    // Hier werden die Ansichten umgeschaltet
      const addButton = () => {
        setInfo(false);
          setAddVisible(!addVisible);
          if(addVisible === false){
            document.getElementById("todoPoints").style.display = "none";
          }else{
            document.getElementById("todoPoints").style.display = "block";
          }
      }

      const showInfo = () => {
        setInfo(true);
      }

      const hideInfo = () => {
        setInfo(false);
      }

          return(
            <>
              {addVisible && (
                <AddTodoPoints />
              )}
                
              <button 
                  className="addButton" 
                  onClick={addButton}
                  onMouseOver={showInfo}
                  onMouseOut={hideInfo}
                  >	
                   {addVisible && (
                     <p className="backButton">Zurück<br/>zum Menu</p>
                   )}

                      {!addVisible && (
                        <div>
                          &#10753;

                            {info && (
                                <p className="info">Todo Punkt Hinzufügen</p>
                            )}
                        </div>
                      )}
                    
                  </button>

              <div className="header" id="todoPoints">
                <h2>Zu erledigende Todo's</h2>
              
                <Todo />

              </div>
            </>
    );
}; // Ende App Funktion