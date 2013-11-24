$.widget("ns.slider", {
  
  options: {
    index:      0,
    max_index:  0
  },

  _create: function(){
    var self = this;

    if( this.options.max_index == 0 || this.options.max_index == null){
      this.options.max_index = this.element.children().length;
    }

    $("a[ns-slider-page]").click(function(e){
      var index = parseInt( $(this).attr("ns-slider-page") );
      self._activatePaneByIndex( index );

      e.preventDefault();
      return false;
    });

    $(window).resize( this._update );

  },

  _update: function(){
    this._activatePaneByIndex( this.options.index );
  },

  _setOption: function( key, value ) {
    this.options[ key ] = value;
    this._update();
  },

  _activatePaneByIndex: function(index){
    if( index < 0 || index > this.options.max_index ) return;

    var motion_size = this.element.parent().width();
    console.log(motion_size)
    this.element.children().eq(0).animate({"margin-left": "-"+(index * motion_size)+"px" }, 400, "linear");
    this.options.index = index;
  },


  destroy: function(){
    this.element.animate({left: "0px" }, 400, "linear");
    return;
  }


});