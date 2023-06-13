let hooks = {}

hooks.key = {
  mounted() {
    let input = document.getElementById('message-input')
    input.addEventListener('keypress', e => {
      if (e.key == 'Enter') {
        if (e.ctrlKey) {
          this.pushEvent('send_message', {message: {message: e.target.value}})
          e.target.value = ''
        } else {
          e.preventDefault()
          return false;
        }
      }
    }, false)
  }
}

export default hooks