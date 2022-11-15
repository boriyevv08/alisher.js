let opt1 = document.querySelector(".option1");


let pul = prompt(" Sayohat uchun jami 900$ miqdoridagi pulingiz bo'lishi shart! \n Sizning qancha pulingiz bor, so'mda kiriting");

let budget = 9795628

if(pul >= budget ){
opt1.innerHTML="Oq yo'l Alisher, sizning pulingiz sayohat uchun yetarli"
}
else( opt1.innerHTML=" Alisher biroz sabr qiling, sizning pulingiz sayohat uchun yetarli emas")