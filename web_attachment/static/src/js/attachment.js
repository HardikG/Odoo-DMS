/*global openerp:false */
odoo.define('web.attachment', function (require) {
    var Sidebar = require('web.Sidebar');
    Sidebar.include({
        redraw: function() {
            this._super();
            this.$el.append("<button type='button' class='btn btn-default fa fa-paperclip oe_web_attachment'></button>");
            this.$(".oe_web_attachment").click(this.open_attachments);
        },
        open_attachments: function(){
            alert("Hello World!!!!");
        },
    });
});