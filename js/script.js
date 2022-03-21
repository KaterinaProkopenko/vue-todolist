const app = new Vue({
    el: '#app',
    data: {
        list: [],
        newContent: ''
    },
    methods: {
        addContent(content){
            if(content.trim() !== ""){  
                const contentElementLi = {
                    text: '',
                    done: false
                }; 
                contentElementLi.text = content;           
                this.list.push(contentElementLi);
                this.newContent = "";
            } else {
                document.getElementById('warn').innerHTML = 'Attenzione: la stringa è vuota. Inserisci qualcosa.' 
            }
        },

        removeContent(indexElement){
            if(this.list[indexElement] !== undefined){
                this.list.splice(indexElement, 1);
            }else{
                console.log('elemento non esiste');
            }
            
        },

        doneContent(indexDone){
            if(this.list[indexDone] !== undefined){
                this.list[indexDone].done = !this.list[indexDone].done;
                console.log(this.list[indexDone].done)
            }else {
                console.log('elemento non esiste');
            }
            
            /* const text = document.querySelector('p.contentTodo');
            text.classList.add('canceled'); */
            /* elementText.style.textDecoration = 'line-through'; */
            /* contentElementLi.done = contentContent;
            contentTodo = true;
            contentTodo.style.textDecoration = 'line-through'; */

        }
    }
});

