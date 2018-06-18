import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public quantidade:number;
  public quantidadeResult:number;

  public valuesKeyResult=[];
  public valuesKeyResultForJson=[];

  public valuesKey=[];
  public valuesKeyForJson=[];

  public universities:{
    name,
    rules:{
        inputs:any,
        if:{
          result:any
        }
    }
  }={
    name:"",
    rules:{
      inputs:[],
      if:{
        result:[]
      }
    }
  };

  constructor(public navCtrl: NavController) {  
  }

  public mudaQuantidade():void{
    this.valuesKey=[];
    this.valuesKeyForJson=[];
    for(let i=0;i<this.quantidade;i++){
      this.valuesKey.push(i);
      this.valuesKeyForJson.push(i);
    }
  }

  public mudaQuantidadeResult():void{
    this.valuesKeyResult=[];
    this.valuesKeyResultForJson=[];
    for(let i=0;i<this.quantidadeResult;i++){
      this.valuesKeyResult.push(i);
      this.valuesKeyResultForJson.push(i);
    }
  }

  public insertInput():void{
    for(let item of this.valuesKeyForJson){
      this.universities.rules.inputs[item]={"name":item};
    }
  }

  public setValuesKey(key,value):void{
    console.log(value);
    this.valuesKey[key]=value;
  }

  public setValuesKeyResult(key,value):void{
    console.log(value);
    this.valuesKeyResult[key]=value;
  }

  public criarRegra():void{
    this.insertInput();

    for(let item of this.valuesKeyResultForJson){
      var val = item.split(";");
      this.universities.rules.if.result[val[0]]={
        calc:val[1],
        if:JSON.parse(JSON.stringify(eval('('+val[2]+')')))
      };
    }
   console.log(this.universities);
  }

  // public setValuesKeyResult(value:string):void{
  //   var val = value.split(",");
  //   this.valuesKeyResult[val[0]]={
  //     calc:val[1],
  //     if: JSON.parse(val[2])
  //   };
  // }


}