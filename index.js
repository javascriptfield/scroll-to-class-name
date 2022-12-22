export default function scrollToClassName(className) {
  if(!className) {
    console.error('must provide a class name')
      return
  }
  const observer = new MutationObserver(function (mutationList) {
    mutationList.forEach((mutation) => {
      switch (mutation.type) {
        case 'attributes':
          if (mutation.target.className && mutation.target.className.includes(className)) {
              mutation.target && mutation.target.scrollIntoView({
              // start,center,end,nearest
              block: 'center',
              // auto,instant,smooth
              behavior: 'smooth'
            })
          }
          break
      }
    })
  })
  observer.observe(window.document.body, { subtree: true, attributeFilter: ['class'], attributeOldValue: true })
}
