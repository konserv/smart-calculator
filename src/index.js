class SmartCalculator {

  constructor(initialValue) {
    this.allValues=[];
    this.allValues.push(initialValue);
  }

  add(number) {
    if (number.length==0) {
        return(this);
    }
    this.allValues.push('+');
    this.allValues.push(number);
    return(this);
  }
  
  subtract(number) {
    if (number.length==0) {
        return(this);
    }
    this.allValues.push('-');
    this.allValues.push(number);
    return(this);
  }

  multiply(number) {
    if (number.length==0) {
        return(this);
    }
    this.allValues.push('*');
    this.allValues.push(number);
    return(this);
  }

  devide(number) {
    if (number.length==0) {
        return(this);
    }
    this.allValues.push('/');
    this.allValues.push(number);
    return(this);
  }

  pow(number) {
    if (number.length==0) {
        return(this);
    }
    this.allValues.push('^');
    this.allValues.push(number);
    return(this);
  }
  getAnswer() {
    while (this.allValues.length>1) {
        for (var i=this.allValues.length-1; i>0; i--) {
            if (this.allValues[i]=='^') {
                var help=Math.pow(this.allValues[i-1],this.allValues[i+1]);
                this.allValues.splice(i-1,3,help);
                i=this.allValues.length-1;
            }
        }
        for (var i2=0; i2<this.allValues.length; i2++) {
            if (this.allValues[i2]=='*') {
                var help2=this.allValues[i2-1]*this.allValues[i2+1];
                this.allValues.splice(i2-1,3,help2);
                i2=0;
            }
        }
        for (var i3=0; i3<this.allValues.length; i3++) {
            if (this.allValues[i3]=='/') {
                var help3=Math.round(this.allValues[i3-1]/this.allValues[i3+1]);
                this.allValues.splice(i3-1,3,help3);
                i3=0;
            }
        }
        for (var i4=0; i4<this.allValues.length; i4++) {
            if (this.allValues[i4]=='+') {
                var help4=this.allValues[i4-1]+this.allValues[i4+1];
                this.allValues.splice(i4-1,3,help4);
                i4=0;
            }
            if (this.allValues[i4]=='-') {
                var help5=this.allValues[i4-1]-this.allValues[i4+1];
                this.allValues.splice(i4-1,3,help5);
                i4=0;
            }
        }
    }
    return(this.allValues[0]);
  }
  
valueOf() {
    var answer=this.getAnswer();
    return(answer);
}

}


module.exports = SmartCalculator;