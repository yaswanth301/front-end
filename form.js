let submit = document.querySelector(".submit");

function getRadioValue(target) {
  var radio = selectAll(`[name=${target}]`);
  for(i = 0; i < radio.length; i++) {
   if(radio[i].checked){
     return radio[i].value;
   }
  }
 }

//event listeners
submit.addEventListener("click", async (event) => {
  event.preventDefault();
  let formData = new FormData();
  let title = select('[name="title"]');
  let artistName = select('[name="artistName"]');
  let audio = select('[name="audio"]');
  let thumbnail = select('[name="thumbnail"]');
  let gender = getRadioValue('gender');

  console.log(gender);
  formData.append('title' , title.value)
  formData.append('artistName' , artistName.value)
  formData.append('audio' , audio.files[0])
  formData.append('thumbnail' , thumbnail.files[0])
  formData.append('gender' , gender.value)
  let response = await Http.postForm('http://localhost:3000/add-new-audio', formData);
  alert(`Audio Player \n ${response.Msg}`);

});
