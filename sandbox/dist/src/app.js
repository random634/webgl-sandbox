!function(e){var t={};function r(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=4)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}();var n=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.gl=t,this._baseMat4=mat4.create(),this.modelViewMatrix=mat4.create(),mat4.translate(this.modelViewMatrix,this._baseMat4,[-0,0,-6]),this.x=0,this.y=0,this.width=100,this.height=100}return i(e,[{key:"setSize",value:function(e,t){this.width=e,this.height=t}},{key:"setScale",value:function(e){}},{key:"setRotation",value:function(e){}},{key:"setPosition",value:function(e,t){this.x=e,this.y=t,mat4.translate(this.modelViewMatrix,this._baseMat4,[e,t,-6])}}]),e}();t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}();var n=function(){function e(t,r,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.gl=t;var n=this.getShader(r,t.VERTEX_SHADER),a=this.getShader(i,t.FRAGMENT_SHADER);if(n&&a){if(this.program=t.createProgram(),t.attachShader(this.program,n),t.attachShader(this.program,a),t.linkProgram(this.program),!t.getProgramParameter(this.program,t.LINK_STATUS))return console.error("Cannot load shader: \n"+t.getProgramInfoLog(this.program)),null;t.detachShader(this.program,n),t.detachShader(this.program,a),t.deleteShader(n),t.deleteShader(a),t.useProgram(null)}}return i(e,[{key:"getShader",value:function(e,t){var r=this.gl,i=r.createShader(t);return r.shaderSource(i,e),r.compileShader(i),r.getShaderParameter(i,r.COMPILE_STATUS)?i:(console.error("Shader error: \n"+r.getShaderInfoLog(i)),null)}}]),e}();t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),n=o(r(0)),a=o(r(1));function o(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e,r,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.material=new a.default(e,r,i),n.aVertexPosLoc=e.getAttribLocation(n.material.program,"aVertexPos"),n.aTextureCoordLoc=e.getAttribLocation(n.material.program,"aTextureCoord"),n.uSamplerLoc=e.getUniformLocation(n.material.program,"uSampler"),n.uModelViewMatrixLoc=e.getUniformLocation(n.material.program,"uModelViewMatrix"),n.uProjectionMatrixLoc=e.getUniformLocation(n.material.program,"uProjectionMatrix"),n.vertexPosBuffer=e.createBuffer(),n._setupVertexPosBuffer(n.width,n.height),n.textureCoordBuffer=e.createBuffer(),n._setupTextureCoordBuffer(),n.indexBuffer=e.createBuffer(),n._setupIndexBuffer(),n.texture=e.createTexture(),n._setupTexture(),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default),i(t,[{key:"_setupVertexPosBuffer",value:function(e,t){var r=this.gl;r.bindBuffer(r.ARRAY_BUFFER,this.vertexPosBuffer);var i=[-.5*e,-.5*t,-.5*e,.5*t,.5*e,.5*t,.5*e,-.5*t];r.bufferData(r.ARRAY_BUFFER,new Float32Array(i),r.STATIC_DRAW)}},{key:"_setupTextureCoordBuffer",value:function(){var e=this.gl;e.bindBuffer(e.ARRAY_BUFFER,this.textureCoordBuffer);e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),e.STATIC_DRAW)}},{key:"_setupIndexBuffer",value:function(){var e=this.gl;e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,this.indexBuffer);e.bufferData(e.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),e.STATIC_DRAW)}},{key:"_setupTexture",value:function(e){var t=this.gl,r=t.RGBA,i=t.RGBA,n=t.UNSIGNED_BYTE;if(null==e){t.bindTexture(t.TEXTURE_2D,this.texture);var a=new Uint8Array([0,0,255,255]);t.texImage2D(t.TEXTURE_2D,0,r,1,1,0,i,n,a)}else t.bindTexture(t.TEXTURE_2D,this.texture),t.texImage2D(t.TEXTURE_2D,0,r,i,n,e),this._isPowerOf2(e.width)&&this._isPowerOf2(e.height)?t.generateMipmap(t.TEXTURE_2D):(t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR))}},{key:"_isPowerOf2",value:function(e){return 0==(e&e-1)}},{key:"render",value:function(e){var t=this.gl,r=t.FLOAT;t.bindBuffer(t.ARRAY_BUFFER,this.vertexPosBuffer),t.vertexAttribPointer(this.aVertexPosLoc,2,r,!1,0,0),t.enableVertexAttribArray(this.aVertexPosLoc);var i=t.FLOAT;t.bindBuffer(t.ARRAY_BUFFER,this.textureCoordBuffer),t.vertexAttribPointer(this.aTextureCoordLoc,2,i,!1,0,0),t.enableVertexAttribArray(this.aTextureCoordLoc),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.indexBuffer),t.useProgram(this.material.program),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.texture),t.uniform1i(this.uSamplerLoc,0),t.uniformMatrix4fv(this.uModelViewMatrixLoc,!1,this.modelViewMatrix),t.uniformMatrix4fv(this.uProjectionMatrixLoc,!1,e);var n=t.UNSIGNED_SHORT;t.drawElements(t.TRIANGLES,6,n,0),t.useProgram(null)}},{key:"setSize",value:function(e,r){(function e(t,r,i){null===t&&(t=Function.prototype);var n=Object.getOwnPropertyDescriptor(t,r);if(void 0===n){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,r,i)}if("value"in n)return n.value;var o=n.get;return void 0!==o?o.call(i):void 0})(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"setSize",this).call(this,e,r),this._setupVertexPosBuffer(this.width,this.height)}},{key:"setSpriteFrame",value:function(e){this._setupTexture(e)}}]),t}();t.default=u},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,n=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),a=r(0),o=(i=a)&&i.__esModule?i:{default:i};var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));r.projectionMatrix=mat4.create();var i=[-.5*e.canvas.clientWidth,.5*e.canvas.clientWidth],n=[-.5*e.canvas.clientHeight,.5*e.canvas.clientHeight];return mat4.ortho(r.projectionMatrix,i[0],i[1],n[0],n[1],.1,100),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default),n(t,[{key:"changeCamera",value:function(e,t){Math.PI,gl.canvas.clientWidth,gl.canvas.clientHeight,mat4.create()}}]),t}();t.default=u},function(e,t,r){"use strict";var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),n=o(r(3)),a=o(r(2));function o(e){return e&&e.__esModule?e:{default:e}}window.renderLoop=function e(t){!0===(arguments.length>1&&void 0!==arguments[1]&&arguments[1])?window.game=new l:window.game.update(t),requestAnimationFrame(e)};var u="\nattribute vec4 aVertexPos;\nattribute vec2 aTextureCoord;\n\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nvarying highp vec2 vTextureCoord;\n\nvoid main() {\n  gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPos;\n  vTextureCoord = aTextureCoord;\n}\n",s="\n// precision mediump float;\n\nvarying highp vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main() {\n  // gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n  gl_FragColor = texture2D(uSampler, vTextureCoord);\n}\n",l=function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.canvasElm=document.createElement("canvas"),this.canvasElm.width=800,this.canvasElm.height=600,this.gl=this.canvasElm.getContext("webgl"),this.gl.clearColor(.4,.6,1,0),document.body.appendChild(this.canvasElm),this.camera=new n.default(this.gl),this.sprite1=new a.default(this.gl,u,s),this.sprite2=new a.default(this.gl,u,s),this.sprite1.setSize(360,360),this.sprite2.setSize(460,460),this.sprite1.setPosition(0,150),this.sprite2.setPosition(0,-150);var r=new Image;r.src="res/img1.png",r.onload=function(){t.sprite1.setSpriteFrame(r)};var i=new Image;i.src="res/img2.png",i.onload=function(){t.sprite2.setSpriteFrame(i)},this.timeElapse=0,this.timeStampLast=-1}return i(e,[{key:"update",value:function(e){var t=0;this.timeStampLast>=0?(t=(e-this.timeStampLast)/1e3,this.timeStampLast=e):this.timeStampLast=e,this.timeElapse+=t,this.timeElapse>2&&(this.timeElapse=0);var r=200*this.timeElapse;this.sprite1.setPosition(r,this.sprite1.y),this.sprite2.setPosition(-r,this.sprite2.y),this.gl.viewport(0,0,this.canvasElm.width,this.canvasElm.height),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.sprite1.render(this.camera.projectionMatrix),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE),this.sprite2.render(this.camera.projectionMatrix),this.gl.flush()}}]),e}()}]);
//# sourceMappingURL=app.js.map