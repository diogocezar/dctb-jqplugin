(function ($){
    $.fn.dctb = function(config) {
        var config = $.extend({
            action    : null,
            call_back : null,
            value     : this.val() || this.html(),
            id        : this.selector
        }, config);

        this.__is_empty = function(c){
            return (c.value == "" || c.value == null || c.value == undefined);
        };

        this.__click = function(c){
            if($(c.id).length){
                $(c.id).on('click', function(){
                    c.call_back();
                });
            }
        };

        if(config.action == null)
            return this;
        else
            return this[config.action](config);
    };
 
}(jQuery));