document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value

  if (day === 'Tuesday' || day === 'Thursday')
  {
    document.querySelector('placeToSee').changeText('Class');
  }
  else if (day === 'Saturday' || day === 'Sunday')
  {
    alert('Weekend!')
  }
  else{
    alert('BORRRRRIIINNNGGG')
  }

}
