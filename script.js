const app = Vue.createApp({
    data(){
        return{
            typedWordSaved: "",
            tempWord: "",
            tempWord2: "",
            characters: [],
            words: []
        }
    },
    methods:{
        save(word){
            this.words = []
            this.typedWordSaved = word
            // ordet som skrevet
            this.words.push(word)
            // ordet med store bogstaver
            this.words.push(word.toUpperCase(word))
            // ordet med små bogstaver
            this.words.push(word.toLowerCase(word))
            // ordet med stort begyndelsesbogstav
            // første linje klipper det første tegn ud og gemmer det i tempWord
            // anden linje sætter tempWord og en de restende karakterer fra det indtastede ord sammen vha. .substring
            this.tempWord = this.typedWordSaved.slice(0,1)
            this.words.push(this.tempWord.toUpperCase()+word.substring(1).toLowerCase())
            // ordet med stort afslutningsbogstav
            // første linje deler det indtastede ord op i enkelte tegn og lægger tegnene ind i et array
            // anden linje gør det sidste bogstav stort
            // tredje linje samler arrayet til en string, som lægges i listen
            this.tempWord = this.typedWordSaved.slice(0,-1)
            this.words.push(this.tempWord.toLowerCase()+this.typedWordSaved.slice(-1).toUpperCase())
            //word.toUpperCase(this.characters[(this.characters.length-1)])
            //this.words.push(this.characters.join(""))
            // ordet baglæns
            // første linje gør det store bogstav fra tidligere småt igen
            // anden linje vender arrayet om
            // tredje linje laver arrayet om til en string og lægger stringen på listen
            this.characters = word.split("")
            this.characters.reverse()
            this.words.push(this.characters.join(""))
        }
    }
}).mount("#app")