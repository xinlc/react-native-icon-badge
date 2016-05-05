var React = require('react-native');

var {StyleSheet} = React;

var styles = StyleSheet.create({
  IconBadge: {
    position:'absolute',
    top:1,
    right:1,
    width:20,
    height:20,
    borderRadius:15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF0000'
  },
});

module.exports = styles;