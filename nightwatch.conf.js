const seleniumServer = require("selenium-server");

const config = {
  "src_folders" : ["tests"],
  "output_folder" : "reports",

  "selenium": {
    "start_process": true,
    "server_path": seleniumServer.path,
    "log_path": false,
    "host": "127.0.0.1",
    "port": 4444
  },

  "test_settings" : {
    "default" : {
      "launch_url" : "http://localhost",
      "selenium_port"  : 4444,
      "selenium_host"  : "localhost",
      "silent": true,
      "screenshots" : {
        "enabled" : false,
        "path" : ""
      },
      "desiredCapabilities": {
        "browserName": "firefox",
        "marionette": true
      }
    }
  }
}
module.exports = config;