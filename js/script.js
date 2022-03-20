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
            this.list.splice(indexElement, 1);
        },

        cancelContent(elementDone){
            elementDone = !elementDone;
            const text = document.querySelector('p.contentTodo');
            text.style.textDecoration = 'line-through';
            /* const text = document.querySelector('p.contentTodo');
            text.classList.add('canceled'); */
            /* elementText.style.textDecoration = 'line-through'; */
            /* contentElementLi.done = contentContent;
            contentTodo = true;
            contentTodo.style.textDecoration = 'line-through'; */
            console.log(elementDone);
            console.log(text);

        }
    }
});

