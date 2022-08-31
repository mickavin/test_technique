import LANGUAGES from "constants/languages";

export default (lang) => { 
   const obj = LANGUAGES.find(i => i?.initial == lang)
   if(obj){
        return "Version original: " + obj.language
   }
   return null
}