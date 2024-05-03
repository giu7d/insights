const { APP_ENV = 'development' } = process.env

function isProductionEnv() {
  return APP_ENV === 'production'
}

function getName() {
  if (isProductionEnv()) return 'Splitter'
  return `Splitter (${APP_ENV})`
}

function getBundleIdentifier() {
  if (isProductionEnv()) return 'com.prisma.splitter'
  return `com.prisma.splitter.${APP_ENV.toLowerCase()}`
}

const Application = {
  isProductionEnv,
  getName,
  getBundleIdentifier,
}

export default Application
