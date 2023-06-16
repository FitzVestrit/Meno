<script setup>
  import { onMounted, ref } from 'vue'
  import { collection, getDocs } from "firebase/firestore";
  import {db} from '@/firebase/index.js'
  import { doc, setDoc, onSnapshot, deleteDoc } from "firebase/firestore";
  import { v4 as uuidv4 } from 'uuid';


  let notes = ref([]);
  let uneDate ='';
  let uneNote ='';

  onMounted(async() => {
      onSnapshot(collection(db, "notes"), (querySnapshot) => {
        let uneNote =  {};
        let lesNotes = [];
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        uneNote = {
          id: doc.id,
          date: doc.data().date,
          note: doc.data().note,
        }
        lesNotes.push(uneNote);
      })
      notes.value = lesNotes;
      console.log(notes);
  })
})
  async function ajoute(){
    await setDoc(doc(db, "notes", uuidv4()), {
      date: uneDate,
      note: uneNote
    })
  };
  async function supprime(id){
      await deleteDoc(doc(db, "notes", id));
  }
</script>

<template>
  <div style="display: flex; flex-direction: column;">
    <div>
    <h3>Saisie d'une note</h3>
    <form action="">
    <input type="date" v-model="uneDate">
    <input type="text" v-model="uneNote" placeholder="Entrez votre note">
    <input type="button" value="Ajouter une note" @click="ajoute">
    </form>
  </div>
  <div>
    <h3>Les notes existantes</h3>
    <table>
      <tr v-for="n in notes" :key="n.id">
        <td><input type="button" value="&cross;" @click="supprime(n.id)"></td>
        <td>{{ n.date }}</td>
        <td>{{ n.note }}</td>
      </tr>
    </table>
  </div>
  </div>
 
  
</template>