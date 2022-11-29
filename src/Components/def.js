let inp='(()(()))'
inp=inp.split('')
const exp=(inp)=>{
    let result=''
    let a=[]
    inp.forEach(c => {
        if(a.length===0){
            a[0]=c
        }
        else if(a.length>0){
            if(a[a.length-1]==='('&& c==='('){
                result+='2*('
                a.push(c)
            }
            else if(a[a.length-1]==='('&&c===')'){
                result+='1'
                a.push(c)
            }
            else if(a[a.length-1]===')'&&c==='('){
                result+='+'
                a.push(c)
            }
            else if(a[a.length-1]===')'&&c===')'){
                result+=')'
                a.push(c)
            }
        }
    });
    return result
    }

let arr=['2','1','+','3','*'] 
const evl=(arr)=>{
    let result=[]
    let sum=0
    const eveluate=(a,b,op)=>{
        if(op==='+') return a+b
        if(op==='-') return a-b
        if(op==='*') return a*b
        if(op==='/') return a/b
    }
    arr.forEach(c=>{
        let k=c
        let v=Number(k)
        if(!(isNaN(v))){
            result.push(v)
            console.log(result)
        }
        else if(isNaN(v)){
            sum=eveluate(result.pop(),result.pop(),k)
            result.push(sum)
        }
    })
    return sum
}
// console.log(evl(arr))
// let u='2*(1+2*(1))'
// u=u.split("")
// let stack=[]
// let expr=''
// let dec={'+':'sum','-':'sup','*':'mul',"/":'div'}
// let brc={'(':'open',')':'close'}
// const eveluate=(u)=>{
//     u.forEach(c=>{
//         if(!(c in dec)&&!(c in brc)){
//             expr+=c
//         }
//     })
// }
// console.log(eveluate(u))
// console.log(expr)

let u='2*(1+2*(1))'
console.log(/[(,)]/g,'')