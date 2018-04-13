(function ($) {
  $.extend($.fn, {
    fadeIn: function (speed, easing, complete) {
      if (typeof(speed) === 'undefined') speed = 400;
      if (typeof(easing) === 'undefined') {
        easing = 'swing';
      } else if (typeof(easing) === 'function') {
        if (typeof(complete) === 'undefined') complete = easing;
        easing = 'swing';
      }

      $(this).css({
        display: 'block',
        opacity: 0
      }).animate({
        opacity: 1
      }, speed, easing, function () {
        // complete callback
        complete && typeof(complete) === 'function' && complete();
      });

      return this;
    },
    fadeOut: function (speed, easing, complete) {
      if (typeof(speed) === 'undefined') speed = 400;
      if (typeof(easing) === 'undefined') {
        easing = 'swing';
      } else if (typeof(easing) === 'function') {
        if (typeof(complete) === 'undefined') complete = easing;
        easing = 'swing';
      }

      $(this).css({
        opacity: 1
      }).animate({
        opacity: 0
      }, speed, easing, function () {
        $(this).css('display', 'none');
        // complete callback
        complete && typeof(complete) === 'function' && complete();
      });

      return this;
    },
    fadeToggle: function (speed, easing, complete) {
      return this.each(function () {
        var el = $(this);
        el[(el.css('opacity') === 0 || el.css('display') === 'none') ? 'fadeIn' : 'fadeOut'](speed, easing, complete)
      })
    }
  });
  $.fn.slideRight = function (speed, callback) {
    //获取元素position
    var position = this.css('position');
    this.show().css({
      position: 'absolute',
      visibility: 'hidden'
    });
    $('html,body').css({
      overflow: 'hidden',
      height: '100%'
    });
    //获取元素宽度
    var width = this.width() === 0 ? $(window).width() : this.width();

    //-------通过伸缩元素宽度实现动画-------
    //return this.css({
    //    top: $(window).scrollTop(),
    //    width: 0,
    //    position: position,
    //    visibility: 'visible',
    //    overflow: 'auto'
    //}).animate({ width: width }, speed, null, callback);

    //-------通过移动元素相对位置实现动画-------
    return this.css({
      top: $(window).scrollTop(),
      left: -width,
      position: position,
      visibility: 'visible',
      overflow: 'auto',
    }).animate({ left: 0 }, speed, null, callback);
  };

  $.fn.slideLeft = function (speed, callback) {
    //获取元素position
    var position = this.css('position');
    this.show().css({
      position: 'absolute',
      visibility: 'hidden'
    });
    $('html,body').css({
      overflow: '',
      height: ''
    });
    //获取元素宽度
    var width = this.width();
    //-------通过伸缩元素宽度实现动画-------
    //return this.css({
    //    top: 0,
    //    position: position,
    //    visibility: 'visible',
    //    overflow: 'auto'
    //}).animate({ width: 0 }, speed, null, callback);

    //-------通过移动元素相对位置实现动画-------
    return this.css({
      top: 0,
      position: position,
      visibility: 'visible',
      overflow: 'auto'
    }).animate({ left: -width }, speed, null, callback);
  };

  $.fn.slideDown = function (speed, callback) {
    //获取元素position
    var position = this.css('position');
    this.show().css({
      position: 'absolute',
      visibility: 'hidden'
    });
    $('html,body').css({
      overflow: 'hidden',
      height: '100%'
    });
    //获取元素高度
    var height = this.height() === 0 ? $(window).height() : this.height();

    //-------通过伸缩元素高度实现动画-------
    //return this.css({
    //    position: position,
    //    visibility: 'visible',
    //    overflow: 'auto',
    //    height: 0
    //}).animate({ height: height, top: $(window).scrollTop() }, speed, null, callback);

    //-------通过移动元素相对位置实现动画-------
    return this.css({
      top: -height,
      left: 0,
      position: position,
      visibility: 'visible',
      overflow: 'auto'
    }).animate({ top: $(window).scrollTop() }, speed, null, callback);
  };

  $.fn.slideUp = function (speed, callback) {
    //获取元素position
    var position = this.css('position');
    this.show().css({
      position: 'absolute',
      visibility: 'auto'
    });
    $('html,body').css({
      overflow: '',
      height: ''
    });
    //获取元素高度
    var height = this.height();
    //-------通过伸缩元素高度实现动画-------
    //return this.css({
    //    position: position,
    //    visibility: 'visible',
    //    overflow: 'hidden',
    //    height: height
    //}).animate({ height: 0 }, speed, null, callback);

    //-------通过移动元素相对位置实现动画-------
    return this.css({
      left: 0,
      position: position,
      visibility: 'visible',
      overflow: 'auto'
    }).animate({ top: -height }, speed, null, callback);
  };
})(Zepto);