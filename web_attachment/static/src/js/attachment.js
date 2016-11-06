/*global openerp:false */
odoo.define('web.attachment', function (require) {
    var Sidebar = require('web.Sidebar');
    var Dialog = require("web.Dialog");
    var core = require('web.core');
    var QWeb = core.qweb;
    var _t = core._t;

    Sidebar.include({
        redraw: function() {
            var self = this;
            this._super();
            this.$el.append("<button type='button' class='btn btn-default fa fa-paperclip oe_web_attachment'></button>");
            this.$(".oe_web_attachment").click(function(){
                self.open_attachments();
            });
        },
        open_attachments: function(){
            var self=this;
            dialog = new Dialog(this, {
                title: _t('Attachment(s)'), subtitle: '',
                size: 'large',
                dialogClass: '',
                $content: QWeb.render("AttachmentView", {}),
                buttons: [{text: _t("Close"), close: true}]
            });
            console.log("ddd",$(dialog.$content).find(".open-file-uploader"));
            $(dialog.$content).find(".open-file-uploader")[0].click(function(){
                alert("yo yo");
                self.open_file_uploader();
            });
            dialog.open();
        },
        open_file_uploader: function(){
            alert("Nailed It!!!!!");
        }
    });
});