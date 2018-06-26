'use strict';

class ESDjob
    
   {
     constructor()
      {
           this._checkSetup();
          this._initFirebase();
       }
       
   _initFirebase()
       {
           this.auth = firebase.auth();
           this.db = firebase.firestore();
           this.storage = firebase.storage();
           const setting = {timestampsInSnapshots: true};
           this.db.setting(settings);
           this.auth.onAuthStateChanged(this.onAuthStateChanged.bind(this));
       }
       onAuthStateChanged(user)
       {
           console.log('user',JSON.stringify(user));
           if (user)
               {
                   console.log("Connecté");
               }else{
                   console.log("deconnecté");
               }
           
       }
   _setupEvent();
       {
           this.googleBtn.addEventListener('click',this.signInWithGoogle.bind(this));
       }
   singInWithGoogle()
{
    var provider = new forenase.auth.GoogleAuthProvider();
    this.auth.signInWithPopup(provider);
}
   
   
   }





_checkSetup()
{
    if (!window.firebase || !(firebase.app instanceof Function)|| !firebase.app().option){
        window.alert
    }
}


window.onload = () {
    window.ESDjib = new ESDjob ();
}