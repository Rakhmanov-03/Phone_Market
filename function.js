
function createCard(phone,index){
    return ` <tr  data-id = data_${phone.id}>
    <th scope="row">${index}</th>
    <td class="text-success" style = "cursor: pointer"><span>${phone.name}</span</td>
    <td>${phone.price}</td>
    <td>${phone.description}</td>
    <td>
      <span class="text-info" style="cursor: pointer">Update</span
      ><span class="text-danger ms-1" style="cursor: pointer"
        >Delete</span
      >
    </td>
  </tr>
    `
};

function validate(name,price){
    if(!name.value){
      alert("Nom kiritilishi zarur")
      name.focus();
      return false;
    }
    if(!price.value){
      alert("Nom kiritilishi zarur")
      price.focus();
      return false;
    }
    if(name.value.trim().length < 3){
      alert("Nom kamida 3 ta belgidan iborat bo'lishi zarur")
      name.focus();
      return false;
    }
    if(price.value <= 0){
      alert("Narx manfiy bo'lishi mumkin emas")
      price.focus();
      return false;
    }
    if(!Number(price.value)){
      alert("Narx raqam bilan yozilishi kerak")
      price.focus();
      return false;
    }
    return true;
  }

export { createCard, validate };

