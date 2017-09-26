console.log('indexPublic.js works');

function changeToInputField(){
  if(event.target.value){
    let id = event.target.value;
    let inputField = document.getElementById(id);
    let title = document.getElementById('todo_' + id).childNodes[0].innerHTML;
    let details = document.getElementById('todo_' + id).childNodes[1].innerHTML;

    inputField.removeChild(inputField.childNodes[0]);
    inputField.innerHTML =
    `
    <form method="post">
      <input type="text" name="title" value="${title}">
      <input type="text" name="details" value="${details}">
      <button type="submit" formaction="/update/${id}"> Update </button>
    </form>
    `
    // inputTitle = document.createElement('input');
    // inputField.appendChild(inputTitle);
    // inputTitle.setAttribute('name', 'title')
    // inputTitle.setAttribute('value', 'x')
    //
    //
    // inputDetails = document.createElement('input');
    // inputField.appendChild(inputDetails)
    // inputDetails.setAttribute('name', 'details')
    // inputDetails.setAttribute('value', 'y')
    //
    // inputButton = document.createElement('button')
    // inputField.appendChild(inputButton);
    // inputButton.setAttribute('type', 'submit')
    // inputButton.setAttribute('formaction', '/update/z')
    // inputButton.append('Update')

    // console.log(inputField);

  }
}
