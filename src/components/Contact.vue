<template>
    <div id="contact" class="paddsection">
    <div class="container">
      <div class="contact-block1">
        <div class="row">
          <div class="col-lg-6">
            <div class="contact-contact">
              <h2 class="mb-30">Restons Connectés</h2>
              <ul class="contact-details">
                <li><span>Karma Music</span></li>
                <li><span>Christophe A (Manager)</span></li>
                <li><span>0690494428 / 0690275708</span></li>
                <li><span>karmamusicstaff@gmail.com</span></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6">
            <form action="" method="post" role="form" class="contactForm">
              <div class="row">
                <div id="sendmessage">Votre message a bien été envoyé</div>
                <div id="errormessage"></div>
                <div class="col-lg-6">
                  <div class="form-group contact-block1">
                    <input v-model="nom" class="form-control" id="name" placeholder="Votre nom" />
                    <div class="validation"></div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <input v-model="mail" type="email" class="form-control" name="email" id="email" placeholder="Votre adresse email" />
                      
                    <div class="validation"></div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group">
                    <input v-model="sujet" type="text" class="form-control" name="subject" id="subject" placeholder="Sujet"/>
                    <div class="validation"></div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group">
                    <textarea v-model="msg" class="form-control" name="message" rows="12" placeholder="Votre message"></textarea>
                    <div class="validation"></div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <input type="button" @click="sendMail" class="btn btn-defeault btn-send" value="Envoyer">
                </div>
              </div>
            </form>
            <div class="Alert">
              <div v-if="err" class="alert alert-danger" role="alert">
                {{ errMsg }}
              </div>
              <div v-if="success" class="alert alert-success" role="alert">
                Le Mail à bien été envoyé
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    props: ['value'],
    name:'Contact',
    data(){
      return{
        nom:'',
        mail:'',
        sujet:'',
        msg:'',
        err:false,
        success:false,
        errMsg:"Le mail n'a pas pu être envoyé"
      }
    },
    methods:{
      sendMail:function(){
        axios.get('http://mailer.foxy.eazys-dev.fr', {
          params: {
            name:this.nom,
            mail:this.mail,
            subject:this.sujet,
            msg:this.msg
          }
        })
        .then(response=>{
          this.success = true;
          this.nom="";
          this.mail="";
          this.sujet="";
          this.msg="";
        })
        .catch(error=>{
          console.log(error);
          this.err=true;
          errMsg="Une erreur est survenue";
        })
        .then(()=>{
          // always executed
        }); 
      }
    }
}
</script>

<style>
</style>
