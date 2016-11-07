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
                title: _t('Attachment(s) for ' + self.dataset.model + " id : " + self.model_id),
                size: 'large',
                $content: $(QWeb.render("AttachmentView", {})),
                buttons: [{text: _t("Close"), close: true}]
            });
            dialog.open();
            console.log(dialog.$content);
            elem = dialog.$content[2];
            console.log("elemmm",elem);
            self.makeDroppable(elem,self.upload_file);
            dialog.$content.find(".open-file-uploader").click(function(e){
                self.open_file_uploader();
            });
        },
        open_file_uploader: function(){
            alert("Nailed It!!!!!");
        },
        upload_file: function(e){
            console.log("eeeee",e);
        },
        makeDroppable: function(element, callback) {

            var input = document.createElement('input');
            input.setAttribute('type', 'file');
            input.setAttribute('multiple', true);
            input.style.display = 'none';

            input.addEventListener('change', triggerCallback);
            element.appendChild(input);

            element.addEventListener('dragover', function(e) {
                e.preventDefault();
                e.stopPropagation();
                element.classList.add('dragover');
            });
            element.addEventListener('mouseover', function(e) {
                e.preventDefault();
                e.stopPropagation();
                element.classList.add('dragover');
            });
            element.addEventListener('mouseout', function(e) {
                e.preventDefault();
                e.stopPropagation();
                element.classList.remove('dragover');
            });
            element.addEventListener('dragleave', function(e) {
                e.preventDefault();
                e.stopPropagation();
                element.classList.remove('dragover');
            });

            element.addEventListener('drop', function(e) {
                e.preventDefault();
                e.stopPropagation();
                element.classList.remove('dragover');
                triggerCallback(e);
            });

            element.addEventListener('click', function() {
                input.value = null;
                input.click();
            });

            function triggerCallback(e) {
                var files;
                if(e.dataTransfer) {
                    files = e.dataTransfer.files;
                } else if(e.target) {
                    files = e.target.files;
                }
                callback.call(null, files);
            }
        },
    });
});