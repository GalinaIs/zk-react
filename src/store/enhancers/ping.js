export const ping = store => next => action => {
  console.log(
    `Тип события: ${action.type}, дополнительные данные события: ${action.payload}`
  )
  console.log(store.getState())
  return next(action)
}
