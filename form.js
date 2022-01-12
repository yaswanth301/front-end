//variables -global
let form_upload = select(".form");
let submit = select(".submit");



//event listeners
submit.addEventListener("submit",preventReload);

//prevent auto loading
function preventReload(e){
  e.preventDefault();
  formUpdateData()
  }


//functionality
// function formUpdateData(){
//   let music_data = {
//     title : form_upload.name.value,
//     artistName : form_upload.artistName.value,
//     audio : form_upload.music.value,
//     thumbnail : form_upload.thumbnail.value,
//     gender:form_upload.gender.value
//   }
//   console.log(music_data);
// }

let form = new FormData();

form.append("title","happy");
let myForm = document.getElementById("form");
form = new FormData(myForm);
console.log(form);