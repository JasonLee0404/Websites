

<!--This file was done after the tutorial of https://www.youtube.com/watch?v=m1_ih43p24s -->



<template>
    <div class="calculator">

        <div class="display"> {{ current || '0' }} </div>
        <div @click="clear" class="button"> C </div>
        <div @click="sign" class="button"> + / - </div>
        <div @click="percent" class="button"> % </div>
        <div @click="divide" class="button operator"> / </div>
        <div @click="append('7')" class="button"> 7 </div>
        <div @click="append('8')" class="button"> 8 </div>
        <div @click="append('9')" class="button"> 9 </div>
        <div @click="times" class="button operator"> x </div>
        <div @click="append('4')" class="button"> 4 </div>
        <div @click="append('5')" class="button"> 5 </div>
        <div @click="append('6')" class="button"> 6 </div>
        <div @click="minus" class="button operator"> - </div>
        <div @click="append('1')" class="button"> 1 </div>
        <div @click="append('2')" class="button"> 2 </div>
        <div @click="append('3')" class="button"> 3 </div>
        <div @click="add" class="button operator"> + </div>
        <div @click="append('0')" class="zero"> 0 </div>
        <div @click="dot" class="button"> . </div>
        <div @click="equal" class="button operator"> = </div>
      
    

    </div>
</template>

<script>
    //You have to pay attention to this.current, not just current, because it can make your
    //whole app malfunction


    export default {
        data() {
            return {
                previous: null,
                current: '',
                operator: null, // a field to store the state of the app
                operatorClicked: false,
            
            }
        },
        methods: {
            //everytime you click C, it clears the display
            clear() {  
                this.current = '';
            },
            //everytime you click the minus sign, it adds the sign to the front of the display
            sign() {
                this.current = this.current.charAt(0) === '-' ?
                    this.current.slice(1) : `-${this.current}`;
            },
            //everytime you click %, the number is divided by 100
            percent() {
                this.current = `${parseFloat(this.current) / 100 }`;
            },

            //to implement the numbers means that everytime you click one of them, 
            //that number is appended to the end of the display
            append(number) {
                if(this.operatorClicked) {
                    console.log('hello');
                    this.current = '';
                    this.operatorClicked = false;
                }

                this.current = `${this.current}${number}`;
            },

            //a function to append the dot
            dot() {
                //if the dot does not exist, we add the dot
                if(this.current.indexOf('.') === -1) {
                    this.append('.');
                }
            },

            //a function that abstract operatorClicked, previous into one function
            setPrevious() {
                this.previous = this.current;
                this.operatorClicked = true;
            },

            divide() {
                this.operator = (a,b) => a / b; //ES6 syntax, arrow function
                this.setPrevious();
            },

            times() {
                this.operator = (a,b) => a * b;
                this.setPrevious();
            },

            minus() {
                this.operator = (a,b) => a - b;
                this.setPrevious();
            },

            add() {
                this.operator = (a,b) => a + b; //define the function for this.operator
                this.setPrevious();
            },


            //by this time, after hitting the operator, we have two variables
            //previous and current. when we click equal, those two 
            //will be executed with the appropriate operators
            equal() {
                this.current = `${this.operator(
                    parseFloat(this.current),
                    parseFloat(this.previous)
                )}`;

                this.previous = null;
            }


        }

    }
</script>







<style scoped>
.calculator {
  margin: 0 auto;
  width: 400px;
  font-size: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
}
.display {
  text-align: center;
  grid-column: 1 / 5;
  background-color: #333;
  color: white;
}
.zero {
  text-align: center;
  background-color: #F2F2F2;
  border: 1px solid #999;
  grid-column: 1 / 3;
}
.button {
  text-align: center;
  background-color: #F2F2F2;
  border: 1px solid #999;
}
.operator {
  background-color: orange;
  color: white;
}
</style>