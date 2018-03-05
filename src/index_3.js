class SmartCalculator {

  constructor(initialValue) {
    this.answer=initialValue;
    this.allValues=[];
    this.allValues.push(initialValue);
  }

  add(number) {
    this.allValues.push('+');
    this.allValues.push(number);
    this.answer=this.getAnswer();
    return(this);
  }
  
  subtract(number) {
    this.allValues.push('-');
    this.allValues.push(number);
    this.answer=this.getAnswer();
    return(this);
  }

  multiply(number) {
    this.allValues.push('*');
    this.allValues.push(number);
    return(this);
  }

  devide(number) {
    this.allValues.push('/');
    this.allValues.push(number);
    this.answer=this.getAnswer();
    return(this);
  }

  pow(number) {
    this.allValues.push('^');
    this.allValues.push(number);
    this.answer=this.getAnswer();
    return(this);
  }
  getAnswer() {
    var newValues=[];
    for (var key=0; key<this.allValues.length; key++){
      newValues.push(this.allValues[key]);
    }
    for (var i=0; i<newValues.length; i++) {
        if (newValues[i]=='^') {
            var help=newValues[i-1];
            var num=help;
            for (var j=2; j<=newValues[i+1];j++) {
                help=help*num;
            }
            newValues.splice(i-1,3,help);
            i--;
        }
    }
    for (var i2=0; i2<newValues.length; i2++) {
        if (newValues[i2]=='*') {
            var help2=0;
            help2=newValues[i2-1]*newValues[i2+1];
            newValues.splice(i2-1,3,help2);
            i2--;
        }
    }
    for (var i3=0; i3<newValues.length; i3++) {
        if (newValues[i3]=='/') {
            var help3=0;
            help3=newValues[i3-1]/newValues[i3+1];
            newValues.splice(i3-1,3,help3);
        i3--;
        }
    }
    for (var i4=0; i4<newValues.length; i4++) {
        if (newValues[i4]=='+') {
            var help4=0;
            help4=newValues[i4-1]+newValues[i4+1];
            newValues.splice(i4-1,3,help4);
        i4--;
        }
    }
    for (var i5=0; i5<newValues.length; i5++) {
        if (newValues[i5]=='-') {
            var help5=0;
            help5=newValues[i5-1]-newValues[i5+1];
            newValues.splice(i5-1,3,help5);
        i5--;
        }
    }
    return(newValues[0]);
  }
  
valueOf() {
    return(this.answer);
}

}



const calculator = new SmartCalculator(2);

  const value = calculator
    .add(2)
    .multiply(2);

  console.log(value);
