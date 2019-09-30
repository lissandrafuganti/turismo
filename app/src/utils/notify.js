
import { Notify } from 'quasar'

const notification = (icon, message, position, color) => {
  Notify.create({
    icon,
    message,
    position,
    color,
    actions: [{ icon: 'mdi-close', color: 'white' }]
  })
}

export default notification
