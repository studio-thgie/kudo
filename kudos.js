function buildStepsBreadcrumb (wizard, element, steps) {
    const $steps = document.getElementById(element)
    $steps.innerHTML = ''
    for (let label in steps) {
      if (steps.hasOwnProperty(label)) {
        const $li = document.createElement('li')
        const $a = document.createElement('a')
        $li.classList.add('nav-item')
        $a.classList.add('nav-link')
        if (steps[label].active) {
          $a.classList.add('active')
        }
        $a.setAttribute('href', '#')
        $a.innerText = label
        $a.addEventListener('click', e => {
          e.preventDefault()
          wizard.revealStep(label)
        })
        $li.appendChild($a)
        $steps.appendChild($li)
      }
    }
  }
  
  function onStepChange(wizard, selector) {
      const steps = wizard.getBreadcrumb()
      buildStepsBreadcrumb(wizard, selector, steps)
  }
  
  const wizard = new window.Zangdar('#wizard', {
    onStepChange: () => {
      onStepChange(wizard, 'steps-native')
    },
    onSubmit(e) {
      e.preventDefault()
      console.log(e.target.elements)
      return false
    }
  })
  
  onStepChange(wizard, 'steps-native')

  var camera = document.getElementById('camera');
  var frame = document.getElementById('frame');

  var cameraRoll = $("#cameraRoll")

  camera.addEventListener('change', function(e) {
      var file = e.target.files[0];
      console.log('file=' + URL.createObjectURL(file));
      // Do something with the image file.
      frame.src = URL.createObjectURL(file);
      addImageToView(file)
  });

  function addImageToView(file) {
      var photo_wrapper = $('<div class="col-6 col-sm-4 mb-3"><div/>'),
          photo = $('<div class="rounded"><div/>');
      photo.css({ 'background-image': "url('" + URL.createObjectURL(file) + "')" });
      photo.addClass('cameraRoll');
      cameraRoll.prepend(photo_wrapper.append(photo));
  }