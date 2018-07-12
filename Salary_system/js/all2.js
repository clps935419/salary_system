var app= new Vue({
    el:'#app',
    data:{
        salary:[
            {
               name:'leo',
               salary:35000,
               month:7 ,
               isRotate: false
            },
            {
               name:'tim',
               salary:25000,
               month:7 ,
               isRotate: false
            },
            {
               name:'jack',
               salary:45000,
               month:7 ,
               isRotate: false
            }
        ],
        newname:'',
        newsalary:'',
        newmonth:'',
        catch:[],
        catchname:'',
        catchsalary:'',
        catchmonth:'',
        filterText: ''
    },
    methods:{
        add:function(){
            var Newname=this.newname.trim();
            var Newsalary=this.newsalary.trim();
            var Newmonth=this.newmonth;
            if(!Newname || !Newmonth || !Newsalary){
                return;
            }
            this.salary.push({
                name:Newname,
                salary:Newsalary,
                month:Newmonth,
                isRotate:false
            });
            this.newname='';
            this.newsalary='';
            this.newmonth='';
            
        },
        remove:function(key){
            this.salary.splice(key,1);
        },
        edit: function(item){
            item.isRotate =!item.isRotate;
            console.log(item.isRotate);
            this.catch=item;
            this.catchname=item.name;
            this.catchsalary=item.salary;
            this.catchmonth=item.month;

        },
        done: function(item){
            item.name=this.catchname;
            item.salary=this.catchsalary;
            item.month=this.catchmonth;
            this.catchname='';
            item.isRotate=false;
        },
        
    },
    computed:{
        filterArray: function(){
          var vm=this;
          return vm.salary.filter(function(item){
            return item.name.match(vm.filterText);
          })
        }
      }
})