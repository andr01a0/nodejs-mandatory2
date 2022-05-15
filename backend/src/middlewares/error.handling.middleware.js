import createError from 'http-errors'

export const error = (req, res, next) => {
  next(createError(404))
}

export const errorHandler = (err, req, res, next) => {
  // set locals, only providing error in development
  const error = process.env.NODE_ENV === 'development' ? {message: err.message} : {}

  // render the error page
  res.status(err.status || 500)
  res.send(error)
}
