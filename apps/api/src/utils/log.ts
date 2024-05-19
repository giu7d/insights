import colors from 'colors'

import env from '@/env'

const api_url = `${env.ENV === 'development' ? 'http' : 'https'}://${env.API_HOST}:${env.API_PORT}`

function logServerStart() {
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

function logServerError(error: string) {
  console.log(colors.bgRed('ERROR:'), error)
}

export default { logServerStart, logServerError }
