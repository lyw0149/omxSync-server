var OmxManager = require('omx-manager');
var manager = new OmxManager();
var camera = manager.create('video.mkv',{
  '-o': 'hdmi',
  '--vol': 13,
  '-b': true,
});
camera.play();
