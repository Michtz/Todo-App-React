
import { getCurrentInstance } from 'vue';
import Information from './dataJason.json';
import { App } from './todoListApp.jsx';

class DataManager{
    todoStore = [];
    constructor(){
        this.loadFromBackend();
    }

    setStore(store) {
        this.todoStore = store.sort((a,b) => {
            return parseInt(a.id) < parseInt(b.id)
        });
    }

    getStore() {
        return this.todoStore;
    }

    addToStore(todo){
        this.todoStore.push(todo);
    }

    // Löscht einen Eintrag => den der angeklickt wird(sollte macht es aber noch nicht!!!)
    deletFromStore(todo){
   
        this.todoStore.splice(todo.place, 1); 
    }

  



   
    

    


    // function Delete($) {
    //     $('.removeDiv').on('click', function() {
    //       $(this).parent('div').remove();
    //     });
    //   };

    persist(){}

    // Hier werden die Informationen von der json Datei geholt.
    loadFromBackend(){
      this.setStore(Information);
    }

}
export default new DataManager();
