window.addEventListener('load',()=>{

   let name= localStorage.getItem("name")
   

   let degis= localStorage.getItem("degis")
   let phone= localStorage.getItem("phone")
   let email= localStorage.getItem("email")
   let add= localStorage.getItem("add")
   let pass= localStorage.getItem("pass")
   let deg= localStorage.getItem("deg")
    let uni =localStorage.getItem("uni")
    let pass2 =localStorage.getItem("pass2")
   let  deg1 =localStorage.getItem("deg1")
   let uni1= localStorage.getItem("uni1")
    let skill1=localStorage.getItem(" skill1")
   let skill2= localStorage.getItem("skill2")
   let skill3= localStorage.getItem("skill3")
   let skill4=localStorage.getItem("skill4")
   let skill5=localStorage.getItem("skill5")
   let lang1= localStorage.getItem("lang1")
   let lang2= localStorage.getItem("lang2")
   let styear= localStorage.getItem("styear")
   let endyear= localStorage.getItem(" endyear")
   let company= localStorage.getItem("company")
  let comlocation =localStorage.getItem("comlocation")
   let jobtitle= localStorage.getItem("jobtitle")
   let about=localStorage.getItem('about')
   let picure=localStorage.getItem('profile_pic')
    

   let resumeName:any=document.getElementById('resumeName')
   resumeName.textContent=name

   let resdegi:any=document.getElementById('resdegi')
   resdegi.textContent=degis

   let resumephone:any=document.getElementById('resumephone')
   resumephone.textContent=phone

   let resumeemail:any=document.getElementById('resumeemail')
   resumeemail.textContent=email

   let resumeadd:any=document.getElementById('resumeadd')
   resumeadd.textContent=add

   let passyear:any=document.getElementById('passyear')
   passyear.textContent=pass

   let resumedegre:any=document.getElementById('resumedegre')
   resumedegre.textContent=deg
   
   let resumeuni:any=document.getElementById('resumeuni')
   resumeuni.textContent=uni

   let resumepass:any=document.getElementById("resumepass")
   resumepass.textContent=pass2

   let resumedeg2:any=document.getElementById('resumedeg2')
   resumedeg2.textContent=deg1

   let resumeuni2:any=document.getElementById('resumeuni2')
   resumeuni2.textContent=uni1

   let resumelang1:any=document.getElementById('resumelang1')
   resumelang1.textContent=lang1

   let resumelang2:any=document.getElementById('resumelang2')
   resumelang2.textContent= lang2

   let resumeskill1:any=document.getElementById('resumeskill1')
   resumeskill1.textContent=skill1
   
   let resumeskill2:any=document.getElementById('resumeskill2')
   resumeskill2.textContent=skill2

   let resumeskill3:any=document.getElementById('resumeskill3')
   resumeskill3.textContent=skill3

   let resumeskill4:any=document.getElementById('resumeskill4')
   resumeskill4.textContent=skill4

   let resumeskill5:any=document.getElementById('resumeskill5')
   resumeskill5.textContent=skill5

   let resumestrarty:any=document.getElementById('resumestrarty')
   resumestrarty.textContent=styear
   
   let resumeendy:any=document.getElementById('resumeendy')
   resumeendy.textContent=endyear

   let resumecompname:any=document.getElementById('resumecompname')
   resumecompname.textContent=company
   
   let resumecompanyloc:any=document.getElementById('resumecompanyloc')
   resumecompanyloc.textContent=comlocation

   let resumejobtitle:any=document.getElementById('resumejobtitle')
   resumejobtitle .textContent=jobtitle

   let resumeabout:any=document.getElementById('resumeabout')
   resumeabout.textContent=about
   let resumeimg:any=document.getElementById('resumeimg')
      resumeimg.src =picure
   
   


})   

   /////////edit//////
   let edit_btn=document.getElementById('edit_btn');
   edit_btn?.addEventListener('click',()=>{
      window.history.back()
   })
   
   
   
   