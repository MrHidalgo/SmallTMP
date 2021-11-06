module.exports = function globPathName(arg) {

  let _str = JSON.stringify(arg),
    _num = _str.indexOf('inner/') + 'inner/'.length,
    _path = _str.slice(_num);

  return _path.substr(0, _path.indexOf('/'));

};
