require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

//获取图片相关的信息
var imageDatas = require('../data/imageDatas.json');

//使用立即执行函数，将图片信息转换成图片URL路径信息
imageDatas = function getImageURL(imageDataArr){
  for(let i=0,j=imageDataArr.length;i<j;i++){
      var singleImageData = imageDataArr[i];
      singleImageData.imageURL = require('../images/'+singleImageData.fileName);

      imageDataArr[i] = singleImageData;
  }
  return imageDataArr;
}(imageDatas);


class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec">


        </section>
        <nav className="controller-nav">

        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
