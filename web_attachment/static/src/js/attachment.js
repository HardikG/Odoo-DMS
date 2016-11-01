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
                dialog = new Dialog(self, {
                    title: _t('Attachment(s) for ' + self.dataset.model + " id : " + self.model_id), subtitle: '',
                    size: 'large',
                    dialogClass: '',
                    $content: false,
                    buttons: [{text: _t("Close"), close: true}]
                });
                console.log(self);
                dialog.open();
            });
        },
        open_attachments: function(){
            dialog = new Dialog(this, {
                title: _t('Attachment(s)'), subtitle: '',
                size: 'large',
                dialogClass: '',
                $content: false,
                buttons: [{text: _t("Close"), close: true}]
            });
            console.log(this);
            dialog.open();
        },
    });
});