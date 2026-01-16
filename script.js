let format="MP3";

function setFormat(f){
  format=f;
  document.getElementById("mp3").classList.remove("active");
  document.getElementById("mp4").classList.remove("active");
  document.getElementById(f.toLowerCase()).classList.add("active");

  const q=document.getElementById("quality");
  q.innerHTML = f==="MP3" ?
  `
    <option>MP3 – 320 kbps (Highest)</option>
    <option>MP3 – 256 kbps</option>
    <option>MP3 – 192 kbps</option>
  ` :
  `
    <option>MP4 – 1080p</option>
    <option>MP4 – 720p</option>
    <option>MP4 – 480p</option>
  `;
}

function convert(){
  const link=document.getElementById("link").value;
  if(!link){
    alert("Please paste a link");
    return;
  }
  document.getElementById("loader").style.display="block";
  document.getElementById("result").style.display="none";

  setTimeout(()=>{
    document.getElementById("loader").style.display="none";
    document.getElementById("result").style.display="block";
  },2000);
}