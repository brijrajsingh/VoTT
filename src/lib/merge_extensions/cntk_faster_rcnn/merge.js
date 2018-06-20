var fs = require('fs');
const mergedirs = require('merge-dirs').default;

const CONF_CNTK_NEGATIVE_FOLDER="\\negative";
const CONF_CNTK_POSITIVE_FOLDER="\\positive";
const CONF_CNTK_TEST_IMAGES_FOLDER="\\testImages";



function isDirSync(aPath) {
    try {
        console.log('checkging dir ' + aPath)
      return fs.statSync(aPath).isDirectory();
    } catch (e) {
      if (e.code === 'ENOENT') {
        return false;
      } else {
        throw e;
      }
    }
  }

exports.MergeOutputs = function(type,dir1Path,dir2Path,outputDirPath)
{   
    if(type == 'cntk')
        {
            //check if the dir1Path and dir2Path exist and create the outputDirector if it doesn't exist
            if ((fs.existsSync(dir1Path)) && (fs.existsSync(dir2Path))) {
                console.log('directories exist..');
                //copy data from dir1Path to output folder
                mergedirs(dir1Path,outputDirPath,'overwrite');
                //copy data from dir2Path to output folder
                mergedirs(dir2Path,outputDirPath);
            }
        }
    
};
