import { appDispatcher } from './Dispatcher'
import { ActionType } from './Actions'

export const toastStore = {message: undefined, show: null}
appDispatcher.register(payload => {
  if (payload.actionType === ActionType.TOAST_SHOW) {
    toastStore.message = payload.message
    toastStore.show()
  }
})