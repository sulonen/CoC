'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let characterSchema = new mongoose.Schema({

  character: {
    personalData: {
      player: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      },
      name: String,
      occupation: String,
      colleges: String,
      birthplace: String,
      disorders: String,
      gender: String,
      age: Number,
      agePenalty: {
        characteristic: String,
        penalty: Number
      },
      era: String,
      annualIncome: Number,
      additionalAssets: Number,
      occupationPoints: Number,
      interestPoints: Number,
      totalPoints: Number
    },
    
    characteristics: {
      str: Number,
      con: Number,
      pow: Number,
      dex: Number,
      app: Number,
      siz: Number,
      int: Number,
      edu: Number,
      san: Number
    },
   
    rolls: {
      idea: Number,
      luck: Number, 
      know: Number,
      damageBonus: Number, 
      mythos99: Number,
      hitpoints: Number,
      magicpoints: Number,
      sanpoints: Number 
    },

    skills: {
      anthropology: Number,
      archaeology: Number,
      art: Number,
      astronomy: Number,
      bargain: Number,
      biology: Number,
      chemistry: Number,
      climb: Number,
      computer: Number,
      conceal: Number,
      craft: Number,
      credit: Number,
      mythos: Number,
      disguise: Number,
      dodge: Number,
      drive: Number,
      electrical: Number,
      electronics: Number,
      talk: Number,
      aid: Number,
      fist: Number,
      geology: Number,
      grapple: Number,
      handgun: Number,
      headbutt: Number,
      hide: Number,
      history: Number,
      jump: Number,
      kick: Number,
      law: Number,
      library: Number,
      listen: Number,
      locksmith: Number,
      machinegun: Number,
      martial: Number,
      mechanical: Number,
      medicine: Number,
      nature: Number,
      navigate: Number,
      occult: Number,
      machinery: Number,
      langOther: Number,
      langOwn: Number,
      persuade: Number,
      pharmacy: Number,
      photography: Number,
      physics: Number,
      pilot: Number,
      psychoanalysis: Number,
      psychology: Number,
      ride: Number,
      rifle: Number,
      shotgun: Number,
      sneak: Number,
      spot: Number,
      submachinegun: Number,
      swim: Number,
      throw: Number,
      track: Number
    },

    weapons: {
      fist: Number,
      grapple: Number,
      head: Number,
      kick: Number
    }
  }
});

module.exports = mongoose.model('Character', characterSchema);

