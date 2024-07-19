import colors from 'colors'

import env from '@/env'

const api_url = `${env.ENV === 'development' ? 'http' : 'https'}://${env.API_HOST}:${env.API_PORT}`

function serverStart() {
  console.log(`

\t░█▀█░█▀█░▀█▀
\t░█▀█░█▀▀░░█░
\t░▀░▀░▀░░░▀▀▀\tv1.0.0

----------------------------------------

\t⚡️ ${colors.green('Server is running!')} ⚡️

  ${colors.magenta('API ENV:')} ${env.ENV}
  ${colors.magenta('API URL:')} ${colors.underline(api_url)}

----------------------------------------

`)
}

function serverError(error: string) {
  console.log(colors.bgRed('ERROR:'), error)
}

const Log = {
  serverStart,
  serverError,
}

export default Log
