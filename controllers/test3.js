let curVersion = 'V0.11.12'
function fn (version) {
  this.initialVersion = version
  this.curVersion = ''
  this.history =  []
  this.part = []
  this.getPart = function () {
    let str = this.curVersion || this.initialVersion
    str = str.toLowerCase()
    let temp = str.substr(str.indexOf('v') + 1).split('.')
    this.part  = temp
  }
  this.patch = function () {
    this.getPart()
    let patch = +this.part[2]
    patch++
    console.log(typeof patch, 'patch')
    this.history.push(this.curVersion)
    this.curVersion = this.part[0] + '.' + this.part[1] + '.' + patch
    return this.curVersion
  }
  this.minor = function () {
    this.getPart()
    let minor = +this.part[1]
    minor++
    let patch = 0
    this.history.push(this.curVersion)
    this.curVersion = this.part[0] + '.' + minor + '.' + patch
    return this.curVersion
  }
  this.major = function () {
    this.getPart()
    let major = +this.part[0]
    major++
    let minor = 0
    let patch = 0
    this.history.push(this.curVersion)
    this.curVersion = major + '.' + minor + '.' + patch
    return this.curVersion
  }
  this.rollback = function () {
    let temp = this.history[this.history.length - 1]
    this.history = this.history.splice(1, 1)
    return temp
  }
}