export function checkCredentials( params ) {
  if (
    params.username.toLowerCase() !== '' ||
    params.password !== ''
  ) {
    return false
  }

  return true
}
