const currencyHolder=document.getElementById('currency')
const balanceHolder=document.getElementById('balance')
const tnxNameHolder=document.getElementById('name')
const tnxAmountHolder=document.getElementById('amount')


const income=document.getElementById('income')
const expense=document.getElementById('expense')

const saveButton=document.getElementById('save')

const displayList=document.getElementById('list-of-transaction')


let symbel='$';
let Listoftransaction =[];
let currentbalance =0;

function saveData(){
    localStorage.setItem('symbel',symbel);
    localStorage.setItem('balance',currentbalance);
    localStorage.setItem('list',JSON.stringify(Listoftransaction));
}

function render (){
    let currentbalance =Listoftransaction.
    reduce((total,value)=> { return value.type ==='expense' ? 
    total-value.amount :total + value.amount} ,0)


    displayList.innerHTML ='' ;

    if(Listoftransaction.length==0){
        displayList.innerHTML +='No Transaction Found'
    }
    else{
        Listoftransaction.forEach((e,i)=>{
            displayList.innerHTML +=`
           
    <li class="transaction ${e.type}">
        <p>${e.name}</p>
        <div class="right-side">
            <p>${symbel}${e.amount}</p> 
               </div>
    </li>`
        })
    }

currencyHolder.innerHTML=symbel;
balanceHolder.innerHTML=currentbalance;
saveData();
}
saveButton.addEventListener('click',()=>{

    if(tnxNameHolder.value =='' || Number(tnxAmountHolder.value)
    <=0) { alert('Caannot do that');
        return;
}

    let transaction ={
        name:tnxNameHolder.value,
        amount:Number(tnxAmountHolder.value),
        type:income.checked?'income ' : 'expense'
    };
    console.log(transaction);
    Listoftransaction.push(transaction);
    render()
})

render()