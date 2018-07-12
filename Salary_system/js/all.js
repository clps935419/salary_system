var app= new Vue({
    el: '.app',
    data:{
        text:'aaa',
        mesg:'bbas',
        className:'fontb',
        list:[{
            name:'leo',
            age:'25'
        },
        {
             name:'jay',
             age:'22'
        },
        {
             name:'aaa',
             age:'33'
        }
        ]
    }
   
    
});

var textrev= new Vue({
    el:'#rev',
    data:{
        text:'',
        newtext:'',
        judge:false
    },
    methods:{
        reverse:function(){
            console.log('hi');
            this.newtext=this.text.split('').reverse().join('')
        }
    },
    computed:{
        reversete:function(){
            return this.text.split('').reverse().join('');
        }
    }
});

var count=new Vue({
    
    el:'#count',
    data:{
        count:0
    }
})

var nav=new Vue({
    el:'#nav',
    data:{
        link:'a'
    }
})