import moment from 'moment/dist/moment'
import 'moment/dist/locale/es'
moment.locale('es')

export const formatDate = (date) => {
  return moment(date).format('HH:mm a, MMMM Do')
}
