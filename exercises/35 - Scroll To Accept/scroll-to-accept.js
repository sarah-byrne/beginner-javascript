const terms = document.querySelector('.terms-and-conditions')
const button = document.querySelector('.accept')

const handleObservation = o => {
  if (o[0].isIntersecting) {
    if (button.disabled) {
      button.disabled = false
      observer.unobserve(terms.lastElementChild)
    }
  }
}

const observer = new IntersectionObserver(handleObservation)
observer.observe(terms.lastElementChild)
