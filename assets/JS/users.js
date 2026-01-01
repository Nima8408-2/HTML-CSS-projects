// collapsible users list JS code

document.addEventListener('DOMContentLoaded', function() {
    const elems = document.querySelectorAll('.collapsible');
    const instances = M.Collapsible.init(elems, {});



  const addUserButton = document.getElementById('add_user_button')
  addUserButton.addEventListener('click', ()=>{
    document.querySelector('.add_user_modal').classList.add('show')
    document.querySelector('.add_user_modal_background').classList.remove('dis-none')
  })

  document.querySelector('.add_user_modal_background').addEventListener('click', (e)=>{
    document.querySelector('.add_user_modal').classList.remove('show')
    e.target.classList.add('dis-none')

  })

  });

