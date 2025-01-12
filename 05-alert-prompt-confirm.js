// alert() - shoes the popup message
// prompt() - used to take the user input
// confirm() - shows a message, confirm with "OK" OR "CANCEL". it returns true for okay and false for cancel/Esc.

alert("welcome");
let c = document.write(prompt("enter the age")); // if user donot fill any input. bydefault it will take it as undefined.
if (c != null) {
  document.write(`user has given input as  ${c}`);
  document.write('<br>')
}


let response = confirm("are you sure, you want to close the window");
if (response) {
    document.write("yes")
    document.write('<br>')
}else{
    document.write("no")
    document.write('<br>')
}