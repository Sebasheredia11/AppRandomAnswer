<template>
  <h2>{{customTitle}} </h2>
  <p> {{counter}} <sup>2</sup> = {{squareCounter}} </p>
  <p data-test="Counter"> {{counter}} </p>

  <div>
      <button  @click="increment">+</button>
      <button :disabled="counter<1" @click="decrement">-</button>
  </div>
</template>

<script>
export default {
    props: {
        title: String,
        start: {
            type: Number,
            default: 100,
            // required: true
            validator(value){
                return value >= 0;
            }
        }
    },
    name: 'Counter',

    data(){
        return{
            counter: this.start
        }
    },
    methods: {
        getSquareValue(){
            console.log('getSquareValue');
            return this.counter * this.counter;
        },
        increment(){
            this.counter++;
        },
        decrement(){
            this.counter--;
        }
    },

    computed:{
        squareCounter(){
            return this.counter * this.counter;
        },
        customTitle(){
            return this.title || 'Counter';
        }
    }
}
</script>

<style>

    button{
        background-color: #64BB87;
        border-radius: 5px;
        color: white;
        margin: 0 5px;
        transition: 0.3s ease-in-out;
    }

    button:hover{
        background-color: #5aa67b;
        transition: 0.3s ease-in-out;
    }

</style>