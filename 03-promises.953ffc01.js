const o=new Promise(((o,e)=>{setTimeout((()=>{Math.random()>.4&&o("Succesful"),e("Errorr")}),2e3)}));o.then((o=>{console.log("Winner JS"),console.log(`${Succesful}`)})).catch((o=>{console.log("NOT Winner JS")})),console.log(o);
//# sourceMappingURL=03-promises.953ffc01.js.map
