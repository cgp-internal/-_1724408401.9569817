// Leaflet.js

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.L = {})));
}(this, (function (exports) {
  'use strict';

  var version = '1.7.1';

  function extend(dest, src) {
    for (var key in src) {
      dest[key] = src[key];
    }
    return dest;
  }

  var DomUtil = {
    get: function (elem) {
      return document.getElementById(elem);
    },
    create: function (tagName, className) {
      var ele = document.createElement(tagName);
      if (className) {
        ele.className = className;
      }
      return ele;
    },
    addClass: function (ele, className) {
      if (ele.classList) {
        ele.classList.add(className);
      } else {
        ele.className += ' ' + className;
      }
    },
    removeClass: function (ele, className) {
      if (ele.classList) {
        ele.classList.remove(className);
      } else {
        ele.className = ele.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
      }
    },
    setOpacity: function (ele, value) {
      ele.style.opacity = value;
    },
    setPosition: function (ele, pos) {
      ele.style.left = pos.x + 'px';
      ele.style.top = pos.y + 'px';
    }
  };

  var Map = function Map(id, options) {
    this._init(id, options);
  };

  Map.prototype = {
    _init: function (id, options) {
      this._leaflet_id = 'leaflet-' + Date.now();
      this._mapPane = DomUtil.create('div', 'leaflet-pane');
      this._container = DomUtil.get(id);
      this._container.appendChild(this._mapPane);
      this._initLayout();
      this._initEvents();
    },
    _initLayout: function () {
      this._mapPane.style.width = this._container.offsetWidth + 'px';
      this._mapPane.style.height = this._container.offsetHeight + 'px';
    },
    _initEvents: function () {
      var self = this;
      this._container.addEventListener('click', function (e) {
        self.fire('click', e);
      }, true);
    },
    fire: function (type, e) {
      if (this._events[type]) {
        this._events[type].call(this, e);
      }
    }
  };

  exports.Map = Map;
  exports.version = version;
  exports.DomUtil = DomUtil;
})));