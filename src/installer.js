const {exec} = require('@actions/exec')
const path = require('path')

module.exports = {installGitversion}

/**
 * Install OTP.
 *
 * @param {string} version
 */
async function installGitversion(version) {
  if (process.platform === 'linux') {
    await exec(path.join(__dirname, 'install-gitversion-ubuntu'), [version])
    return
  }

  throw new Error(
    '@actions/setup-gitversion only supports Ubuntu Linux at this time'
  )
}
