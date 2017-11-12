'use strict';
class Question{
  constructor(question){
    this.content = question;
    this.save();
  }
  save(){
    this.constructor._All.push(this);
  }
  static All(){
    return this._All;
  }

  static Find(number){
    return this.All()[number-1];
  }
}

Question._All = [];
